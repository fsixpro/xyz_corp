import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './screens/Landing'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import EditChannelScreen from './screens/EditChannelScreen'
import { Provider } from 'react-redux'
import store from './stateManagement/store'
import { loadUser } from './stateManagement/actions/authAction'
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  })
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/dashboard' component={DashboardScreen} />
            <Route path='/editchannel' component={EditChannelScreen} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
