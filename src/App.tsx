import { data } from './data'

const App = () => {

  return (
    <main className='rounded-[34px] bg-white shadow-2xl sm:grid sm:grid-cols-2'>
      <div className='px-12 pt-6 pb-10 sm:px-14 sm:pt-10 sm:pb-14 rounded-[0_0_34px_34px] sm:rounded-[34px] bg-gradient-to-b from-lightPurple to-purple text-center'>
        <p className='text-lightPink text-xl sm:text-2xl font-bold'>Your Result</p>
        <div className='w-[140px] sm:w-[200px] aspect-square rounded-full bg-gradient-to-b from-[#4C23CA] to-[#4734F0] text-6xl sm:text-[70px] text-white font-xBold flex flex-col items-center justify-center mx-auto mt-9 mb-8'>
          76
          <span className='block text-lightPink text-lg opacity-70'>of 100</span>
        </div>
        <p className='text-white text-xl sm:text-2xl font-bold mb-8'>Great</p>
        <p className='text-lightPink sm:text-lg leading-6 text-center'>
          Your score higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className='py-10 sm:pt-10 sm:pb-14 px-[30px] sm:px-10 w-full flex flex-col justify-between gap-6 sm:gap-0'>
        <p className='text-black text-2xl font-bold'>Your Result</p>
        <div className='flex flex-col gap-4 w-full'>
          {data.map((el, i) => (
            <div
              key={el.category}
              className={`flex items-center p-[14px] rounded-lg font-bold ${i === 0 ? 'bg-[#FFF6F5] text-[#E66F73]' : i === 1 ? 'bg-[#FFFBF2] text-[#F2C05E]' : i === 2 ? 'bg-[#F2FBFA] text-[#33B090]' : 'bg-[#F3F3FD] text-[#252E8B]'} w-full`}
            >
              <img src={el.icon} alt={el.category} className='mr-3' />
              {el.category}
              <div className='ml-auto text-[#3B4056]'>
                {el.score} <span className='text-[#9C9899]'>/ 100</span>
              </div>
            </div>
          ))}
        </div>
        <button className='w-full h-[56px] rounded-full bg-gradient-to-b from-lightPurple to-purple text-white font-bold hover:bg-none hover:bg-[#303B59] '>
          Continue
        </button>
      </div>

    </main>
  )
}

export default App
