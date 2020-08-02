import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './store';
import BrowsePlaylistsScreen from './modules/playlists/screens/BrowsePlaylists';
import PlaylistScreen from './modules/playlists/screens/Playlist';
import TrackPlayer from './modules/trackPlayer/components/TrackPlayer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000',
              borderBottomWidth: 0,
              height: 60,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ title: "Editor's pick" }}
            component={BrowsePlaylistsScreen}
          />
          <Stack.Screen name="Playlist" component={PlaylistScreen} />
        </Stack.Navigator>
        <TrackPlayer />
      </NavigationContainer>
    </ReduxProvider>
  );
};

registerRootComponent(App);
