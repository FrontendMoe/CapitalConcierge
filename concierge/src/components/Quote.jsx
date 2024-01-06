import { leftQuote, rightQuote } from '../assets/icons'

function Quote({
  // eslint-disable-next-line react/prop-types
  author = (
    <>
      {' '}
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
      <div className="relative w-fit px-[45px] lg:px-[0]">
        <div className="absolute top-0 -left-[15px] lg:-left-[80px] lg:scale-100 scale-50">
          {leftQuote}
        </div>
        <p className="flex flex-col  items-center text-black text-[20px] lg:text-[25px] font-light font-['Gibson'] lg:leading-[44.70px]">
          {text}
        </p>
        <div className="absolute bottom-0 -right-[15px] lg:-right-[80px]  lg:scale-100 scale-50">
          {rightQuote}
        </div>
      </div>
      <p className="w-fit lg:h-[113px] text-black px-[45px] lg:px-[0px] text-[18px] lg:text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide">
        {author}
      </p>
    </div>
  )
}

export default Quote
