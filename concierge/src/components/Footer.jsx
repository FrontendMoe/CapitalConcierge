// import { FooterLogo } from '../assets/icons'
import Footerlogo from '../assets/FooterLogo.png'
function Footer() {
  return (
    <footer className="bg-[#282724] flex lg:flex-row flex-col items-center  min-h-[30vh] py-[100px] lg:py-[160px]">
      <div>
        {' '}
        <img src={Footerlogo} className="w-[187px]" alt="" />{' '}
      </div>
      <div>
        <p className="max-w-[255.68px] lg:hidden text-center">
          <span className="text-orange-100 text-[22.67px] font-semibold font-['Gibson'] leading-loose">
            Capital Concierge LLC. © 2023
            <br /> <br />
          </span>
          <span className="text-orange-100 text-[22.67px] font-light font-['Gibson'] leading-loose">
            Professional & Innovative Concierge Services & Solutions.
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
