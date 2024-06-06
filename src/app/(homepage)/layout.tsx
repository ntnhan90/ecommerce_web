import { Container } from 'react-bootstrap'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/client/style.css'
import '@/styles/client/custom.css'

import CTopHeader from '@/ui/client/header/CTopHeader';
import CHeader from '@/ui/client/header/CHeader';
import CFooter from "@/ui/client/footer/CFooter";
import BackToTop from '@/components/backToTop/backToTop';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
		<CTopHeader />
		<CHeader />
		<Container>
			{children}
		</Container>
      	<CFooter />
		<BackToTop />
    </>
  )
}