import { Link } from 'react-router-dom'
import video from '../vid.mp4'
import { Fade } from 'react-reveal'
import Navbar from '../components/Navbar'
import Quote from '../components/Quote'
import films from '../assets/films.png'
import Work from '../components/Work'
import { useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/functions'
import { useEffect } from 'react'
function Home() {
  let navigate = useNavigate()
  const quotes = [
    {
      text: (
        <>
          I wanted to take a moment and acknowledge your staff for their
          Courteous, Passionate and Professional behavior towards the residents
          of The William Oliver Building. I have personally experienced their
          service as a resident since 2016 plus the numerous resident
          compliments that the HOA Board has received. The Concierges have
          always gone above and beyond for the residents. Please convey the
          Board's gratitude to the concierges and for your leadership. Thank
          you.
        </>
      ),
      author: (
        <>
          Bobby Qureshi <br /> Home Owners Assoc. President
        </>
      ),
    },
    {
      text: (
        <>
          anell, and her team are attentive, professional, kind and most
          importantly to me, because I am a senior, they make me feel safe and
          cared for both inside our building and within our Downtown Atlanta
          community. <br /> <br /> After multiple years of working directly
          Janelle and her team on resident needs, events, maintenance and more
          was my favorite part of being a resident and HOA member of a Capital
          Concierge community.
        </>
      ),
      author: (
        <>
          Vera Moore <br />
          Home Owners Assoc. Secretary
        </>
      ),
    },
    {
      text: (
        <>
          Capital Concierge sets the standard for what a hybrid of security and
          service should look like in any industry, I have watched Janell and
          her team execute every single time, if it was my choice I would never
          work with anyone else.
        </>
      ),
      author: (
        <>
          Horace Williams <br />
          Home Owners Assoc. Vice President
        </>
      ),
    },
    {
      text: (
        <>
          As the former President of my HOA I highly recommend Capital Concierge
          for all of their services. Prior to bringing Capital Concierge on
          board for our community we had what felt like a rotating door of
          staff, as well a overall general lack of operational guidance. Janelle
          and her team came in and completely turned things around for
          community. <br /> <br /> Each day we were greeted with a smiling
          helpful concierge team. In conjunction Janelle brought amazing insight
          and guidance into the overall building operations. She was able to
          recommend different process improvements, project tracking, and
          guidance on vendor selection. With Janelle and Capital Concierge on
          the job the board was able to focus on meeting the needs of the
          community as opposed to consistently reinventing the wheel when it
          came to finding help at the front desk and in building operations as a
          whole.
        </>
      ),
      author: (
        <>
          Laurence Anderson <br />
          Home Owners Assoc. President
        </>
      ),
    },
  ]
  const charactheristics = [
    {
      name: 'FLEXIBILE',
      text:
        'Procedures and policies sometimes need to change immediately, and we are able to apply these changes in a short period of time.',
    },
    {
      name: 'CUSTOM',
      text:
        'We realize that every building is different and has different needs, so we customize our services as needed for that property. ',
    },
    {
      name: 'ACCESSIBLE',
      text:
        'Access our leadership directly- Our employees can contact the top leaders directly with day to day issues which allows us resolve any critical matters promptly.',
    },
    {
      name: 'TECH-ENABLED',
      text:
        'All forms, documentation requiring signatures at the front desk and daily performance logs will be replaced with our curated technology solutions.',
    },
    {
      name: 'EFFECTIVE',
      text:
        'We are able to maximize service and we do this by providing top-notch management and commitment from our company’s leadership, and concierge team.',
    },
    {
      name: 'PERSONAL',
      text:
        'We are able to maximize service and we do this by providing top-notch management and commitment from our company’s leadership, and concierge team.',
    },
  ]
  const playAllVideos = () => {
    const videos = document.querySelectorAll('video')
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i]
      video.muted = true // Force mute the video
      video.addEventListener('ended', () => {
        video.currentTime = 0 // Reset the video to the beginning
        video.play() // Pause the video when it ends
      })

      video.play()
    }
  }

  useEffect(() => {
    playAllVideos()
  }, [])
  return (
    <div className="bg-[#F6C94B] ">
      <section className="bg-[#F6C94B]  relative border-black flex  text min-h-screen text-black">
        <div
          style={{
            background:
              'linear-gradient(0deg, rgba(40,39,36,1) 0%, rgba(85,84,82,0.5) 36%, rgba(255,255,255,0) 100%)',
          }}
          className="absolute lg:hidden  top-0 h-full left-0 w-full"
        >
          <Fade>
            <video
              playsInline
              src={video}
              loop
              autoPlay
              muted
              className=" h-full object-center  lg:object-left mix-blend-multiply object-cover"
            ></video>
          </Fade>
        </div>
        <div className="absolute lg:hidden top-0">
          <Navbar></Navbar>
        </div>
        <div className="bg-[#282724] text-white space-y-[30px] pt-[150px] lg:space-y-[72px]    py-[80px] px-[30px] lg:py-[128px] lg:px-[150px]  border-black    w-full lg:w-1/2 ">
          <p className="text-[40px] relative lg:text-[84px]  max-w-[300px] Hiragino lg:leading-[89px]">
            The Best For Your <span className="text-[#F6C94B]">Guest.</span>
          </p>
          <div className="max-w-[299px] relative z-10 text-orange-100 text-[25px] lg:text-[27px] font-semibold font-['Gibson'] leading-[38px]">
            Professional & Innovative Concierge Services & Solutions.
          </div>
        </div>
        <div className="w-full lg:block hidden lg:w-1/2 relative">
          <div className="absolute z-10 left-1/2 -translate-x-1/2">
            <Navbar></Navbar>
          </div>
          <Fade>
            <video
              playsInline
              src={video}
              loop
              autoPlay
              muted
              className=" h-full object-center  lg:object-left mix-blend-multiply object-cover"
            ></video>
          </Fade>
        </div>
      </section>
      <section className="text-start relative space-y-[90px]  border-black    bg-[#F8EED3] py-[40px] lg:py-[80px] px-[30px] lg:px-[90px]">
        <div className="  overflow-visible lg:space-y-[70px]  pt-[60px] lg:py-[125px] bg-[#F6C94B]">
          <div className="space-y-[20px] pb-[60px]  px-[30px] lg:px-[160px] overflow-visible lg:space-y-[70px]   bg-[#F6C94B]">
            <p className="   Hiragino  text-zinc-800 text-[35px] lg:text-[84px] font-light font-['Hiragino Mincho ProN'] lg:leading-[82.30px]">
              tailored-fitted
              <br />
              for each community
            </p>

            <div className="max-w-[434px]   text-zinc-800 text-[24px] lg:text-[35px] font-light font-['Gibson'] lowercase lg:leading-[49px]">
              SEE A MEASURABLE DIFFERENCE WITH CAPITAL CONCIERGE.{' '}
            </div>
            <div className="max-w-[1004px]  relative  border border-black border-opacity-20">
              <img
                src={films}
                className=" object-cover object-center  overflow-scroll top-0 absolute  mix-blend-darken lg:-right-[100px] left-0 w-full lg:block hidden lg:h-[1319px] opacity-25"
              ></img>
            </div>
            <div className="flex  lg:flex-row flex-col  gap-[30px] lg:gap-[65px] justify-between">
              {charactheristics
                .slice(0, 3)
                .reverse()
                .map((el, index) => (
                  <div key={index}>
                    <div className="text-zinc-800 text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]">
                      {el.name}
                    </div>
                    <div className="w-[222px] text-zinc-800 text-[15px] font-normal font-['Gibson'] leading-[29px]">
                      {el.text}
                    </div>
                  </div>
                ))}
            </div>
            <div className="max-w-[1004px]  h-[0px] border border-black border-opacity-20"></div>
            <div className="flex  lg:flex-row flex-col  gap-[30px] lg:gap-[65px] justify-between">
              {charactheristics
                .slice(3, 6)
                .reverse()
                .map((el, index) => (
                  <div key={index}>
                    <div className="text-zinc-800 text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]">
                      {el.name}
                    </div>
                    <div className="w-[222px] text-zinc-800 text-[15px] font-normal font-['Gibson'] leading-[29px]">
                      {el.text}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className=" lg:px-[160px]">
            <div className="bg-[#7D5555] relative ">
              <div className="px-[15px] lg:px-[72px] space-y-[24px] py-[35px]">
                <div className="max-w-[700px] text-[28px] Hiragino  text-yellow-50 lg:text-[49px] font-light font-['Hiragino Mincho ProN'] lg:leading-[58px]">
                  Capital Concierge is Affordable, Accessible, Attentive &
                  Accountable.
                </div>
                <div className="max-w-[582px] text-yellow-50  lg:text-[19px] font-light font-['Gibson'] leading-[30px] tracking-wide">
                  We are familiar with the challenges and difficulties
                  communities face and are prepared to tackle those challenges
                </div>
              </div>
              <div className="bg-[#6B4949]  lg:px-[72px] px-[15px] py-[35px] lg:text-right text-center">
                <Link to={'/Services'}>
                  <button className="text-amber-300 text-[12px] lg:text-[22px] font-semibold font-['Gibson'] lg:leading-[29px] tracking-[2.64px]">
                    VIEW OUR OFFERINGS & PRICING {'>'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#282724] relative space-y-[70px] px-[30px] lg:px-[180px] py-[60px]  lg:py-[110px]">
          <div className="space-y-[20px] lg:space-y-[44px]">
            <div className="max-w-[734px] Hiragino  text-yellow-50 text-[35px] lg:text-[84px] font-light font-['Hiragino Mincho ProN'] lg:leading-[82.30px]">
              About Us.
            </div>
            <div className="max-w-[714px] text-yellow-50 text-[17px] lg:text-[19px] font-light font-['Gibson'] lg:leading-[46px] leading-[35px] tracking-wide">
              We believe Capital Concierge’s mission is to provide our clients
              the highest quality and most effective customer service. Our
              priority is to manage our clients expectations while working in
              partnership to create innovative solutions, honestly, dependably,
              proficiently and with integrity.
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              onClick={() => {
                setTimeout(function () {
                  scrollToSection('Offering')
                }, 100)
                navigate('/Services')
              }}
              className="text-amber-300 text-right text-[16px] lg:text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]"
            >
              VIEW OUR OFFERINGS {'>'}
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F8EED3] pb-[120px] lg:columns-2 gap-[150px] 	 px-[30px] lg:px-[150px]">
        <div className="max-w-[767px] lg:pb-[100px] lg:pt-0 lg:text-start  py-[50px] ">
          <span className="text-zinc-800 text-[35px] lg:text-[84px] font-light Hiragino  lg:leading-[89px]">
            our <br />
          </span>
          <span className="text-zinc-800 text-[30px] lg:text-[84px] font-semibold Hiragino  lg:leading-[89px]">
            reputation
            <br />
          </span>
          <span className="text-zinc-800 text-[30px] lg:text-[84px] font-light Hiragino  lg:leading-[89px]">
            speaks <br className="lg:block hidden" />
            for
            <br className="lg:block hidden" />
            itself.
          </span>
        </div>
        {quotes.map((el, index) => (
          <div key={index} className="block pb-[100px] lg:pb-0">
            <Quote author={el.author} text={el.text}></Quote>
          </div>
        ))}
      </section>
      <Work></Work>
    </div>
  )
}

export default Home
