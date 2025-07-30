import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Handyman from './pages/Handyman'
import Basement from './pages/Basement'
import Contact from './pages/Contact'
import Deck from './pages/Deck'
import Drywall from './pages/Drywall'
import Electrical from './pages/Electrical'
import Flooring from './pages/Flooring'

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/services' element={<Services />} />
						<Route path='/handyman' element={<Handyman />} />
						<Route path='/basement' element={<Basement />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/deck' element={<Deck />} />
						<Route path='/drywall' element={<Drywall />} />
						<Route path='/electrical' element={<Electrical />} />
						<Route path='/flooring' element={<Flooring />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
