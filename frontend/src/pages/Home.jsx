import { Link } from 'react-router-dom'
import { IoIosContact } from 'react-icons/io'

function Home() {
	return (
		<div>
			<div className='home-inner'>
				<h1 className='x-large'>Sproxton General Contracting</h1>
				<div>
					<p className='lead'>
						Locally owned and operated in Brooklin, Ontario serving Durham Region and beyond.
					</p>
					<p className='p-1'>
						We offer a wide range of services from simple handyman jobs to larger renovation
						projects.
					</p>
					<p className='p-1'>
						Evening and weekend work is available if normal working hours are not convenient for
						you.
					</p>

					<p className='text-highlight p-2'>Free Estimates</p>
				</div>
				<Link to='/contact' className='text-contact'>
					<IoIosContact /> Contact Us
				</Link>
			</div>
		</div>
	)
}

export default Home
