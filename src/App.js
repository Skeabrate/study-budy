import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import { Wrapper, ContentWrapper } from './App.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { users } from './data/users';
import UsersList from './pages/UsersList/UsersList';
import AddUser from './pages/AddUser/AddUser';
import Navigation from './pages/Navigation/Navigation';
import UsersContext from "./context/UsersContext"

const App = () => {
  const [usersData, setUsersData] = useState([...users])

  const content = (
    <Switch>

      <Route exact path="/">
        <UsersList setUsersData={setUsersData}/>
      </Route>

      <Route path="/Add-user">
        <AddUser setUsersData={setUsersData}/>
      </Route>

    </Switch>
  )

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersContext.Provider value={{
          usersData: usersData,
        }}>
          <Wrapper>

            <Navigation />

            <ContentWrapper>
              {content}
            </ContentWrapper>

          </Wrapper>
        </UsersContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;