import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transacation {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}


export function TransactionsTable (){
    const [transactions, setTransaction] = useState<Transacation[]>([])

    useEffect(()=> {
        api.get('transactions')
            .then(response => setTransaction(response.data.transactions))  
    },[])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type}>
                                        {
                                            // O navegador tem uma função de formatação dos números
                                            new Intl.NumberFormat('pt-BR', {
                                                style:'currency',
                                                currency: 'BRL'
                                            }).format(transaction.amount)
                                        }
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        {
                                            // O navegador também tem uma função de formatação para data
                                            // transaction.createdAt vem como string
                                            new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}