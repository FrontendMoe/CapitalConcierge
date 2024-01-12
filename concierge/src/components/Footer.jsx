// import { FooterLogo } from '../assets/icons'
import { Link } from 'react-router-dom'
import Footerlogo from '../assets/FooterLogo.png'
import { mailTo } from '../utils/functions'
function Footer() {
  const links = [
    {
      name: 'WELCOME',
      link: '/',
    },
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'ABOUT US',
      link: '/about',
    },
  ]
  return (
    <footer className="bg-[#282724] space-y-[49px] lg:space-y-0 lg:px-[80px] 2xl:px-[125px] lg:space-x-[128px] 2xl:space-x-[78px] flex lg:flex-row flex-col justify-center items-center  min-h-[30vh] pt-[100px] lg:py-[160px]">
      <div>
        <img
          src={Footerlogo}
          className="w-[187px] lg:w-[200px] object-scale-down "
          alt=""
        />{' '}
      </div>
      <div className=" space-y-[45px] flex-1 items-center 2xl:items-start justify-between flex footerFlex flex-col w-full">
        <p className="max-w-[255.68px] mx-auto lg:hidden text-center">
          <span className="text-orange-100 text-[22.67px] font-semibold font-['Gibson'] leading-loose">
            Capital Concierge LLC. © 2023
            <br /> <br />
          </span>
          <span className="text-orange-100 text-[22.67px] font-light font-['Gibson'] leading-loose">
            Professional & Innovative Concierge Services & Solutions.
          </span>
        </p>
        <p className="max-w-[909.99px] lg:block hidden ">
          <span className="text-orange-100 text-[25px] font-semibold font-['Gibson'] leading-[44.70px]">
            Capital Concierge LLC. © 2023 <br />
          </span>
          <span className="text-orange-100 text-[25px] font-[300] font-['Gibson'] leading-[44.70px]">
            Professional & Innovative Concierge Services & Solutions.
          </span>
        </p>

        <div className="flex justify-start items-center space-x-[20px] pb-[50px] lg:pb-0 px-[20px] lg:px-0">
          {links.map((el, index) => (
            <Link
              key={index}
              to={el.link}
              className="text-orange-100 text-[12.303px] lg:text-xs font-semibold font-['Gibson'] uppercase tracking-[6.27px]"
            >
              {el.name}
            </Link>
          ))}
          <div
            onClick={mailTo}
            className=" text-center cursor-pointer items-center justify-center lg:flex hidden h-[43px] bg-[#202020]"
          >
            <p className="text-amber-300 text-[12px] px-[10px] font-semibold font-['Gibson'] uppercase tracking-[6.12px]">
              CONTACT
            </p>
          </div>
        </div>
        <div
          onClick={() =>
            window.open(
              "mailto:email@example.com?subject=I'm%20Interested%20in%20learning%20more%20about%20Capital%20Concierge",
              '_blank',
            )
          }
          className="w-full lg:hidden justify-center flex items-center h-[118px] bg-[#202020]"
        >
          <p className=" text-center text-amber-300 text-[17.12px] font-semibold font-['Gibson'] uppercase tracking-[8.73px]">
            CONTACT
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
