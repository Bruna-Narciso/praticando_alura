import perfil from '../../imagens//sacola.svg'
import sacola from '../../imagens/perfil.svg'
import './estilo.css'
const icones = [perfil, sacola]

function IconesHeader(){
    return(
         <ul className='icones'>
          { icones.map((icone) => (
            <li className='icone'> <img src = {icone} alt=''/> </li>
          ))} 
        </ul>
    )
}
export default IconesHeader