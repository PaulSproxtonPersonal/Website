import { Link } from 'react-router-dom'
import { IoIosContact } from 'react-icons/io'

function Services() {
	return (
		<div className='container dark-overlay'>
			<Link to='/contact' className='text-contact'>
				<IoIosContact /> Contact Us
			</Link>
			<div className='services'>
				<h1 className='large'>Services</h1>
				<Link to='/basement' className='text-primary mt-1'>
					Basement Renovation
				</Link>
				<p>
					Want to finish your basement or give it a refresh? Need better use of the space, the
					possibilities are endless. Contact us for a quote or design.
				</p>

				<Link to='/drywall' className='text-primary mt-1'>
					Drywall
				</Link>
				<p>Experienced at drywall installation and repairs. Contact us for a free estimate.</p>

				<Link to='/deck' className='text-primary mt-1'>
					Decks
				</Link>
				<p>
					Has your deck rotted out and need a resurface or repair? Looking for a railing upgrade or
					change? Contact us for a free estimate.
				</p>

				<Link to='/flooring' className='text-primary mt-1'>
					Flooring
				</Link>
				<p>
					Want to update your space with new flooring, we are experienced in hardwood, laminate, and
					luxury vinyl plank (LVP) installations. Contact us for an estimate.
				</p>

				<Link to='/electrical' className='text-primary mt-1'>
					Electrical
				</Link>
				<p>We can handle minor electrical tasks like installing outlets.</p>

				<Link to='/handyman' className='text-primary mt-1'>
					Handyman Services
				</Link>
				<p>
					Got a small household job like a ceiling fan or light installation, appliance install, or
					other job? We will gladly do smaller jobs at a competitive hourly rate.
				</p>
			</div>
		</div>
	)
}

export default Services
