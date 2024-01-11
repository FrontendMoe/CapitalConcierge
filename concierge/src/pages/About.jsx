import Navbar from '../components/Navbar'
import Work from '../components/Work'

function About() {
  const learn = [
    {
      name: 'PRICING REQUEST',
      text:
        'Pricing for staff, supervisors and building link support is provided upon request and is based on for community size and needs. ',
      bottom: 'REQUEST PRICING  >',
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
        "We take the values and requests of our clients' very seriously, providing only the very best in customer service.",
      bottom: 'VIEW OFFERINGS  >',
    },
  ]
  return (
    <div className="bg-[#F6C94B] ">
      <Navbar></Navbar>
      <section className="bg-[#F6C94B] pt-[50px] lg:pt-[100px]">
        <div className="px-[30px] lg:px-[220px] pt-[100px] lg:pt-0  space-y-[30px] lg:space-y-[60px]">
          <p className="max-w-[1020px] Hiragino lg:block hidden">
            <span className="text-stone-800 text-[84px] font-semibold font-['Hiragino Mincho ProN'] leading-[85px]">
              About{' '}
            </span>
            <span className="text-stone-800 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[85px]">
              Capital
              <br />
              Concierge
            </span>
          </p>
          <p className="lg:hidden Hiragino max-w-[271px]">
            <span className="text-stone-800 text-[55.66px] font-semibold font-['Hiragino Mincho ProN'] leading-[54.30px]">
              About{' '}
            </span>
            <span className="text-stone-800 text-[55.66px] font-light font-['Hiragino Mincho ProN'] leading-[54.30px]">
              Capital
              <br />
              Concierge
            </span>
          </p>
          <div className="w-[69px] h-[0px] border-2 border-stone-800"></div>

          <div className="lg:block hidden max-w-[877px] text-black text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
            Our objective is to always exemplify thought leadership and standard
            setting professionalism for commercial, homeowner and hospitality
            companies. We serve our customers' needs and consistently produce
            and manage developments of lasting value to the community.
            <br />
            <br />
            We recognize the need to be flexible, entrepreneurial, and
            aggressive, both as individuals and as a company. We believe in
            teamwork, innovation, professionalism, and long-term
            decision-making.
          </div>

          <div className="lg:hidden max-w-[325px] text-stone-800 text-[21px] font-normal font-['Gibson'] leading-9 tracking-tight">
            We are familiar with the challenges and difficulties communities
            face and are prepared to tackle those challenges; combine our
            day-to-day experience with ongoing professional training, the latest
            in technology and some creative thinking to handle the needs of
            today and tomorrow. <br />
            <br />
            We take the values and requests of our clients' very seriously,
            providing only the very best in customer service.
          </div>
          <div className="pb-[50px] lg:pb-[100px] "></div>
        </div>
        <div className="lg:bg-[#282724] space-y-[50px] lg:space-y-0 relative p-[30px] lg:px-[220px] pt-[90px]">
          <div className="w-full bg-[#282724] left-0 absolute top-0 h-[80%]"></div>
          <div className="space-y-[30px] relative lg:space-y-[54px] ">
            <p className="max-w-[660px] lg:block hidden Hiragino text-amber-300 text-[80px] font-light font-['Hiragino Mincho ProN'] leading-[85px]">
              Our
              <br />
              Mission
            </p>
            <p className="max-w-[264px] Hiragino lg:hidden  text-amber-300 text-6xl font-light font-['Hiragino Mincho ProN'] leading-[59.22px]">
              Our
              <br />
              Mission
            </p>
            <div className="max-w-[880px]  text-[#FFF7DF] text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
              We believe Capital Concierge’s mission is to provide our clients
              the highest quality and most effective customer service. Our
              priority is to manage our clients expectations while working in
              partnership to create innovative solutions, honestly, dependably,
              proficiently and with integrity.
            </div>
          </div>

          <div className="bg-[#38342D] relative lg:translate-y-[100px] space-y-[30px] lg:space-y-[77px] py-[60px] lg:py-[100px] p-[30px] lg:px-[90px] ">
            <p className="max-w-[379px] lg:max-w-[706px] Hiragino text-orange-100 text-[35px] lg:text-[84px] font-light font-['Hiragino Mincho ProN'] lg:leading-[85px]">
              Learn More...
            </p>
            <div className="">
              {learn.map((el, index) => (
                <div key={index} className="pb-[20px] lg:pb-[45px] ">
                  <div className="w-full h-[0px] border border-yellow-50 border-opacity-10"></div>
                  <div className=" pt-[20px] lg:pt-[45px] px-[10px] lg:px-[70px] space-y-[10px] lg:space-y-[18px]">
                    <p className=" text-[#FFF7DF] Hiragino text-xl font-[600] font-['Hiragino Mincho Pro'] leading-relaxed">
                      {el.name}
                    </p>
                    <p className="max-w-[481px]  text-[#FFF7DF] text-lg font-light font-['Gibson'] leading-[27.18px]">
                      {el.text}
                    </p>
                    <p className="text-amber-300 w-full justify-end flex text-end space-x-[10px] text-xs font-semibold font-['Gibson'] leading-[29px] tracking-wider">
                      <p>{el.bottom}</p>
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-full h-[0px] border border-yellow-50 border-opacity-10"></div>
            </div>{' '}
          </div>
        </div>
        <Work></Work>
      </section>
    </div>
  )
}

export default About
