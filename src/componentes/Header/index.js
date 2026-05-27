
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeadeContainer = styled.header`

  background-color: #FFF;
  display: flex;
  justify-content: center;



`

function Header(){
    return( 
       <HeadeContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
       
     </HeadeContainer>
      
    )
}
export default Header