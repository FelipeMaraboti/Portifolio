import React from 'react'

const Header = () => {
  return (
    <section className='max-w-8xl w-auto h-auto pt-16 px-0 flex flex-col items-center justify-center'> 
        {/* Botão de baixar CV */}
        <div className='w-full flex justify-end'>
        <a href="./public/curriculo.pdf" 
             download='Curriculo_Felipe'
             className='mr-68 md:mr-32 sm:mr-8 px-4 py-2 rounded-md text-sm font-medium font-sans text-zinc-50 bg-purple-light'
             >
              Baixar CV
          </a>  
        </div>    
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
              <img src="./public/gmail.png" alt="gmail" className='size-11'/>
            </a>
            <a href="https://github.com/FelipeMaraboti" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
              <img src="./public/github.png" alt="github" className='size-11'/>
            </a>
            <a href="https://www.instagram.com/felipwsabino" className='cursor-pointer' target="_blank" rel="noopener noreferrer">
              <img src="./public/insta.png" alt="instagram" className='size-11' target="_blank" rel="noopener noreferrer"/>
            </a>
            <a href="https://www.linkedin.com/in/felipesabinomaraboti" className='cursor-pointer'>
              <img src="./public/linkedin.png" alt="" className='size-11'/>
            </a>
          </div>
      </section>
  )
}

export default Header