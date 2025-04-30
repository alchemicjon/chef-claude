import reactLogo from './assets/react.svg'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="React logo" />
      <h1>Chef Claude</h1>
    </header>
  )
}
