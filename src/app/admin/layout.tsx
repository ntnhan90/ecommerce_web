import { Container } from 'react-bootstrap'
import React from 'react'
import '@/styles/admin/globals.scss'
import SidebarProvider from '@/ui/admin/SidebarProvider';
import SidebarOverlay from '@/ui/admin/sidebar/SidebarOverlay';
import Sidebar from '@/ui/admin/sidebar/Sidebar';
import SidebarNav from '@/ui/admin/sidebar/SidebarNav';
import Header from '@/ui/admin/header/Header';
import Footer from '@/ui/admin/footer/Footer';
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
		<SidebarOverlay />
		<Sidebar>
			<SidebarNav />
		</Sidebar>
      	<div className="wrapper d-flex flex-column min-vh-100">
			<Header />
			<div className="body flex-grow-1 px-sm-2 mb-4">
				<Container fluid="lg">
					{children}
				</Container>
			</div>

        	<Footer />
      	</div>
		<SidebarOverlay />
    </SidebarProvider>
  )
}
