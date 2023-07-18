import Link from 'next/link';

import styles from '../styles/components/Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<a>
					<div className={styles.logo}>
						<p>
							 <img object-fit="contain" src="https://www.cfsbrands.com/images/CFS-Pri-Logo-FullColor-CMYK.svg" className={styles.logo_img}></img>
						</p>
					</div>
				</a>
			</Link>
			<div className="nav-price snipcart-checkout">
				<span>🛒</span>
				<p className="snipcart-total-price">$0.00</p>
			</div>
		</nav>
	);
};

export default Navbar;
