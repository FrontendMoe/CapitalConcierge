import video from '../vid.mp4'
import { Fade } from 'react-reveal'
function Company() {
  return (
    <div className="bg-[#F6C94B] ">
      <div className="bg-[#F6C94B] border-t-[3px] border-black flex  text min-h-screen text-black">
        <div className="bg-[#F6C94B] space-y-[72px]   py-[128px] px-[150px]  border-black   border-r-[3px]  w-1/2 ">
          <p className="text-[84px] max-w-[400px] Hiragino leading-[89px]">
            The Best For Your Guest.
          </p>
          <div className="w-[156px] h-[3px] bg-black"></div>
          <p className="text-[25px] leading-[37px] max-w-[330px] font-[300]">
            Professional & Innovative Concierge Services & Solutions.
          </p>
        </div>
        <Fade>
          <video
            src={video}
            loop
            autoPlay
            muted
            className="w-1/2 mix-blend-multiply object-cover"
          ></video>
        </Fade>
      </div>
      <div className="text-center border-black border-t-[3px] space-y-[70px] bg-[#FFF7DF] py-[160px]">
        <p className="text-[52px] leading-[61px] Hiragino  font-[600]">
          CAPITAL <br />
          CONCIERGE
        </p>
        <div className="w-[341px] mx-auto bg-black h-[3px]"></div>
        <p className="w-[890px] mx-auto text-center text-black text-[25px] font-light font-['Gibson'] leading-[58px] tracking-wide">
          We provide each client the personal attention and consideration they
          need, including but not limited to; residential, homeowners
          associations, commercial properties and hospitality companies. We take
          the values and requests of our clients' very seriously, providing only
          the very best in customer service..
        </p>

        <div className="w-[156px]  mx-auto bg-black h-[3px]"></div>
      </div>
      <div className="grid bg-[#F6C94B]  grid-cols-2 min-h-screen bg-[F6C94B]">
        <div className="border-r-[3px] space-y-[35px] px-[70px] pt-[300px] border-black">
          <p className="w-[417.61px] h-[78.15px] text-black text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide">
            <br />
            Bobby Qureshi
            <br />
            Home Owners Assoc. President
          </p>
          <p className="max-w-[439.19px] h-[258px] text-black text-[25px] font-light font-['Gibson'] leading-[44.70px]">
            I wanted to take a moment and acknowledge your staff for their
            Courteous, Passionate and Professional behavior towards the
            residents of The William Oliver Building... <br />
          </p>

          <p className="w-[246.88px] h-[45.09px] text-black text-xl font-semibold font-['Gibson'] leading-tight tracking-[2.54px]">
            READ ALL
          </p>
        </div>{' '}
        <div className=" px-[70px] space-y-[35px] pt-[300px] border-black">
          <p className="w-[417.61px] h-[78.15px] text-black text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide">
            <br />
            Bobby Qureshi
            <br />
            Home Owners Assoc. President
          </p>
          <p className="max-w-[439.19px] h-[258px] text-black text-[25px] font-light font-['Gibson'] leading-[44.70px]">
            I wanted to take a moment and acknowledge your staff for their
            Courteous, Passionate and Professional behavior towards the
            residents of The William Oliver Building... <br />
          </p>

          <p className="w-[246.88px] h-[45.09px] text-black text-xl font-semibold font-['Gibson'] leading-tight tracking-[2.54px]">
            READ ALL
          </p>
        </div>{' '}
      </div>
    </div>
  )
}

export default Company
