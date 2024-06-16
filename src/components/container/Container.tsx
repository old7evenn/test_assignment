export type ContainerProps = {
  children: React.ReactElement[] | React.ReactElement
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex max-w-screen-xl mx-auto">{children}</div>
}
