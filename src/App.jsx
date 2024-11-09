import useRouterElements from "./routes/useRouterElements"


function App() {
  const routerElements = useRouterElements()
  return <>{routerElements}</>
}

export default App
