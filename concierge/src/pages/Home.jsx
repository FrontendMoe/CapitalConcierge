import { Link } from 'react-router-dom'
import video from '../vid.mp4'
import { Fade } from 'react-reveal'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <div className="bg-[#F6C94B] ">
      <section className="bg-[#F6C94B]  border-black flex  text min-h-screen text-black">
        <div className="bg-[#282724] text-white space-y-[72px]   py-[128px] px-[150px]  border-black    w-1/2 ">
          <p className="text-[84px] max-max-w-[400px] Hiragino leading-[89px]">
            The Best For Your <span className="text-[#F6C94B]">Guest.</span>
          </p>
          <div className="max-max-w-[299px] text-orange-100 text-[27px] font-semibold font-['Gibson'] leading-[38px]">
            Professional & Innovative Concierge Services & Solutions.
          </div>
        </div>
        <div className="w-1/2 relative">
          <Navbar></Navbar>
          <Fade>
            <video
              src={video}
              loop
              autoPlay
              muted
              className=" h-full object-left mix-blend-multiply object-cover"
            ></video>
          </Fade>
        </div>
      </section>
      <section className="text-start space-y-[90px]  border-black    bg-[#F8EED3] py-[80px] px-[90px]">
        <div className="space-y-[70px] py-[125px] px-[160px] bg-[#F6C94B]">
          <p className="max-w-[734px] Hiragino  text-zinc-800 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
            tailored-fitted
            <br />
            for each community
          </p>

          <div className="max-w-[434px] text-zinc-800 text-[35px] font-light font-['Gibson'] lowercase leading-[49px]">
            SEE A MEASURABLE DIFFERENCE WITH CAPITAL CONCIERGE.
          </div>
          <div className="max-w-[1004px] h-[0px] border border-black border-opacity-20"></div>

          <div className="bg-[#7D5555] ">
            <div className="px-[72px] space-y-[24px] py-[35px]">
              <div className="max-max-w-[813px] Hiragino  text-yellow-50 text-[49px] font-light font-['Hiragino Mincho ProN'] leading-[58px]">
                Capital Concierge is Affordable, Accessible, Attentive &
                Accountable.
              </div>
              <div className="max-w-[582px] text-yellow-50 text-[19px] font-light font-['Gibson'] leading-[30px] tracking-wide">
                We are familiar with the challenges and difficulties communities
                face and are prepared to tackle those challenges
              </div>
            </div>
            <div className="bg-[#6B4949] px-[72px] py-[35px] text-right">
              <div className="text-amber-300 text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]">
                VIEW OUR OFFERINGS & PRICING {'>'}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#282724] space-y-[70px] px-[180px] py-[110px]">
          <div className="space-y-[44px]">
            <div className="max-w-[734px] Hiragino  text-yellow-50 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
              About Us.
            </div>
            <div className="max-w-[714px] text-yellow-50 text-[19px] font-light font-['Gibson'] leading-[46px] tracking-wide">
              We believe Capital Concierge’s mission is to provide our clients
              the highest quality and most effective customer service. Our
              priority is to manage our clients expectations while working in
              partnership to create innovative solutions, honestly, dependably,
              proficiently and with integrity.
            </div>
          </div>

          <div className="text-amber-300 text-right text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]">
            VIEW OUR OFFERINGS {'>'}
          </div>
        </div>
      </section>
      <section className="bg-[#F8EED3] px-[150px]">
        <div className="max-w-[767px]">
          <span className="text-zinc-800 text-[84px] font-light Hiragino  leading-[89px]">
            our <br />
          </span>
          <span className="text-zinc-800 text-[84px] font-semibold Hiragino  leading-[89px]">
            reputation
            <br />
          </span>
          <span className="text-zinc-800 text-[84px] font-light Hiragino  leading-[89px]">
            speaks
            <br />
            for
            <br />
            itself.
          </span>
        </div>
      </section>
      <section className="px-[150px] space-y-[27px] py-[120px]">
        <div className="max-w-[939px] Hiragino text-stone-800 text-[84px] font-light font-['Hiragino Mincho ProN'] leading-[82.30px]">
          Let’s Work Together.
        </div>
        <div className="max-w-[923px]  h-[150px] text-black text-[25px] font-light font-['Gibson'] leading-[44.70px]">
          Janell, and her team are attentive, professional, kind and most
          importantly to me, because I am a senior, they make me feel safe and
          cared for both inside our building <br />
        </div>
        <button className="w-[397px] flex items-center h-[69px] bg-[#282724]">
          <p className="w-[417.61px] flex justify-between px-[25px]">
            <span className="text-orange-100 text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide">
              CONTACT US{' '}
            </span>
            <span className="text-amber-300 text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide">
              {`>`}
            </span>
          </p>
        </button>
      </section>
    </div>
  )
}

export default Home
