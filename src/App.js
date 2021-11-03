import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import { Wrapper, ContentWrapper, StyledMainContent } from './App.styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UsersList from './pages/UsersList/UsersList';
import AddUser from './pages/AddUser/AddUser';
import Navigation from './pages/Navigation/Navigation';
import NewsSection from './pages/NewsSection/NewsSection';
import SearchInput from './pages/SearchInput/SearchInput';
import axios from 'axios';

const App = () => {
  const [group, setGroup] = useState('')

  const fetchGroup = async () => {
    try{
      const res = await axios.get('/groups')
      const newGroup = res.data.groups[0].id
      setGroup(newGroup)

    } catch(ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    fetchGroup()
  }, [])

  const content = (
    <Switch>

      <Route path="/group/:id">
        <UsersList />
      </Route>

      <Route path="/Add-user">
        <AddUser />
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
      </ThemeProvider>
    </Router>
  );
};

export default App;