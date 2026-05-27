import './estilo.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../iconesHeader'

function Header(){
    return( 
       <header className="App-header">
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
       
      </header>
      
    )
}
export default Header