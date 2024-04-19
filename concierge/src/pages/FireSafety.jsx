import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import { FireSafetySm, FireSafetySvg } from '../assets/icons'
import { mailTo } from '../utils/functions'

function FireSafety() {
  const navigate = useNavigate(null)
  const learn = [
    {
      name: 'PRICING REQUEST',
      text:
        'Pricing for staff, supervisors and building link support is provided upon request and is based on for community size and needs. ',
      bottom: 'REQUEST PRICING  >',
      link:
        "mailto:Jbourn@capitalconcierge.org?subject=I'm%20Interested%20in%20learning%20more%20about%20Capital%20Concierge",
    },
    {
      name: 'TAILORED FOR EACH COMMUNITY.',
      text:
        'Our Concierge staff go the distance to ensure we provide services that are the right-fit for every community.',
      bottom: 'LEARN MORE   >',
    },
    {
      name: 'OUR OFFERINGS',
      text:
        'We take the values and requests of our clients very seriously, providing only the very best in customer service.',
      bottom: 'VIEW OFFERINGS  >',
      link: '/services',
    },
  ]
  return (
    <div className="bg-[#FFF7DF] ">
      <Navbar></Navbar>
      <section className="bg-[#FFF7DF] pt-[50px] lg:pt-[100px]">
        <div className="px-[50px] lg:px-[220px] pt-[100px] lg:pt-0  space-y-[53px] lg:space-y-[60px]">
          <div className="space-y-[17px]">
            <button
              onClick={() => navigate('/services')}
              className="hidden lg:flex  -ml-[40px] h-[58px] text-[23px] font-[600] tracking-[0.46px] leading-[29.7px] items-center space-x-[30px]"
            >
              <span>{'<'}</span> <span>BACK TO SERVICES</span>
            </button>

            <p className="text-stone-800 max-w-[1020px] Hiragino   text-[55.659px] lg:text-[84px] tracking-[-4.453px] lg:tracking-[-6.72px] font-semibold font-['Hiragino Mincho ProN'] leading-[85px]">
              Fire <span className="font-[300]">Safety</span>
            </p>
          </div>
          <p className="text-[#282724] text-[21px] lg:text-[19px] font-[500] lg:font-[300] leading-[36.2px] tracking-[0.21px] lg:leading-[46px] lg:tracking-[0.57px] max-w-[962px]">
            NFPA Standard LS.01.02.01 requires that facilities provide
            protection for occupants of the building during the time the Life
            Safety Code is not met, including during maintenance or
            construction. During these times, the fire department must be
            notified, and a fire watch initiated
          </p>
          <div className="pb-[50px] lg:pb-[100px] "></div>
        </div>
        <div className="lg:px-[120px]">
          <div className="bg-[#7D5555] space-y-[90px] w-full min-h-[500px] py-[33px] lg:py-[70px] px-[33px] lg:px-[50px]">
            <div className="bg-[#FFF7DF] space-y-[39px] px-[35px] lg:px-[94px] py-[60px] lg:pt-[60px] lg:pb-[70px] overflow-hidden relative w-full min-h-[300px]">
              <p className="text-[54.482px] text-[#7D5555] lg:text-[66px] Hiragino  font-[300] tracking-[-2.724px] lg:tracking-[-3.3px] leading-[53.379px] lg:leading-[82.3px] lg:text-[#666]">
                What’s a{' '}
                <span className="lg:font-[600] lg:text-[#7D5555]">
                  Fire <br className="lg:block hidden" /> Watch?
                </span>
              </p>
              <p className="max-w-[511px] tracking-[0.57px] text-[#666] text-[19px] font-[300] leading-[46px]">
                A fire watch is a period of time when a group of dedicated staff
                continually circulate through the affected area of the building
                looking for signs of fire.  Part of the watch includes notifying
                the fire department or other emergency response group and
                documenting when that notification occurs, as well as noting the
                times the rounds are conducted by the fire watch staff.
              </p>
              <div className="lg:block hidden lg:absolute right-0 lg:top-[51px] h-full ">
                {FireSafetySvg}
              </div>
              <div className="lg:hidden">{FireSafetySm}</div>
            </div>
            <div className="space-y-[30px] lg:pl-[122px] px-[40px] lg:pr-[69px]">
              <p className="text-[50.482px] lg:text-[45px] Hiragino  text-[#F8EED3]  tracking-[-2.724px] lg:tracking-normal leading-[60px] font-[300] max-w-[890px]">
                Learn More About NFPA Compliance.
              </p>
              <p className="text-[#FFF7DF] leading-[46px] max-w-[852px] text-[19px] font-[300] tracking-[0.57px]">
                A fire watch is a temporary measure intended to ensure
                continuous and systematic surveillance of a building, or portion
                of the building, by one or more qualified individuals for the
                purpose of identifying and controlling fire hazards, detecting
                early signs of fire, activating an alarm and notifying the fire
                department in the event of a fire. 
              </p>
              <button className="flex items-center text-[18.82px] lg:text-[23px] font-[600] leading-[29.7px] tracking-[0.46px] justify-between  lg:space-x-[40px] w-full lg:w-[427px] px-[20px] lg:px-[32px] h-[69px] bg-[#F6C94B]">
                <span>READ FULL ARTICLE </span> <span>{'>'}</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#FFF7DF] pt-[90px] px-[30px]">
            <div className="bg-[#282724]  lg:hidden relative z-20 space-y-[91px]  lg:space-y-[62px] p-[50px] lg:px-[109px] lg:py-[90px]">
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
                <p className="max-w-[417.61px]  text-black text-[17px] lg:text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-[0.46px]">
                  REQUEST A PROPOSAL {'>'}
                </p>
              </button>
            </div>
          </div>
          <Work
            bg="transparent
        "
          ></Work>
        </div>
      </section>
    </div>
  )
}

export default FireSafety
