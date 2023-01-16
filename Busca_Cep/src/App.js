import {useState} from 'react';
import Planet from './img/globe-9.gif';
import api from './service/api';
import { BiSearchAlt } from 'react-icons/bi'
import styled from 'styled-components'

function App() {

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg,#4e7e01, #000000);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Cep = styled.div`
  position: absolute;
  bottom: 37%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CepInput = styled.input.attrs({ type: "text", placeholder: "Digite o Cep..." })`
  width:200px;
  height: 30px;
  background-color: #000000;
  border-radius: 20px 0px;
  text-align: center;
  color: #8a2be2;
  font-size: 20px;
  z-index: 99;
`;

const Button = styled.button`
  padding-left: 15px;
  margin-left: -15px;
  width: 60px;
  height: 35px;
  background-color: #4e7e01;
  border-radius: 20px 0px;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  transition: 400ms all ease-in-out;
  & hover{
    width: 80px;
    background-color: #000000;
  }
`;

const Resposta = styled.main`
  margin-top: 40px;
  width: 250px;
  height: 200px;
  font-family: 'Press Start 2P', cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const RespCep = styled.h4`
  font-size: 15px;
`;

const Rua = styled.span`
  font-size: 18px;
`;

const Bairro = styled.span`
  font-size: 15px;
`;

const City = styled.span`
  font-size: 15px;
`;

const Footer = styled.footer`
  color:#000000;
`;

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function Search(){
    //https://viacep.com.br/ws/26011003/json/

    if(input === ''){
      alert("Preencha com cep válido! ")
      return ;
    }

    try{ 
      const resposta = await api.get(`${input}/json`);
      setCep(resposta.data)
      setInput("");

    }catch{
      alert("Preencha com cep válido! ");
      setInput("")
    }
  }

  return (
    <Container className="Container">
      <img src={Planet} alt='planet'/>

      <Cep className='cepInput' >
        <CepInput value={input}
        onChange={(event) => setInput(event.target.value) }
        />

        <Button className='procurar' onClick={Search}>
        <BiSearchAlt font-size={'20px'} margin-left={'10px'} color={'white'}/>
        </Button>
      </Cep>

      {Object.keys(cep).length > 0 && (
        <Resposta className='main'>
          <RespCep className='procura'> CEP: {cep.cep}</RespCep>

          <Rua className='rua'>{cep.logradouro}</Rua>
          <Bairro className='bairro'>{cep.bairro}</Bairro>
          <City className='cidade'>{cep.localidade} - {cep.uf}</City>
        </Resposta>

      )}
      <Footer>
        <p><a href='https://github.com/C410J0S3' >@2022 by Caio Oliveira</a></p>
      </Footer>
      
    </Container>
  );
}

export default App;
