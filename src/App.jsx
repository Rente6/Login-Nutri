import Logo from '../src/assets/Logo.png'
// import But from './components/Botao'
import './Fundo.css'

function App() {
  
  return (
    <div className='fundo'>
      <div className='bloco'>
      <img src={Logo} alt="" width="70px" height="46px"/>
        <h1>Login</h1> 
        {/* <But/> */}
         <p className='pp'>Email:</p>
         <input type="email"  id="email" />
         <p className='pp'>Senha:</p>
        <input type="password" id="senha" />
        <br />
        <h2 className='cadastro'>Cadastre-se</h2>
        <button className='entrar'>Entrar</button>
      </div>
    </div>
  )
}

export default App
