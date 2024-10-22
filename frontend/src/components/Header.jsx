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
                <img
                    src="/images/HeadShot1.jpg"
                    alt="Paul Sproxton"
                    width="60"
                    height="80"
                    style={{
                        verticalAlign: 'middle',
                        marginLeft: '50px',
                        marginRight: '10px',
                        marginTop: '10px'
                    }}
                />
                <Link to='/'>Paul Sproxton Home</Link>
            </div>
            <ul style={{
                marginRight: '10px'
            }}>
                {user ? (
                    <>
                        <li>
                            <h3 style={{ verticalAlign: 'middle', marginTop: '10px' }}>Logged in as {user.name} </h3>
                        </li>
                        <li>
                            <button className="btn" onClick={onLogout}><FaSignOutAlt /> Logout</button>
                        </li>
                    </>

                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
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
