import { combineReducers } from 'redux';

// Fetch single playlist dedicated reducer

export const FETCH_PLAYLIST_LAUNCHED = 'PLAYLISTS/FETCH_PLAYLIST_LAUNCHED';
export const FETCH_PLAYLIST_SUCCESS = 'PLAYLISTS/FETCH_PLAYLIST_SUCCESS';
export const FETCH_PLAYLIST_ERROR = 'PLAYLISTS/FETCH_PLAYLIST_ERROR';

const fetchPlaylistInitialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchPlaylistReducer = (
  state = fetchPlaylistInitialState,
  action
) => {
  switch (action.type) {
    case FETCH_PLAYLIST_LAUNCHED:
      return {
        data: null,
        loading: true,
        error: null,
      };
    case FETCH_PLAYLIST_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
      };
    case FETCH_PLAYLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const launchFetchPlaylist = () => ({
  type: FETCH_PLAYLIST_LAUNCHED,
});

const fetchPlaylistSuccess = (data) => ({
  type: FETCH_PLAYLIST_SUCCESS,
  payload: {
    data,
  },
});

const fetchPlaylistError = (err) => ({
  type: FETCH_PLAYLIST_ERROR,
  payload: {
    error: err,
  },
});

export const fetchPlaylist = (playlistId) => {
  return (dispatch, getState, { musicApiClient }) => {
    dispatch(launchFetchPlaylist());
    musicApiClient
      .getPlaylistById(playlistId)
      .then((data) => dispatch(fetchPlaylistSuccess(data)))
      .catch((err) => dispatch(fetchPlaylistError(err)));
  };
};

// Fetch all playlists dedicated reducer

export const FETCH_PLAYLISTS_LAUNCHED = 'PLAYLISTS/FETCH_PLAYLISTS_LAUNCHED';
export const FETCH_PLAYLISTS_SUCCESS = 'PLAYLISTS/FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_ERROR = 'PLAYLISTS/FETCH_PLAYLISTS_ERROR';

const fetchPlaylistsInitialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchPlaylistsReducer = (
  state = fetchPlaylistsInitialState,
  action
) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_LAUNCHED:
      return {
        data: [],
        loading: true,
        error: null,
      };
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case FETCH_PLAYLISTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const launchFetchPlaylists = () => ({
  type: FETCH_PLAYLISTS_LAUNCHED,
});

const fetchPlaylistsSuccess = (data) => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload: {
    data,
  },
});

const fetchPlaylistsError = (err) => ({
  type: FETCH_PLAYLISTS_ERROR,
  payload: {
    error: err,
  },
});

export const fetchPlaylists = () => {
  return (dispatch, getState, { musicApiClient }) => {
    dispatch(launchFetchPlaylists());
    musicApiClient
      .getPlaylists()
      .then((data) => dispatch(fetchPlaylistsSuccess(data)))
      .catch((err) => dispatch(fetchPlaylistsError(err)));
  };
};

export const reducer = combineReducers({
  fetchPlaylist: fetchPlaylistReducer,
  fetchPlaylists: fetchPlaylistsReducer,
});
