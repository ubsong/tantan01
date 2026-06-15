import { Link } from "@tanstack/react-router"


const Navbar = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-800 text-white items-end">
      <Link to="/" className="text-2xl font-bold">
        QNETS
      </Link>
      <Link to="/dev">Develop</Link>
      <Link to="/production">Production</Link>
      <Link to="/quality">Quality</Link>
      <Link to="/gsap">GSAP</Link>
    </div>
  )
}

export default Navbar