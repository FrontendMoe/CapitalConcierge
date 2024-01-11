import { Link } from 'react-router-dom'
import video from '../vid.mp4'
import { Fade } from 'react-reveal'
import Navbar from '../components/Navbar'
import Quote from '../components/Quote'
import films from '../assets/films.png'
import Work from '../components/Work'
import { useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/functions'
import { useEffect, useState } from 'react'
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
  const [innerWidth, setInnerWidth] = useState(null)
  const [mxLeft, setMxLeft] = useState(null)
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
        'All forms and subsequent documentation requiring signatures at the front desk as well as daily performance records and logs will be replaced with Capital Concierge systems technology.',
    },
    {
      name: 'EFFECTIVE',
      text:
        'We are able to maximize service and we do this by providing top-notch management and commitment from our company’s leadership, and concierge team.',
    },
    {
      name: 'PERSONAL',
      text:
        'We build a connection with our residents by having a custom approach. We take the time to learn each client and their needs, while still adhering to all  building policies. ',
    },
  ]
  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1280) {
        setMxLeft(
          window.innerWidth > 1280 &&
            -(
              window.innerWidth -
              90 -
              document.getElementById('topSection')?.offsetWidth
            ) / 2,
        )
        setInnerWidth(
          window.innerWidth > 1280 && (window.innerWidth - 90) * 0.78 + 'px',
        )
      } else {
        setMxLeft(null)
        setInnerWidth('100%')
      }
    })
    if (window.innerWidth > 1280) {
      setMxLeft(
        window.innerWidth > 1280 &&
          -(
            window.innerWidth -
            90 -
            document.getElementById('topSection')?.offsetWidth
          ) / 2,
      )
      setInnerWidth(
        window.innerWidth > 1280 && (window.innerWidth - 90) * 0.78 + 'px',
      )
    } else {
      setMxLeft(null)
      setInnerWidth('100%')
    }
  }, [])

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
    <div className="bg-[#0B0B0B] relative lg:bg-[#F6C94B]  lg:-mt-[5px]">
      <Navbar></Navbar>
      <section className="   relative    border-black flex lg:flex-row flex-col  text min-h-screen text-black">
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
              className=" h-full object-center lg:block hidden  lg:object-left mix-blend-multiply object-cover"
            ></video>
          </Fade>
        </div>

        <div className="lg:w-1/2 flex-1 bg-[#0B0B0B] ">
          <div className="flex flex-col justify-end relative z-20 bg-[#0B0B0B]">
            <div className=" bg-[#0B0B0B]  relative z-20 text-white space-y-[30px] pt-[150px] lg:space-y-[72px]    py-[80px] pl-[100px] lg:py-[128px] lg:px-[150px]      w-full lg:max-w-[726px]">
              <p className="text-[40px] lg:block text-[#F8EED3] hidden relative lg:text-[84px]  Hiragino lg:leading-[89px] tracking-[-6.72px]">
                The <br /> Best For <br /> Your <br />{' '}
                <span className="text-[#F6C94B]">Guest.</span>
              </p>
              <p className="text-[55.659px]  text-[#F8EED3] lg:hidden relative lg:text-[84px]  leading-[54.3px]  Hiragino lg:leading-[89px] tracking-[-4.453px]">
                The Best <br /> For Your <br />
                <span className="text-[#F6C94B]"> Guest.</span>
              </p>
              <div className="w-[85.46px] h-[0px] lg:block hidden border-2 border-[#E9C348]"></div>
              <div className="w-[69px] lg:hidden h-[0px] border-2 border-[#F6C94B]"></div>

              <div className="max-w-[237px] lg:max-w-[371px] relative z-10 text-[#F8EED3] text-[21px] lg:text-[45px] font-[400] font-['Gibson'] leading-[36px] lg:leading-[60px] tracking-[0.21px]">
                Professional & Innovative Concierge Services & Solutions.
              </div>
            </div>
            <div className="lg:hidden  w-full h-[280px] relative  bg-[#F6C94B]">
              <video
                playsInline
                src={video}
                loop
                autoPlay
                muted
                className="  absolute z-20  left-0 object-cover object-center top-0 w-full h-full aspect-auto mix-blend-darken"
              ></video>
            </div>
            <div className="bg-[#0B0B0B] h-[200px] w-full"></div>
          </div>
        </div>
        <div className="w-full lg:block hidden overflow-hidden lg:w-[50vw] ">
          <Fade>
            <video
              playsInline
              src={video}
              loop
              autoPlay
              muted
              className=" w-screen h-full lg:block hidden absolute top-0 -right-[200px] mix-blend-multiply object-cover"
            ></video>
          </Fade>
        </div>
      </section>
      <section className="text-start relative z-20 lg:space-y-[90px] space-y-[120px]  border-black    bg-[#F8EED3] py-[40px] lg:py-[80px] px-[30px] lg:px-[90px]">
        <div className="  overflow-visible space-y-[-100px] lg:space-y-[70px]  pt-[60px] lg:py-[125px] lg:-translate-y-0 -translate-y-[120px]  bg-[#F6C94B]">
          <div
            id="topSection"
            className=" max-w-[1026px]    mx-auto space-y-[20px] pb-[60px]   lg:px-[160px] xl:px-[0px] overflow-visible lg:space-y-[70px]   bg-[#F6C94B]"
          >
            <p className="   Hiragino px-[60px] lg:px-0  text-[#29292B] text-[54.482px] lg:text-[84px] font-light font-['Hiragino Mincho ProN'] lg:leading-[82.30px] tracking-[-2.724px] leading-[53.379px] lg:max-w-[700px] 2xl:max-w-[800px] max-w-[299px] lg:tracking-[-4px]">
              tailored-fitted for each community{' '}
            </p>

            <p className="max-w-[823px] px-[60px] lg:px-0  pb-[50px] lg:pb-0   text-[#29292B] text-[28px] lg:text-[45px] font-light font-['Gibson'] lowercase lg:leading-[49px]">
              SEE A MEASURABLE DIFFERENCE WITH CAPITAL CONCIERGE.
            </p>
            <div className="xl:px-[160px]">
              <div
                style={{
                  width: innerWidth,

                  marginLeft: mxLeft ? mxLeft : '0',
                }}
                className="mx-auto relative  border border-black border-opacity-20"
              >
                <img
                  src={films}
                  className=" object-cover  object-center  overflow-scroll top-0 absolute  mix-blend-darken lg:-right-[100px] left-0 w-full lg:block hidden lg:h-[1319px] opacity-25"
                ></img>
                <div>
                  <div className="w-[1775px] lg:block hidden opacity-75 -translate-x-1/2 left-1/2 absolute top-[50%] h-[1437.29px] bg-amber-200 rounded-full blur-[215px]" />
                </div>
              </div>
            </div>
            <div className="flex px-[60px] lg:px-0  py-[50px] relative  z-10 lg:py-0  lg:flex-row flex-col  gap-[30px] lg:gap-[65px] justify-between">
              {charactheristics
                .slice(0, 3)
                .reverse()
                .map((el, index) => (
                  <div key={index} className="space-y-[16px]">
                    <p className="text-[#29292B] text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]">
                      {el.name}
                    </p>

                    <p className="max-w-[222px] text-[#29292B] text-[15px] font-normal font-['Gibson'] leading-[29px]">
                      {el.text}
                    </p>
                  </div>
                ))}
            </div>
            <div className="relative lg:block hidden xl:px-[160px]">
              <div
                style={{
                  width: innerWidth,

                  marginLeft: mxLeft ? mxLeft : '0',
                }}
                className="w-full   h-[0px] border border-black border-opacity-20"
              ></div>
            </div>

            <div className="flex px-[60px] lg:px-0   relative lg:flex-row flex-col  gap-[30px] lg:gap-[65px] justify-between">
              {charactheristics
                .slice(3, 6)
                .reverse()
                .map((el, index) => (
                  <div key={index} className="space-y-[16px]">
                    <p className="text-[#29292B] text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]">
                      {el.name}
                    </p>

                    <p className="max-w-[222px] text-[#29292B] text-[15px] font-[400] font-['Gibson']  leading-[29px]">
                      {el.text}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className=" px-[17px] xl:px-[0px]   xl:max-w-[1026px] mx-auto ">
            <div className="bg-[#7D5555] translate-y-[100px] xl:mx-0 mx-auto   xl:w-[951px] relative ">
              <div className="px-[55px] lg:px-[72px] space-y-[36px] py-[70px]">
                <div className="max-w-[303px] lg:max-w-[700px] text-[32.891px] Hiragino  text-[#FFF7DF] lg:text-[49px] font-light font-['Hiragino Mincho ProN'] leading-[43.667px] lg:leading-[58px] ">
                  Capital Concierge is Affordable, Accessible, Attentive &
                  Accountable.
                </div>
                <div className="max-w-[665px]">
                  <span className="text-[#FFF7DF] text-[19px] font-light font-['Gibson'] leading-[30px] tracking-[0.57px]">
                    We are familiar with the challenges and difficulties
                    communities face and are prepared to tackle those
                    challenges.{' '}
                  </span>
                  {/* <span className="text-[#FFF7DF] max:text-[19px] lg:font-semibold font-['Gibson'] leading-[30px] tracking-wide">
                    Click below to learn more about what we have to offer your
                    community.
                  </span> */}
                </div>
              </div>
              <div className="bg-[#6B4949]  lg:px-[72px] px-[15px] py-[35px] lg:text-right text-center">
                <Link to={'/Services'}>
                  <button className="text-[#F6C94B] text-[22px] text-start max-w-[219px] lg:max-w-full lg:text-[22px] font-semibold font-['Gibson'] lg:leading-[29px] tracking-[2.64px]">
                    VIEW OUR OFFERINGS & PRICING {'>'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-20">
        <div className="bg-[#282724]  relative space-y-[70px] px-[70px] lg:px-[180px] xl:px-0 py-[60px]  lg:py-[110px]">
          <div className="space-y-[20px] xl:max-w-[1023px] mx-auto  lg:space-y-[44px]">
            <div className="max-w-[734px] lg:block hidden Hiragino  text-[#FFF7DF] text-[30px] lg:text-[84px] font-light font-['Hiragino Mincho ProN'] lg:leading-[82.30px]">
              About Us.
            </div>
            <div className="lg:hidden Hiragino text-[#FFF7DF] text-6xl font-light font-['Hiragino Mincho ProN'] leading-[59.22px] tracking-[-3.022px]">
              About <br />
              Us.
            </div>

            <div className="max-w-[714px] lg:block hidden text-[#FFF7DF] text-[16px] lg:text-[19px] font-light font-['Gibson'] lg:leading-[46px] leading-[35px] tracking-[0.57px]">
              We believe Capital Concierge’s mission is to provide our clients
              the highest quality and most effective customer service. Our
              priority is to manage our clients expectations while working in
              partnership to create innovative solutions, honestly, dependably,
              proficiently and with integrity.
            </div>
            <div className="max-w-[290px] lg:hidden text-[#FFF7DF] text-[19px] font-light font-['Gibson'] leading-[46px] tracking-[0.57px]">
              We believe Capital Concierge’s mission is to provide our clients
              the highest quality and most effective customer service. Our
              priority is to manage our clients expectations while working in
              partnership to create innovative solutions, honestly, dependably,
              proficiently and with integrity.
            </div>
          </div>

          <div className="w-full lg:block hidden xl:max-w-[1023px]  xl:mx-auto flex justify-end">
            <button
              onClick={() => {
                setTimeout(function () {
                  scrollToSection('Offering')
                }, 100)
                navigate('/Services')
              }}
              className="text-[#F6C94B] text-right text-[16px] lg:text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]"
            >
              VIEW OUR OFFERINGS {'>'}
            </button>
          </div>
          <div
            onClick={() => {
              setTimeout(function () {
                scrollToSection('Offering')
              }, 100)
              navigate('/Services')
            }}
            className="w-[265px] cursor-pointer lg:hidden text-[#F6C94B] text-[22px] font-semibold font-['Gibson'] leading-[29px] tracking-[2.64px]"
          >
            VIEW OUR OFFERINGS {'>'}
          </div>
        </div>
      </section>
      <div className="bg-[#F8EED3] ">
        <section className=" pb-[120px] pt-[60px] xl:mx-auto space-y-[45px] lg:columns-2 gap-[150px] xl:max-w-[1023px] xl:px-0	 px-[70px] lg:px-[150px]">
          <p className="max-w-[767px] lg:block hidden lg:pb-[100px] lg:pt-0 lg:text-start  py-[50px] ">
            <span className="text-[#29292B] text-[40px] lg:text-[84px] font-light Hiragino  lg:leading-[89px]">
              our <br />
            </span>
            <span className="text-[#29292B] text-[40px] lg:text-[84px] font-semibold Hiragino  lg:leading-[89px]">
              reputation
              <br />
            </span>
            <span className="text-[#29292B] text-[40px] lg:text-[84px] font-light Hiragino  lg:leading-[89px]">
              speaks <br className="lg:block hidden" />
              for
              <br className="lg:block hidden" />
              itself.
            </span>
          </p>
          <p className="max-w-[530px] lg:hidden">
            <span className="text-[#29292B] text-[58.04px] font-light font-['Hiragino Mincho ProN'] leading-[61.50px] tracking-[-2.902px]">
              our <br />
            </span>
            <span className="text-[#29292B] text-[58.04px] font-semibold font-['Hiragino Mincho ProN'] leading-[61.50px] tracking-[-2.902px]">
              reputation
              <br />
            </span>
            <span className="text-[#29292B] text-[58.04px] font-light font-['Hiragino Mincho ProN'] leading-[61.50px] tracking-[-2.902px]">
              speaks
              <br />
              for
              <br />
              itself.
            </span>
          </p>

          {quotes.map((el, index) => (
            <div key={index} className="block pb-[100px] lg:pb-0">
              <Quote author={el.author} text={el.text}></Quote>
            </div>
          ))}
        </section>
      </div>
      <Work></Work>
    </div>
  )
}

export default Home
