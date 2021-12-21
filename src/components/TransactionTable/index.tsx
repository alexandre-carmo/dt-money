import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento React</td>
            <td className="deposit">R$ 1.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento React</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
