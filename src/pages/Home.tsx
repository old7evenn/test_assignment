import React from "react";
import { Container } from "@/components/container/Container";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { Users } from "@/components/users/Users";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <main className="w-full mt-16">
          <section
            id="home"
            className="bg-custom-image bg-cover bg-center h-[40rem] w-full flex justify-center items-center"
          >
            <HeroSection />
          </section>
          <section id="users" className="w-full grid mt-36">
            <Users />
          </section>
          <section id="signup" className="mt-36 mb-10 px-4 mx-auto">
            <Form />
          </section>
        </main>
      </Container>
    </>
  )
};
