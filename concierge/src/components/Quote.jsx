import { leftQuote, rightQuote } from '../assets/icons'

function Quote({
  // eslint-disable-next-line react/prop-types
  author = (
    <>
      <br />
      Bobby Qureshi
      <br />
      Home Owners Assoc. President
    </>
  ),
  // eslint-disable-next-line react/prop-types
  text = (
    <>
      I wanted to take a moment and acknowledge your staff for their Courteous,
      Passionate and Professional behavior towards the residents of The William
      Oliver Building. I have personally experienced their service as a resident
      since 2016 plus the numerous resident compliments that the HOA Board has
      received. The Concierges have always gone above and beyond for the
      residents. Please convey the {"Board's"} gratitude to the concierges and
      for your leadership. Thank you.
    </>
  ),
}) {
  return (
    <div className="relative w-fit space-y-[20px] lg:space-y-[40px] break-inside-avoid">
      <div className="relative w-fit  ">
        <div className="lg:absolute  flex w-full lg:w-fit  justify-start top-0 -ml-[70px] lg:-ml-0  lg:-left-[80px] lg:scale-100 scale-[60%]">
          {leftQuote}
        </div>
        <p className="flex flex-col  items-center text-black text-[20px] lg:text-[25px] font-light font-['Gibson'] lg:leading-[44.70px]">
          {text}
        </p>
        <div className="lg:absolute  flex w-full lg:w-fit  justify-end bottom-0 -mr-[70px] lg:-mr-0  lg:-right-[50px] lg:scale-100 scale-[60%]">
          {rightQuote}
        </div>
      </div>
      <p className="w-fit lg:h-[113px] text-black text-[18px] lg:text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-[0.46px]">
        {author}
      </p>
    </div>
  )
}

export default Quote
