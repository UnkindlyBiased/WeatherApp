type PropsType = {
    children: React.ReactNode
}

const Title = ({ children }: PropsType) => {
  return (
    <h1 className="font-bold text-5xl">{children}</h1>
  )
}

export default Title