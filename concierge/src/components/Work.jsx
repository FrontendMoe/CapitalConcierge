import { mailTo } from '../utils/functions'

function Work({ bg }) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="bg-[#F6C94B] -mt-[1px] w-full"
    >
      <section className="px-[70px] xl:max-w-[1023px] xl:mx-auto xl:px-0 lg:px-[150px]  space-y-[40px] lg:space-y-[27px] py-[60px] lg:py-[120px]">
        <p className="max-w-[939px] lg:block hidden  Hiragino text-stone-800 text-[30px] lg:text-[84px] font-[400] lg:font-light font-['Hiragino Mincho ProN'] tracking-[-4px] lg:leading-[82.30px]">
          Let’s Work Together.
        </p>
        <p className="Hiragino max-w-[243px] lg:hidden  text-zinc-800 text-[58.04px] font-light font-['Hiragino Mincho ProN'] leading-[61.50px] tracking-[-2.902px]">
          Let’s Work Together.
        </p>

        <p className="max-w-[923px] lg:block hidden    text-black text-[20px] lg:text-[25px] font-light font-['Gibson'] lg:leading-[44.70px]">
          Are you interested in having us serve your community or want to learn
          more or are you interested in joining our team at Capital Concierge?
          Contact us by clicking below, We would love to hear from you!
          <br />
        </p>
        <div className="max-w-[261px] lg:hidden  text-black text-xl font-light font-['Gibson'] leading-9">
          Are you interested in having us serve your community or want to learn
          more or are you interested in joining our team at Capital Concierge?
          Contact us by clicking below, We would love to hear from you!
          <br />
        </div>

        <button className="max-w-[397px] w-full flex items-center h-[69px] bg-[#282724]">
          <p
            onClick={mailTo}
            className="w-full lg:w-[417.61px] flex justify-between px-[25px]"
          >
            <span className="text-orange-100 text-[17px] lg:text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-[0.46px]">
              CONTACT US{' '}
            </span>
            <span className="text-amber-300 text-[20px] lg:text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-[0.46px]">
              {`>`}
            </span>
          </p>
        </button>
      </section>
    </div>
  )
}

export default Work
