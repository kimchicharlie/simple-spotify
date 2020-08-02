import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Audio } from 'expo-av';

import { reducer as playlistsReducer } from './modules/playlists';
import { reducer as trackPlayerReducer } from './modules/trackPlayer';
import MusicApiClient from './services/musicApi';

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  trackPlayer: trackPlayerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      musicApiClient: new MusicApiClient(),
      audioService: new Audio.Sound(),
    })
  )
);

export default store;
