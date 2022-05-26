import {createContext, useEffect, useState, ReactNode} from 'react'
import { api } from './services/api'

interface Transacation {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

interface TransacationProviderProps {
    children: ReactNode;
}

interface TransacationContextData {
    transactions: Transacation[];
    createTransaction: (transaction: TransacationInput) => Promise<void>;
}

// interface TransacationInput{
//     title: string,
//     amount: number,
//     type: string,
//     category: string,
// }

// ou
// Typescript permite nós hendar uma interface
// Omit<interface,variáveis que não quero ter ou obter>
type TransacationInput = Omit<Transacation, 'id' | 'createdAt'>

export const TransactionsContext = createContext<TransacationContextData>({} as TransacationContextData )

export function TransactionsProvider({ children}: TransacationProviderProps ){
    const [transactions, setTransaction] = useState<Transacation[]>([])

    useEffect(()=> {
        api.get('transactions')
            .then(response => setTransaction(response.data.transactions))  
    },[]);

    async function createTransaction(transactionInput: TransacationInput){
       const response = await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date()
       });
       const {transaction} = response.data;
       setTransaction([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}