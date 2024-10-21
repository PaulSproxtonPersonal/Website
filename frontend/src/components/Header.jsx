import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Header() {
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
            <ul>
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
            </ul>
        </header>
    )
}

export default Header
