import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from '@/layouts/Layout'
import Home from '@/pages/Home'
import Supplier from '@/pages/Supplier'
import Profile from '@/pages/Profile'
import Auth from './pages/Auth'
// import { LoginForm } from './components/login-form'
// import { AuthProvider } from './components/AuthProvider' 

const App = () => {
  return (
    <HelmetProvider>
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/auth2" element={<LoginForm />} /> */}

          {/* Protected/General Layout Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      {/* </AuthProvider> */}
    </HelmetProvider>
  )
}

export default App
