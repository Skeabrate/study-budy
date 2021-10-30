import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import { Wrapper, ContentWrapper, StyledMainContent } from './App.styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UsersList from './pages/UsersList/UsersList';
import AddUser from './pages/AddUser/AddUser';
import Navigation from './pages/Navigation/Navigation';
import UsersContext from "./context/UsersContext"
import NewsSection from './pages/NewsSection/NewsSection';
import SearchInput from './pages/SearchInput/SearchInput';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

const App = () => {
  const [usersData, setUsersData] = useState([])
  const [group, setGroup] = useState('')

  useEffect(() => {
     axios.get('/groups')
        .then(({data}) => setGroup(data.groups[0]))
        .then(console.log(group))
  }, [])

  useEffect(() => {
    axios.get('/students')
      .then(({ data }) => setUsersData(data.students))
      .catch(err => console.log(err))
  }, [])

  const content = (
    <Switch>

      <Route path="/group/:id">
        <UsersList setUsersData={setUsersData}/>
      </Route>

      <Route path="/Add-user">
        <AddUser setUsersData={setUsersData}/>
      </Route>

      <Route path="/">
        <Redirect to={`/group/${group}`} />
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

            <StyledMainContent>
              <SearchInput />

              <ContentWrapper>
                {content}
              </ContentWrapper>
            </StyledMainContent>

            <NewsSection />

          </Wrapper>
        </UsersContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;