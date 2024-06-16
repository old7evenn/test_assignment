import { Header } from "@/components/header/Header"
import { Container } from "@/components/container/Container"
import { Outlet } from 'react-router-dom';



export const Layout = () => {
 

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
