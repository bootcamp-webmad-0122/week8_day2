import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'


import UserMessage from './components/UserMessage/UserMessage'

function App() {

  return (
    <>
      <Navigation />

      <AppRoutes />

      <Footer />

      <UserMessage />

    </>
  )
}

export default App
