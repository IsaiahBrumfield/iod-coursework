import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './greeting'
import {NamePart, FullName} from './fullname'
import React from 'react';
import BigCats from './bigcats';
import './Cats.css';
import Emoji from './Emoji'
import { Clock, ClockDisplay } from './Clock';
import { ActivityFinder } from './ActivityFinder'
import { BitcoinRates } from './BitcoinRates'
import MyThemeProvider, { MyThemeContext } from './ThemeContent';

export function App() {

  return (
    <MyThemeProvider>
      <UserProvider>
        <LoginForm />
        <MoviesList />
      </UserProvider>
    </MyThemeProvider>
  );
}

export default App;