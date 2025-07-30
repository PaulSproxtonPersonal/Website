import { IoIosContact } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<header className='navbar bg-dark'>
			<h1>
				<Link to='/'>Sproxton General Contracting</Link>
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/services'>Services</Link>
				</li>
			</ul>
			<ul
				style={{
					marginRight: '10px',
				}}>
				<li>
					<Link to='/contact'>
						<IoIosContact /> Contact Us
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
