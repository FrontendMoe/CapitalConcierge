import { Link } from 'react-router-dom'
function Navbar() {
  const nav = [
    {
      name: 'WELCOME',
      link: '',
    },
    {
      name: 'COMPANY',
      link: 'COMPANY',
      color: '#7D5555',
    },

    {
      name: 'Services',
      link: 'Services',
    },
    {
      name: 'CONTACT',
      link: 'CONTACT',
    },
  ]
  return (
    <nav>
      <div className="py-[56px] z-10 items-center  absolute top-0 w-full     flex space-x-[83px] justify-center border-black ">
        {nav.map((el, index) => (
          <Link
            key={el}
            style={{ backgroundColor: index === nav.length - 1 && '#000' }}
            className={`cursor-pointer uppercase font-[600] ${
              index === nav.length - 1 &&
              'bg-black py-[12px] px-[22px] text-[#F6C94B]'
            }`}
            to={el.link}
          >
            {el.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
