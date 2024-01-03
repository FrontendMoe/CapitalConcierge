import { Link } from 'react-router-dom'
import video from '../vid.mp4'
import { Fade } from 'react-reveal'
import Navbar from '../components/Navbar'
import Quote from '../components/Quote'
import films from '../assets/films.png'
import Work from '../components/Work'
function Home() {
  const quotes = [
    {
      text: (
        <>
          Capital Concierge sets the standard for what a hybrid of security and
          service should look like in any industry, I have watched Janell and
          her team execute every single time, if it was my choice I would never
          work with anyone else.{' '}
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
          I wanted to take a moment and acknowledge your staff for their
          Courteous, Passionate and Professional behavior towards the residents
          of The William Oliver Building. I have personally experienced their
          service as a resident since 2016 plus the numerous resident
          compliments that the HOA Board has received. The Concierges have
          always gone above and beyond for the residents. Please convey the{' '}
          {"Board's"} gratitude to the concierges and for your leadership. Thank
          you.
        </>
      ),
      author: (
        <>
          {' '}
          <br />
          Bobby Qureshi
          <br />
          Home Owners Assoc. President
        </>
      ),
    },
    {
      text: (
        <>
          I wanted to take a moment and acknowledge your staff for their
          Courteous, Passionate and Professional behavior towards the residents
          of The William Oliver Building. I have personally experienced their
          service as a resident since 2016 plus the numerous resident
          compliments that the HOA Board has received. The Concierges have
          always gone above and beyond for the residents. Please convey the{' '}
          {"Board's"} gratitude to the concierges and for your leadership. Thank
          you.
        </>
      ),
      author: (
        <>
          {' '}
          <br />
          Bobby Qureshi
          <br />
          Home Owners Assoc. President
        </>
      ),
    },
    {
      text: (
        <>
          I wanted to take a moment and acknowledge your staff for their
          Courteous, Passionate and Professional behavior towards the residents
          of The William Oliver Building. I have personally experienced their
          service as a resident since 2016 plus the numerous resident
          compliments that the HOA Board has received. The Concierges have
          always gone above and beyond for the residents. Please convey the{' '}
          {"Board's"} gratitude to the concierges and for your leadership. Thank
          you.
        </>
      ),
      author: (
        <>
          {' '}
          <br />
          Bobby Qureshi
          <br />
          Home Owners Assoc. President
        </>
      ),
    },
    {
      text: (
        <>
          I wanted to take a moment and acknowledge your staff for their
          Courteous, Passionate and Professional behavior towards the residents
          of The William Oliver Building. I have personally experienced their
          service as a resident since 2016 plus the numerous resident
          compliments that the HOA Board has received. The Concierges have
          always gone above and beyond for the residents. Please convey the{' '}
          {"Board's"} gratitude to the concierges and for your leadership. Thank
          you.
        </>
      ),
      author: (
        <>
          {' '}
          <br />
          Bobby Qureshi
          <br />
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
          <div className="absolute z-10 left-1/2 -translate-x-1/2">
            <Navbar></Navbar>
          </div>
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
          <div className="max-w-[1004px] relative h-[0px] border border-black border-opacity-20">
            <img
              src={films}
              className="absolute mix-blend-darken opacity-45 h-[1319px] rotate-90"
            ></img>
          </div>
          <div className="flex gap-[65px] justify-between">
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
          <div className="max-w-[1004px] h-[0px] border border-black border-opacity-20"></div>
          <div className="flex gap-[65px] justify-between">
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
      <section className="bg-[#F8EED3] pb-[120px] columns-2 gap-[125px]	 px-[150px]">
        <div className="max-w-[767px] pb-[100px]">
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
        {quotes.map((el, index) => (
          <div key={index} className="block ">
            <Quote author={el.author} text={el.text}></Quote>
          </div>
        ))}
      </section>
      <Work></Work>
    </div>
  )
}

export default Home
