import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>PROVWEB</h3>
			<nav ref={navRef}>
				<a href="https://ixc.provweb.com.br/central_assinante_web/login" target="blank_">Central do Assinante</a>
				<a href="https://watch.tv.br"target="blank_">Watch Brasil</a>
				<a href="https://speedtest.net" target="blank_">Teste de Velocidade</a>
				<a href="/#">Cobertura</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
