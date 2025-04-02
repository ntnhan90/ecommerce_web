'use client'
import { useState } from "react"
import NavbarTop from "@/components/navbars/navbar-top";
import NavbarVertical from "@/components/navbars/navbar-vertical";
import HeaderLogo from "@/components/navbars/header-logo";
// import theme style scss file
import '../../../public/css/fonts.min.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/css/plugins.css'
import '../../../public/css/kaiadmin.css'
import '../../../public/css/demo.css'

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		console.log("12345")
		return setShowMenu(!showMenu);
	};

    return (
       	<div id="wrapper" className={`${showMenu ? 'wrapper' : 'wrapper sidebar_minimize nav_open'}`} cz-shortcut-listen="true"> 
			<NavbarVertical
				showMenu={showMenu}
				onClick={(value:any) => setShowMenu(value)}
				data={{
					showMenu: showMenu,
					SidebarToggleMenu: ToggleMenu
				}}
			/>
            <div className="main-panel">
                <div className="main-header">
					<HeaderLogo 
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
						/>
					<NavbarTop />
				</div>
				<div className="container">
					{children}
				</div>
                
				<footer className="footer">
                  	<div className="container-fluid d-flex justify-content-between">
						<nav className="pull-left">
						<ul className="nav">
							<li className="nav-item">
							<a className="nav-link" href="http://www.themekita.com">
								ThemeKita
							</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="#"> Help </a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="#"> Licenses </a>
							</li>
						</ul>
						</nav>
						<div className="copyright">
						2024, made with <i className="fa fa-heart heart text-danger"></i> by
							<a href="http://www.themekita.com">ThemeKita</a>
						</div>
						<div>
						Distributed by
						<a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
						</div>
                  	</div>
                </footer>
            </div>
        </div>
    )
}