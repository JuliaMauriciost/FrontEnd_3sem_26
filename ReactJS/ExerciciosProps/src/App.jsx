import "./App.css"
import MyComponent from "./components/children/mycomponent";
import Saudacao from "./components/exercicio01/saudacao"
import Produto from "./components/exercicio02/produto";
import Perfil from "./components/exercicio03/perfil";
import Filme from "./components/exercicio05/filme";
import Botao from "./components/exercicio04/botao";
import Aluno from "./components/exercicio06/aluno";
import foto from './assets/react.svg'
import Card from "./components/exercicio07/card";
import Contato from "./components/exercicio08/contato";
import Jogo from "./components/exercicio09/jogo";
import ItemLoja from "./components/exercicio10/itemLoja"

const App = () => {
  return (
    <>
      {/*<Saudacao nome="Julia"/>
      <Saudacao nome="Eduardo"/>
      <Saudacao nome="Maria"/>*/}

      <MyComponent>
        {/*Exercicio 02 */}
        <Saudacao nome="Julia" />
        <Produto
          nome="Pão Frances"
          preco={3.790987}
          descricao="Paozinho quentinho, saiu direto do fono para a sua mesa"
        />
      </MyComponent>


      <MyComponent>
        {/*Exercicio 03 */}
        <Perfil
          nome="Júlia"
          idade="17"
          profissao="Desenvolvedora"
        />
      </MyComponent>


      <MyComponent>
        {/*Exercicio 04 */}
        <Botao
          texto="Botão"
          cor="green"
        />
      </MyComponent>


      <MyComponent>
        {/*Exercicio 05 */}
        <Filme
          titulo="Os Incríveis"
          ano="2004"
          genero="Aventura"
          nota="9"
        />
        <Filme
          titulo="Por Água Abaixo"
          ano="2006"
          genero="Comedia"
          nota="10"
        />
        <Filme
          titulo="Minha Mãe É uma Peça"
          ano="2013"
          genero="Comedia"
          nota="10"
        />
      </MyComponent>


      <MyComponent>
        {/*Exercicio 06 */}
        <Aluno
          nome="João Victor"
          curso="Desenvolvimento de Sistemas"
          foto={foto}
        />
      </MyComponent>


      <MyComponent>
        {/*Exercicio 07 */}
        <Card>
          <Botao cor="red" texto="Texto do Botão" />
          <Botao cor="green" texto="Texto do Botão" />
          <p>Lorem ipsum dolor, </p>
        </Card>
      </MyComponent>

      <MyComponent>
        {/*Exercicio 08 */}
        <Contato
          nome="Eduardo"
          telefone="(11) 98332-4567"
          email="eduPereira@gmail.com"
        />

        <Contato
          nome="Maria"
          telefone="(11) 98332-4567"
          email="dudaF@gmail.com"
        />

        <Contato
          nome="Matheus"
          telefone="(11) 98332-4567"
          email="mFerraz@gmail.com"
        />

        <Contato
          nome="João"
          telefone="(11) 98332-4567"
          email="jaoV@gmail.com"
        />

        <Contato
          nome="Marcos"
          telefone="(11) 98332-4567"
          email="marcoss@gmail.com"
        />
      </MyComponent>

      <MyComponent>
        {/*Exercicio 09 */}
        <Jogo
          nome="Mortal Kobat"
          plataforma="PlayStation"
          preco={110.00000}
          foto={foto}
        />
      </MyComponent>

      <MyComponent>
        {/*Exercicio 10 */}
        <ItemLoja
          nome="Máscara Capilar"
          categoria="Cosmeticos"
          preco={54.00000}
          estoque={10}
        />
      </MyComponent>
    </>
  )
}

export default App;