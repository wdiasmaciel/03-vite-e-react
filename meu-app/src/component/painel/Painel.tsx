import './Painel.css'
import Cartao from '../cartao/Cartao'

export default function Painel() {
  return (
    <div className="painel">
      <Cartao 
        caminho_da_imagem='/transporte.png'
        descricao_da_imagem='Transporte público'
        texto_do_titulo='Transporte Urbano'
        texto_da_descricao='Últimas notícias sobre o transporte público em Belo Horizonte e região metropolitana.'
        rotulo_do_botao='Ler mais'
        destino_do_botao='#'
       />
    </div>
  )
}
