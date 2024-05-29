import { Container } from 'react-bootstrap'
import React from 'react'
import '@/styles/admin/globals.scss'
import SidebarProvider from '@/ui/admin/SidebarProvider';
import Footer from '@/ui/admin/footer/Footer';
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      	<div className="wrapper d-flex flex-column min-vh-100">
			<div className="body flex-grow-1 px-sm-2 mb-4">
				<Container fluid="lg">
					{children}
				</Container>
			</div>

        	<Footer />
      	</div>
    </SidebarProvider>
  )
}
