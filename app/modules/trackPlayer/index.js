export const PLAY_NEW = 'TRACK_PLAYER/PLAY_NEW';
export const PLAY = 'TRACK_PLAYER/PLAY';
export const PAUSE = 'TRACK_PLAYER/PAUSE';
export const STOP = 'TRACK_PLAYER/STOP';

export const STATUS_PLAYING = 'PLAYING';
export const STATUS_PAUSED = 'PAUSED';
export const STATUS_STOPPED = 'STOPPED';

const initialState = {
  artist: null,
  title: null,
  status: STATUS_STOPPED,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_NEW:
      return {
        artist: action.payload.artist,
        title: action.payload.title,
        status: STATUS_PLAYING,
      };
    case PLAY:
      return {
        ...state,
        status: STATUS_PLAYING,
      };
    case PAUSE:
      return {
        ...state,
        status: STATUS_PAUSED,
      };
    case STOP:
      return initialState;
    default:
      return state;
  }
};

const playNewTrack = (track) => ({
  type: PLAY_NEW,
  payload: track,
});

const play = () => ({
  type: PLAY,
});

const pause = () => ({
  type: PAUSE,
});

const stop = () => ({
  type: STOP,
});

export const pauseCurrentTrack = () => {
  return async (dispatch, getState, { audioService }) => {
    dispatch(pause());
    await audioService.pauseAsync();
  };
};

export const stopCurrentTrack = () => {
  return async (dispatch, getState, { audioService }) => {
    dispatch(stop());
    await audioService.stopAsync();
  };
};

export const playCurrentTrack = () => {
  return async (dispatch, getState, { audioService }) => {
    dispatch(play());
    await audioService.playAsync();
  };
};

export const playTrack = (track) => {
  return async (dispatch, getState, { audioService }) => {
    dispatch(playNewTrack(track));
    try {
      await audioService.unloadAsync();
      await audioService.loadAsync({ uri: track.url });
      await audioService.playAsync();
    } catch (error) {
      console.error('An error occured: ', error);
    }
  };
};
