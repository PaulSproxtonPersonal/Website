import { FaSignInAlt, FaSignOutAlt, FaUser, FaLinkedin } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<header className='header'>
			<div className='logo'>
				<Link to='/' className='headerTitle'>
					Sproxton General Contracting
				</Link>
			</div>
			<ul className='headerMenu-list'>
				<li className='headerMenu-item'>
					<Link to='/itprofessional' className='headerMenu-link'>
						IT Professional
					</Link>
				</li>
				<li className='headerMenu-item'>
					<Link to='/handyman' className='headerMenu-link'>
						General Handyman
					</Link>
				</li>
			</ul>
			<ul
				style={{
					marginRight: '10px',
				}}>
				<li>
					<Link to='/contact' className='headerLoginInfo'>
						<FaSignInAlt /> Contact Us
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
