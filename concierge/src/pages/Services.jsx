import Navbar from '../components/Navbar'
import Work from '../components/Work'
import Phone from '../assets/phone.svg'
import concierge from '../assets/concierge.svg'
import event from '../assets/event.svg'
import keys from '../assets/keys.svg'
import moving from '../assets/moving.svg'
import Doorman from '../assets/Doorman.svg'

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
    <div className=" bg-[#7D5555]">
      <section>
        <div className="w-full flex relative">
          <div className="w-1/2  "></div>
          <div className="flex-1 ">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="px-[220px] text-[#FFF7DF] pb-[160px] space-y-[25px] b">
          <div className="max-w-[660px] Hiragino text-yellow-50 text-[84px] font-semibold font-['Hiragino Mincho ProN'] leading-[85px]">
            Services.
          </div>
          <div className="max-w-[813px] text-yellow-50 text-[49px] font-light font-['Hiragino Mincho ProN'] leading-[58px]">
            Capital Concierge is Affordable, Accessible, Attentive &
            Accountable.
          </div>

          <div className="max-w-[869px] text-yellow-50 text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
            We are familiar with the challenges and difficulties communities
            face and are prepared to tackle those challenges by combining our
            day-to-day experience with ongoing professional training, the latest
            in technology and some creative thinking to handle the needs of
            today and tomorrow. We take the values and requests of our clients'
            very seriously, providing only the very best in customer service.
          </div>
        </div>
      </section>
      <section className="px-[220px] pt-[106px] space-y-[95px]  bg-[#FFF7DF]">
        <div className="w-[734px] Hiragino text-stone-800 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
          Our Offerings
        </div>
        <div className="grid gap-[100px] grid-cols-3">
          {offers.map((el, index) => (
            <div key={index} className="space-y-[45px]">
              <div className="h-[158.688px] flex items-end">
                <img src={el.img} alt="" className=" " />
              </div>
              <div className="space-y-[13px]">
                <p
                  className="text-black Hiragino text-xl font-semibold font-['Hiragino Mincho Pro'] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: el.name }}
                ></p>

                <p className="w-[234.09px] text-black text-lg font-light font-['Gibson'] leading-[27.18px]">
                  {el.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#282724] translate-y-[150px] space-y-[62px] px-[109px] py-[90px]">
          <div className="w-[734px] Hiragino text-amber-300 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
            Pricing
          </div>
          <div className="w-[888px] h-[260px]">
            <span className="text-neutral-400 text-[40.92px] font-light font-['Hiragino Mincho ProN'] leading-[58.40px]">
              Pricing for{' '}
            </span>
            <span className="text-white text-[40.92px] font-light font-['Hiragino Mincho ProN'] leading-[58.40px]">
              concierge staff, supervisors and building link support{' '}
            </span>
            <span className="text-neutral-400 text-[40.92px] font-light font-['Hiragino Mincho ProN'] leading-[58.40px]">
              are based on community size and needs.{' '}
            </span>
            <span className="text-white text-[40.92px] font-light font-['Hiragino Mincho ProN'] leading-[58.40px]">
              Contact us for a proposal.
            </span>
          </div>
          <button className="w-[397px] flex items-center h-[69px] bg-[#F6C94B]">
            <p className="w-[417.61px] flex justify-between px-[25px]">
              <span
                className="text-black
               text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide"
              >
                REQUEST A PROPOSAL
              </span>
              <span className="text-black text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide">
                {`>`}
              </span>
            </p>
          </button>
        </div>
      </section>
      <div className="h-[150px] bg-[#F6C94B] w-full"></div>
      <Work></Work>
    </div>
  )
}

export default Services
