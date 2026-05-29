import livros  from "./dadosUltimosLancamentos"
import styled from "styled-components"
import {Titulo} from '../Titulo'
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../imagens/livro2.png'


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
 `

 const ImagemLivro = styled.img`
    width: 150px;
    height: auto;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>

        <Titulo 

         cor = "#EB9B00"
         tamanhoFonte = "36px" 
         
         > ÚLTIMOS LANÇAMENTOS </Titulo>

        <NovosLivrosContainer>

        {livros.map(livro => (
            <ImagemLivro src = {livro.src } alt=""/>
        ))}

        </NovosLivrosContainer>
        
        <CardRecomenda
            titulo= "Talvez você se interesse por"
            subtitulo = "Supernatural"
            descricao = "Supernatural acompanha os irmãos Sam e Dean Winchester em sua luta contra demônios, fantasmas e outras criaturas sobrenaturais, enquanto enfrentam tragédias familiares e destinos ligados ao mundo espiritual. "
            img = {imagemLivro}
        />

        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos