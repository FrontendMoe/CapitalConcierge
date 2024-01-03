import Navbar from '../components/Navbar'
import Work from '../components/Work'

function About() {
  return (
    <div className="bg-[#F6C94B]">
      <section>
        <div className="w-full flex relative">
          <div className="w-1/2  "></div>
          <div className="flex-1 ">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="px-[120px] space-y-[60px]">
          <div className="w-[660px] Hiragino text-zinc-800 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[85px]">
            About
            <br />
            Capital
            <br />
            Concierge
          </div>
          <div className="w-[982px] text-black text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
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
          <div className="bg-[#282724]">
            <div className="w-[660px] Hiragino text-amber-300 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[85px]">
              Our
              <br />
              Mission
            </div>
            <div className="w-[481px] text-yellow-50 text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
              We believe Capital Concierge’s mission is to provide our clients
              the highest quality and most effective customer service. Our
              priority is to manage our clients expectations while working in
              partnership to create innovative solutions, honestly, dependably,
              proficiently and with integrity.
            </div>
            <div className="bg-[#38342D]">
              <div className="w-[379px] text-orange-100 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[85px]">
                Learn More
              </div>
              <div className="w-[191.38px] text-yellow-50 text-xl font-semibold font-['Hiragino Mincho Pro'] leading-relaxed">
                PRICING
              </div>
              <div className="w-[481px] text-yellow-50 text-lg font-light font-['Gibson'] leading-[27.18px]">
                Hold doors to assist when needed and accept deliveries and hold
                packages for pick-up
              </div>
              <div className="w-[446px] text-yellow-50 text-xl font-semibold font-['Hiragino Mincho Pro'] leading-relaxed">
                WHAT MAKES US DIFFERENT?
              </div>
              <div className="w-[481px] text-yellow-50 text-lg font-light font-['Gibson'] leading-[27.18px]">
                Hold doors to assist when needed and accept deliveries and hold
                packages for pick-up
              </div>
              <div className="w-[446px] text-yellow-50 text-xl font-semibold font-['Hiragino Mincho Pro'] leading-relaxed">
                OUR OFFERINGS
              </div>
              <div className="w-[481px] text-yellow-50 text-lg font-light font-['Gibson'] leading-[27.18px]">
                Hold doors to assist when needed and accept deliveries and hold
                packages for pick-up
              </div>
            </div>
          </div>
        </div>
        <Work></Work>
      </section>
    </div>
  )
}

export default About
