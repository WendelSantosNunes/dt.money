import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'

export function Header(){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="at money" />
                <button>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}