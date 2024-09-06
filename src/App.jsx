import './App.css'

function App() {
  

  return (
    <div className='bg-fundo-svg h-full min-h-screen w-screen bg-no-repeat bg-cover'>

        {/* Parte do nome e função */}
      <section className='max-w-8xl w-auto h-auto pt-16 px-0 flex flex-col  items-center justify-center'>       
        {/* Imagem do Usuário */}
          <div className='w-40 h-40 rounded-full border-4 border-purple-light 
          bg-custom-background bg-cover bg-bottom'></div>
        {/* Nome e tipo de Dev */}
          <div className='flex flex-col justify-center text-zinc-50 items-center pt-4 font-bold'>
            <h1 className='text-xl'>Felipe Sabino Maraboti</h1>
            <p className='text-base pt-1'> &lt;/ Desenvolvedor Front-End &gt;</p>
          </div>
        {/* Links das redes sociais */}
          <div className='flex justify-between gap-4 pt-4 items-center'>
            <a href="mailto:felipemarabotti989@gmail.com" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
              <img src="./public/gmail.png" alt="gmail" className='size-10'/>
            </a>
            <a href="https://github.com/FelipeMaraboti" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
              <img src="./public/github.png" alt="github" className='size-10'/>
            </a>
            <a href="https://www.instagram.com/felipwsabino" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
              <img src="./public/insta.png" alt="instagram" className='size-10' target="_blank" rel="noopener noreferrer"/>
            </a>
            <a href="https://www.linkedin.com/in/felipesabinomaraboti" className='cursor-pointer'>
              <img src="./public/linkedin.png" alt="" className='size-10'/>
            </a>
          </div>
      </section>

      <section>

      </section>

    </div>
  )
}

export default App
