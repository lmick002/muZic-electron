import { IndexRedirect, Route } from 'react-router';

import AlbumDetailed from '../components/Library/AlbumDetailed.react';
import Albums from '../components/Library/Albums.react';

import App from '../components/App.react';
import AppActions from '../actions/AppActions';

import Library from '../components/Library/Library.react';

import React from 'react';

import Settings from '../components/Settings/Settings.react';
import SettingsLibrary from '../components/Settings/SettingsLibrary.react';
import Songs from '../components/Library/Songs.react';

//Initializer
const init = {
    app: () => {
        AppActions.init();
    }
};

// Router
const routes = (
    <Route component={ App } path='/' onEnter={ init.app }>
        <IndexRedirect to="library" />
        <Route component={ Library } path="library">
            <IndexRedirect to="songs" />
            <Route component={ Songs } path="songs" />
            <Route component={ Albums } path="albums" />
            <Route component={ AlbumDetailed } path="albums/:albumId" />
        </Route>
        <Route component={ Settings } path="settings">
            <IndexRedirect to="library" />
            <Route component = { SettingsLibrary } path="library" />
        </Route>
    </Route>
);


export default routes;
