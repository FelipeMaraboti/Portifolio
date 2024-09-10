import './App.css'
import Header from './components/Header'

function App() {
  
  return (
    <>
      <Router>
      <div className='px-60 md:px-32 sm:px-10 bg-fundo-svg h-auto min-h-screen w-screen bg-no-repeat overflow-hidden bg-cover'>
        <Header />
        <section className='pt-32 flex max-w-8xl w-auto h-auto'>
          <aside className='h-72 mb-32 w-52 bg-transparent'>
            <ul className='flex flex-col border-l-custom-width border-zinc-500 text-zinc-500 gap-6 py-5'>
              <li className='w-28 text-md border-b-custom-width border-zinc-50 text-zinc-50 pl-2 ml-4'>
                <a href="">Sobre Mim</a>
              </li>
              <li className='w-28 ml-4'>
                <a href="">Projetos</a>
              </li>
              <li className='w-28 ml-4'>
                <a href="">Hard Skills</a>
              </li>
              <li className='w-28 ml-4'>
                <a href="">Soft Skills</a>
              </li>
              <li className='w-28 ml-4'>
                <a href="">Freelancer</a>
              </li>
            </ul>
          </aside>
          <div className='flex-1 h-auto mb-32 flex flex-col text-justify justify-between py-10 items-baseline text-zinc-200'>
              <p> 
                Olá! Sou Felipe Sabino Maraboti, estudante de Sistemas de Informação
                e desenvolvedor web especializado em React.js. 
                Tenho 19 anos e uma paixão intensa pela área de tecnologia. 
                Gosto de estar sempre atualizado com as últimas tendências e inovações, 
                buscando desenvolver soluções práticas e eficientes através da programação.
              </p>
              <p>
              Amo o processo de criar aplicações modernas, explorando a interatividade do frontend com React,
              e estou sempre aprimorando minhas habilidades para entregar projetos cada vez mais completos e funcionais.
                Minha dedicação à tecnologia me motiva a aprender continuamente e a enfrentar novos desafios no mundo do 
                desenvolvimento.
              </p>
          </div>
        </section>
      </div>
    </Router>
  </>
  )
}

export default App
