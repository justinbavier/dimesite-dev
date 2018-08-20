import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Layout } from 'antd';

import Navigation from './Navigation';
import Landing from './Landing';
import LoginPage from './Login/LoginPage';
import SignupPage from './Signup/SignupPage';
import ProfilePage from './Profile/ProfilePage';

const { Footer, Content } = Layout;

function mapStateToProps(state) {
  return {
    user: state.auth
  }
}

class App extends Component {
  componentDidMount() {
    this.props.hydrateUser(localStorage.id);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout style={{ minHeight: '100vh' }}>
            <Navigation {...this.props} />
            <Content>
              <Route exact path="/" render={(props) => <Landing {...this.props} />} />
              <Route exact path="/login" render={(props) => <LoginPage {...this.props} />} />
              <Route exact path="/signup" render={(props) => <SignupPage {...this.props} />} />
              <Route exact path="/profile" render={(props) => <ProfilePage {...this.props} />} />
            </Content>
            <Footer></Footer>
          </Layout>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(App);
