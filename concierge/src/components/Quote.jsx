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
    <div className="relative w-fit">
      <div className="relative w-fit">
        <div className="absolute top-0 -left-[80px]">{leftQuote}</div>
        <div className="flex flex-col items-center text-black text-[25px] font-light font-['Gibson'] leading-[44.70px]">
          {text}
        </div>
        <div className="absolute bottom-0 -right-[80px]">{rightQuote}</div>
      </div>
      <div className="w-fit h-[113px] text-black text-[23px] font-semibold font-['Gibson'] leading-[29.70px] tracking-wide">
        {author}
      </div>
    </div>
  )
}

export default Quote
