import Navbar from '../components/Navbar'
import Work from '../components/Work'
import Phone from '../assets/phone.svg'
import concierge from '../assets/concierge.svg'
import event from '../assets/event.svg'
import keys from '../assets/keys.svg'
import moving from '../assets/moving.svg'
import Doorman from '../assets/Doorman.svg'
import { mailTo } from '../utils/functions'
import Fire from '../assets/Fire.svg'
import { Link } from 'react-router-dom'
function Services() {
  const offers = [
    {
      img: Phone,
      name: 'RESIDENT <br />COMMUNICATION',
      text:
        'Notify clients of guests and packages via building telephone system.',
    },
    {
      img: moving,
      name: 'MOVING & FREIGHT <br />MANAGEMENT',
      text: 'Schedule elevator reservations for moving in and large deliveries',
    },
    {
      img: event,
      name: 'EVENT <br />PLANNING',
      text:
        'Event Planning: A full-service professional event planning & partnerships.',
    },
    {
      img: concierge,

      name: 'CONCIERGE <br />TAXI SERVICES',
      text:
        'Call for Limo/ Shuttle/ Taxi: Arrive in style without fighting traffic.',
    },
    {
      img: keys,
      name: 'KEY & ACCESS <br />MANAGEMENT',
      text:
        'Home owner and maintenance key access management and release authorization.',
    },
    {
      img: Doorman,
      name: 'DOORMAN <br />SERVICES',
      text:
        'Hold doors to assist when needed and accept deliveries and hold packages for pick-up',
    },
  ]
  return (
    <div className=" bg-[#7D5555] ">
      <Navbar></Navbar>
      <section className="pt-[50px] lg:pt-[100px]">
        <div className="lg:px-[220px]  px-[50px] pt-[100px] lg:pt-0 text-[#FFF7DF] pb-[160px] space-y-[45px] lg:space-y-[75px] b">
          <p className="max-w-[1020px] lg:block hidden Hiragino">
            <span className="text-yellow-50 text-[84px] font-[300] font-['Hiragino Mincho ProN'] tracking-[-6px] leading-[85px]">
              A Concierge Company <br />
              For All Your{' '}
            </span>
            <span className="text-yellow-50 text-[84px] font-[600] font-['Hiragino Mincho ProN'] tracking-[-6px] leading-[85px]">
              Community’s
              <br />
              Needs.
            </span>
          </p>
          <p className="Hiragino lg:hidden lg:w-[348px] tracking-[-3.5px]">
            <span className="text-orange-100 text-[48px] font-light font-['Hiragino Mincho ProN']  leading-[54.30px]">
              A Concierge Company <br />
              For All Your
              <br />
            </span>
            <span className="text-orange-100 text-[50px] font-semibold font-['Hiragino Mincho ProN'] leading-[54.30px]">
              Community’s
              <br />
              Needs.
            </span>
          </p>

          <div className="w-[69px] h-[0px] border-2 border-yellow-50"></div>
          <p className="max-w-[936px] lg:block hidden">
            <span className="text-yellow-50 text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
              We are familiar with the challenges and difficulties communities
              face and are prepared to tackle those challenges by combin our
              day-to-day experience with ongoing professional training, the
              latest in technology and some creative thinking to handle the
              needs of today and tomorrow.{' '}
            </span>
            <span className="text-yellow-50 text-[19px] font-semibold font-['Gibson'] leading-[46px] tracking-wide">
              We take the values and requests of our clients' very seriously,
              providing only the very best in customer service.
            </span>
          </p>
          <div className="max-w-[325px] lg:hidden">
            <span className="text-yellow-50 text-[21px] font-normal font-['Gibson'] leading-9 tracking-[0.21px]">
              We are familiar with the challenges and difficulties communities
              face and are prepared to tackle those challenges by combining our
              day-to-day experience with ongoing professional training, the
              latest in technology and some creative thinking to handle the
              needs of today and tomorrow. <br />
              <br />
            </span>
            <span className="text-yellow-50 text-[21px] font-semibold font-['Gibson'] leading-9 tracking-[0.21px]">
              We take the values and requests of our clients' very seriously,
              providing only the very best in customer service.
            </span>
          </div>
        </div>
      </section>
      <section className="  lg:px-[220px] pt-[50px] lg:pt-[106px] space-y-[30px] lg:space-y-[95px]  bg-[#FFF7DF]">
        <div className="px-[50px]" id="Offering">
          <div className=" lg:block hidden Hiragino text-[#7D5555] text-[80px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
            Offerings & Services.
          </div>
        </div>

        <div className="grid px-[50px] lg:gap-0 lg:grid-cols-3">
          {offers.map((el, index) => (
            <div
              key={index}
              className={`space-y-[45px] p-[30px] lg:p-[60px] border-[#F4E8CF]  border lg:block flex flex-col items-center text-center lg:text-start  ${
                index <= 2 ? 'lg:border-t-0' : 'lg:border-b-0'
              }  ${index === 0 && 'border-t-0'}`}
            >
              {index === 0 && window.innerWidth < 1200 && (
                <div className="max-w-[299px] lg:hidden text-[#7D5555] Hiragino text-start text-[53px] font-light font-['Hiragino Mincho ProN'] tracking-[-2.724px] leading-[53.38px]">
                  Offerings <br />& Services.
                </div>
              )}
              <div className="h-[158.688px] flex items-end">
                <img src={el.img} alt="" className=" " />
              </div>
              <div className="space-y-[13px]">
                <p
                  className=" text-[#7D5555] Hiragino text-xl font-semibold font-['Hiragino Mincho Pro'] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: el.name }}
                ></p>

                <p className="w-[234.09px] text-black text-lg font-light font-['Gibson'] leading-[27.18px]">
                  {el.text}
                </p>
              </div>
            </div>
          ))}
          {/* <div className="bg-[#282724] lg:hidden relative z-20 space-y-[91px]  lg:space-y-[62px] p-[50px] lg:px-[109px] lg:py-[90px]">
            <div className="space-y-[32px] lg:space-y-[54px]">
              <div className="lg:block hidden Hiragino max-w-[734px] text-amber-300 text-[80px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
                Pricing
              </div>

              <div className="max-w-[239px] Hiragino lg:hidden text-amber-300 text-6xl font-light font-['Hiragino Mincho ProN'] tracking-[-3.022px] leading-[59.22px]">
                Request
                <br />
                Pricing.
              </div>

              <div className="max-w-[890px]  lg:block hidden text-orange-100 text-[45px] font-light font-['Gibson'] leading-[60px]">
                Pricing for staff, supervisors and building link support is
                provided upon request and is based on for community size and
                needs.{' '}
              </div>
              <div className="lg:hidden max-w-[277px]">
                <span className="text-yellow-50 text-xl font-light font-['Gibson'] leading-[35px] tracking-[0.6px]">
                  Pricing for staff, supervisors and building link support is
                  provided upon request and is based on for community size and
                  needs.
                  <br />
                </span>
                <span
                  onClick={mailTo}
                  className="text-yellow-50 text-xl font-semibold font-['Gibson'] leading-[35px] tracking-[0.6px]"
                >
                  Request Pricing for a Custom Proposal.{' '}
                </span>
              </div>
            </div>
            <button
              onClick={mailTo}
              className="w-full lg:w-[397px]  flex justify-center items-center h-[69px] bg-[#F6C94B]"
            >
              <p className="max-w-[417.61px]  text-black text-[16px] lg:text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-[0.46px]">
                REQUEST PRICING {'>'}
              </p>
            </button>
          </div> */}
        </div>
        <div className=" lg:py-[60px] relative border-x-[#F4E8CF] lg:px-[30px] border-x">
          <div className="absolute border-y border-[#F4E8CF]  top-[30px] w-[120%] -left-[10%]"></div>
          <div className="relative  z-10 flex pb-[184px] pt-[106px] lg:py-[55px] lg:pr-0 pl-[63px] pr-[108px] lg:pl-[369px] bg-[#F5EBCC]">
            <img
              src={Fire}
              alt=""
              className=" lg:w-fit w-[206.551px] h-[376.575px]  lg:h-fit -right-[80px] lg:right-auto lg:left-[17.7px] bottom-[55px] lg:top-1/2 lg:-translate-y-1/2 absolute "
            />
            <div className="space-y-[24px]">
              <div className="space-y-[32px]">
                <p className="Hiragino font-[600] leading-[26.302px] text-[30.92px]  text-[#7D5555]">
                  FIRE SAFETY
                </p>
                <p className="text-[#282724]  max-w-[225px]  text-[17.535px] lg:max-w-[596px] font-[300] leading-[31.5px]">
                  {' '}
                  NFPA Standard LS.01.02.01 requires that facilities provide
                  protection for occupants of the building during the time the
                  Life Safety Code is not met, including during maintenance or
                  construction.{' '}
                </p>
              </div>
              <div>
                <Link to="/fire-safety">
                  <button className="flex text-[20px] lg:text-[23px] font-[600] tracking-[0.46px] text-white leading-[29.7px] w-[220.233px] lg:w-[397px] items-center h-[69px] px-[28px] lg:px-[32px] bg-[#7D5555] justify-between">
                    <span>LEARN MORE</span> <span>{'>'}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute border-y border-[#F4E8CF]  bottom-[30px] w-[120%] -left-[10%]"></div>
        </div>

        <div className="px-[30px] lg:px-0">
          <div className="bg-[#282724]  relative z-20 space-y-[91px]  lg:space-y-[62px] p-[50px] lg:px-[109px] lg:py-[90px]">
            <div className="space-y-[32px] lg:space-y-[54px]">
              <div className="lg:block hidden Hiragino max-w-[734px] text-amber-300 text-[80px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
                Pricing
              </div>

              <div className="max-w-[239px] Hiragino lg:hidden text-amber-300 text-6xl font-light font-['Hiragino Mincho ProN'] tracking-[-3.022px] leading-[59.22px]">
                Request
                <br />
                Pricing.
              </div>

              <div className="max-w-[890px]  lg:block hidden text-orange-100 text-[45px] font-light font-['Gibson'] leading-[60px]">
                Pricing for staff, supervisors and building link support is
                provided upon request and is based on for community size and
                needs.{' '}
              </div>
              <div className="lg:hidden max-w-[277px]">
                <span className="text-yellow-50 text-xl font-light font-['Gibson'] leading-[35px] tracking-[0.6px]">
                  Pricing for staff, supervisors and building link support is
                  provided upon request and is based on for community size and
                  needs.
                  <br />
                </span>
                <span
                  onClick={mailTo}
                  className="text-yellow-50 text-xl font-semibold font-['Gibson'] leading-[35px] tracking-[0.6px]"
                >
                  Request Pricing for a Custom Proposal.{' '}
                </span>
              </div>
            </div>
            <button
              onClick={mailTo}
              className="w-full lg:w-[397px]  flex justify-center items-center h-[69px] bg-[#F6C94B]"
            >
              <p className="max-w-[417.61px]  text-black text-[18px] lg:text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-[0.46px]">
                REQUEST A PROPOSAL {'>'}
              </p>
            </button>
          </div>
        </div>
      </section>
      <div className="h-[150px] -mt-[150px] bg-[#F6C94B] w-full"></div>
      <Work></Work>
    </div>
  )
}

export default Services
