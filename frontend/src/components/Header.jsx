import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className="logo">
                <img src="/images/HeadShot1.jpg" alt="Paul Sproxton" />
                <Link to='/' className='headerTitle'>Paul Sproxton</Link>
            </div>
            <ul className="headerMenu-list">
                <li className="headerMenu-item">
                    <a href="#" className="headerMenu-link">IT Professional</a>
                </li>
                <li className="headerMenu-item">
                    <a href="#" className="headerMenu-link">General Handyman</a>    
                </li>
            </ul>
            <ul style={{
                marginRight: '10px'
            }}>
                {user ? (
                    <>
                        <li>
                            <h3 className='headerLoginInfo'>Logged in as {user.name} </h3>
                        </li>
                        <li>
                            <button className="btn" onClick={onLogout}><FaSignOutAlt /> Logout</button>
                        </li>
                    </>

                ) : (
                    <>
                        <li>
                            <Link to='/login' className='headerLoginInfo'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register' className='headerLoginInfo'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}

            </ul>
        </header>
    )
}

export default Header
