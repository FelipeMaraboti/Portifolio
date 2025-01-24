export function Header() {
  return (
    <section className='max-w-8xl w-auto h-auto pt-16 px-0 flex flex-col items-center justify-center'>
      <div className='w-full flex justify-end'>
        <a href="/curriculo.pdf"
          download='Curriculo_Felipe'
          className='md:mr-4 sm:mr-1 px-4 py-2 rounded-md text-sm font-medium font-sans text-zinc-300 bg-purple-light'
        >
          Baixar CV
        </a>
      </div>
      <div className='w-40 h-40 rounded-full border-4 border-purple-light 
          bg-[url("/eu.jpeg")] bg-cover bg-bottom'></div>
      {/* Nome e tipo de Dev */}
      <div className='flex flex-col justify-center text-zinc-300 items-center pt-4 font-bold'>
        <h1 className='text-xl'>Felipe Sabino Maraboti</h1>
        <p className='text-base pt-1'> &lt;/ Desenvolvedor Front-End &gt;</p>
      </div>
      <div className='flex justify-between gap-4 pt-4 items-center'>
        <a href="mailto:felipemarabotti989@gmail.com" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
          <img src="/gmail.png" alt="gmail" className='size-11' />
        </a>
        <a href="https://github.com/FelipeMaraboti" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="github" className='size-11' />
        </a>
        <a href="https://www.instagram.com/felipwsabino" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
          <img src="/insta.png" alt="instagram" className='size-11' />
        </a>
        <a href="https://www.linkedin.com/in/felipesabinomaraboti" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="linkedin" className='size-11' />
        </a>
      </div>
    </section>
  )
}