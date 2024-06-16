import React from "react";
import { Link } from "../link/Link";
import { Button } from "../button/Button";

export const HeroSection = () => {
  return (
    <div className="max-w-[24rem] px-4">
      <h1 className="text-white text-4xl text-center px-2">
        Test assignment for front-end developer
      </h1>
      <p className="text-white text-base text-center mt-5 mb-7">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Link href="signup">
        <Button>Sign up</Button>
      </Link>
    </div>
  )
};
