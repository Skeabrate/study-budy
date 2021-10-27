import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import { Wrapper } from './App.styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { users } from './data/users';
import UsersList from './pages/UsersList/UsersList';
import AddUser from './pages/AddUser/AddUser';

const App = () => {
  const [usersData, setUsersData] = useState([...users])

  const content = (
    <Switch>

      <Route exact path="/">
        <UsersList usersData={usersData} setUsersData={setUsersData}/>
      </Route>

      <Route path="/add-user">
        <AddUser usersData={usersData} setUsersData={setUsersData}/>
      </Route>

    </Switch>
  )

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-user">Add user</Link>
        </nav>
        
          {content}
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;