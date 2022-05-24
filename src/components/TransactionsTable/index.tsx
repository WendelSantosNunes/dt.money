import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface transitions {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdDate: string
}


export function TransactionsTable (){
    const [transactions, setTransaction] = useState<transitions[]>([])

    useEffect(()=> {
        api.get('transactions')
            .then(response => setTransaction(response.data))  
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
                        transactions.map(transaction =>{
                            return (
                                <tr>
                                    <td>{transaction.title}</td>
                                    <td className="deposit">{transaction.amount}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdDate}</td>
                                </tr>
                            )
                        })
                    }
                    {
                    /* <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td> 
                    </tr>*/
                    }
                </tbody>
            </table>
        </Container>
    )
}