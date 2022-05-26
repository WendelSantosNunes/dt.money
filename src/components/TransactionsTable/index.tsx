import { useContext} from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable (){
    const {transactions} = useContext(TransactionsContext)

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