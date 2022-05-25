import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps{
   isOpen: boolean;
   onRequestClose: () => void;  
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
  // Vamos pegar os estados do input
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  // Vamos armazena o bortão que foi clicado
  const [type,setType] = useState('deposit') 
  
  // FormEvent é a tipagem dos eventos do react. E essa tipagem já vem nativa na linguagem
  function handleCleateNewTransaction(event: FormEvent){
      event.preventDefault();
      const data = {
        title, value, category, type
      }

      api.post('/transactions', data)
  }

  return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
        <button 
        type='button' 
        onClick={onRequestClose} 
        className="react-modal-close"> 
          <img src={closeImg} alt="Fechar modal" />
        </button>
        {/* Container é form */}
        <Container onSubmit={handleCleateNewTransaction}> 
          <h2>Cadastrar transação</h2>
          
          <input
            placeholder='Título'
            value={title}
            onChange={event => setTitle(event.target.value)} 
          />

          <input
            placeholder='Valor' 
            type="Number" 
            value={value}
            onChange={event => setValue(Number(event.target.value))} 
          />
          
          {/*isActive, podemos criar propriedades para especificar algum tipo de estilo  */}
          {/*Com isso, nós podemos passar parâmentro dentro de um estilo */}
          <TransactionTypeContainer>
            <RadioBox
              type='button'
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type='button'
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder='Categoria' 
            value={category}
            onChange={event => setCategory(event.target.value)} 
          />

          <button type="submit">Cadastrar</button>
        </Container>

      </Modal>
    )
}