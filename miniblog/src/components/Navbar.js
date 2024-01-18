import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { UserAuthentication } from "../hooks/userAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {

	const { user } = useAuthValue();
	const { logout } = UserAuthentication();

	return (
		<nav className={styles.navbar}>
			<NavLink to='/' className={styles.brand}>
				Mini <span>Blog</span>
			</NavLink>
			<ul className={styles.links_list}>
				<li>
					<NavLink to='/' className={({isActive}) => (isActive ? styles.active : null)}>
						Home
					</NavLink>
				</li>

				{!user && (
					<>
						<li>
							<NavLink to='/login' className={({isActive}) => (isActive ? styles.active : null)}>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to='/register' className={({isActive}) => (isActive ? styles.active : null)}>
								Cadastrar
							</NavLink>
						</li>
					</>
				)}

				{user && (
					<>
						<li>
							<NavLink to='/posts/create' className={({isActive}) => (isActive ? styles.active : null)}>
								Create Post
							</NavLink>
						</li>
						<li>
							<NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active : null)}>
								Dashboard
							</NavLink>
						</li>
					</>
				)}

				<li>
					<NavLink to='/about' className={({isActive}) => (isActive ? styles.active : null)}>
						Sobre
					</NavLink>
				</li>
				{user && (
					<li>
						<button onClick={logout}>Sair</button>
					</li>
				)}
			</ul>
		</nav>
	)
};

export default Navbar;