import Scroll from "react-scroll"
const ScrollLink = Scroll.Link

export type LinkProps = {
  children: React.ReactNode
  href: string
  className?: string 
}

export const Link: React.FC<LinkProps> = ({children, href, className}) => {
  return (
    <ScrollLink
      spy={true}
      hashSpy={false}
      smooth={true}
      duration={500}
      to={href}
      className={className}
    >
      {children}
    </ScrollLink>
  )
};
