import Navbar from '../components/Navbar'
import Work from '../components/Work'

function About() {
  const learn = [
    {
      name: 'PRICING',
      text:
        '   Hold doors to assist when needed and accept deliveries and hold packages for pick-up',
    },
    {
      name: 'WHAT MAKES US DIFFERENT?',
      text:
        '          Hold doors to assist when needed and accept deliveries and hold  packages for pick-up',
    },
    {
      name: 'OUR OFFERINGS',
      text:
        'Hold doors to assist when needed and accept deliveries and hold packages for pick-up',
    },
  ]
  return (
    <div className="bg-[#F6C94B] pt-[50px] lg:pt-[100px]">
      <section>
        <div className="px-[30px] lg:px-[220px] pt-[100px] lg:pt-0  space-y-[30px] lg:space-y-[60px]">
          <div className="max-w-[660px] Hiragino text-zinc-800 text-[35px]  lg:text-[84px] font-[400] font-['Hiragino Mincho ProN'] lg:leading-[85px]">
            About
            <br />
            Capital
            <br />
            Concierge
          </div>
          <div className="max-w-[982px] pb-[60px] lg:pb-[120px] text-black text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
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
        </div>
        <div className="bg-[#282724] space-y-[30px] lg:space-y-[54px] p-[30px] lg:px-[220px] pt-[90px]">
          <div className="max-w-[660px] Hiragino text-amber-300 text-[35px] lg:text-[84px] font-light font-['Hiragino Mincho ProN'] lg:leading-[85px]">
            Our
            <br />
            Mission
          </div>
          <div className="max-w-[880px]  text-yellow-50 text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
            We believe Capital Concierge’s mission is to provide our clients the
            highest quality and most effective customer service. Our priority is
            to manage our clients expectations while working in partnership to
            create innovative solutions, honestly, dependably, proficiently and
            with integrity.
          </div>

          <div className="bg-[#38342D] space-y-[30px] lg:space-y-[77px] py-[60px] lg:py-[100px] p-[30px] lg:px-[90px] ">
            <p className="max-w-[379px] Hiragino text-orange-100 text-[35px] lg:text-[84px] font-light font-['Hiragino Mincho ProN'] lg:leading-[85px]">
              Learn More...
            </p>
            <div className="">
              {learn.map((el, index) => (
                <div key={index} className="pb-[20px] lg:pb-[45px] ">
                  <div className="w-full h-[0px] border border-yellow-50 border-opacity-10"></div>
                  <div className=" pt-[20px] lg:pt-[45px] px-[10px] lg:px-[70px] space-y-[10px] lg:space-y-[18px]">
                    <p className=" text-yellow-50 text-xl font-semibold font-['Hiragino Mincho Pro'] leading-relaxed">
                      {el.name}
                    </p>
                    <p className="max-w-[481px]  text-yellow-50 text-lg font-light font-['Gibson'] leading-[27.18px]">
                      {el.text}
                    </p>
                    <p className="text-amber-300 w-full justify-end flex text-end space-x-[10px] text-xs font-semibold font-['Gibson'] leading-[29px] tracking-wider">
                      <p>CONTINUE</p> <p>{'>'}</p>
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
