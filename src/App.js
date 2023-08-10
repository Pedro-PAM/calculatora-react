import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';
import {Container, Content, Row, Column} from './components/styles';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {

    setCurrentNumber(prev => `${prev === '0'? '':prev}${num}`)
  }
  const handleClearNumber = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }
    else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));  
      setFirstNumber('0');
      setOperation('');
    }  
  }

  const handleSubNumber = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }
    else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));  
      setFirstNumber('0');
      setOperation('');
    }  

  }
  const handleMultiNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setOperation('x');
      setCurrentNumber('0');
    }
    else{
      const mult = Number(currentNumber) * Number(firstNumber);
      setCurrentNumber(String(mult)); 
      setFirstNumber('0');
      setOperation('');
      }
    
  }

  const handleDivNumber = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setOperation('/');
      setCurrentNumber('0');  
    
    }
    else{
      const divi = Number(firstNumber)/Number(currentNumber);
      setCurrentNumber(String(divi));
      setOperation('');
      setFirstNumber('0');

    }
  }
  
  const handleEqualNumber = () => {
    if(firstNumber !== '0' && operation !==''){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;
        case 'x':
          handleMultiNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        default:
          break;          
         
      }
    }    
  }

  
  return (
    <Container>
      <Content>
      <h1>
        Olá react - Calculadora
      </h1>
      <Input value={currentNumber}/>
      <Column>
      <Row>
        <Button label={'C'} onClick={handleClearNumber}></Button>
        
      </Row>
      </Column>
      <Column>
      <Row>
        <Button label={1} onClick={()=> handleAddNumber('1')}></Button>
        <Button label={2} onClick={()=> handleAddNumber('2')}></Button>
        <Button label={3} onClick={()=> handleAddNumber('3')}></Button>
      </Row>
      </Column>
      <Column>
      <Row>
        <Button label={4} onClick={()=> handleAddNumber('4')}></Button>
        <Button label={5} onClick={()=> handleAddNumber('5')}></Button>
        <Button label={6} onClick={()=> handleAddNumber('6')}></Button>
      </Row>
      </Column>
      <Column>
      <Row>
        <Button label={7} onClick={()=> handleAddNumber('7')}></Button>
        <Button label={8} onClick={()=> handleAddNumber('8')}></Button>
        <Button label={9} onClick={()=> handleAddNumber('9')}></Button>
      </Row>
      </Column>
      <Column>
      <Row>
        <Button label={'X'} onClick={handleMultiNumber}></Button>
        <Button label={'/'} onClick={handleDivNumber}></Button>
        <Button label={'+'} onClick={handleSumNumber}></Button>
        <Button label={'-'} onClick={handleSubNumber} ></Button>
        <Button label={'='} onClick={handleEqualNumber}></Button>
      </Row>
      </Column>
      </Content>
    </Container>
      
            
    
  );
}

export default App;
