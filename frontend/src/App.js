import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import IT from './pages/IT'
import Handyman from './pages/Handyman'

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/itprofessional' element={<IT />} />
						<Route path='/handyman' element={<Handyman />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
