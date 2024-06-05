import { Container } from 'react-bootstrap'
import React from 'react'
import CHeader from '@/ui/client/header/CHeader';
import CFooter from "@/ui/client/footer/CFooter";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ecommerce">
      <Container>
        {children}
      </Container>
      <CFooter />
    </div>
  )
}