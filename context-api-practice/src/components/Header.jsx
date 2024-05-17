import { useData } from '../context/usedata'

function Header() {
    const {data} = useData("");
  return (
    <div>
      Hello {data}
    </div>
  )
}

export default Header
