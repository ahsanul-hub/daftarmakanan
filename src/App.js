import "./App.css";
import { Container, Table, Row, Col } from "react-bootstrap";

function App() {
  const data = [
    { title: "bakso", price: 12000 },
    { title: "Ayam Bakar", price: 15000 },
    { title: "Mie Ayam", price: 13000 },
  ];

  return (
    <div className="App py-3">
      <h1 className="mt-4">Daftar Makanan</h1>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover className="mt-4">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Makanan</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td colspan="2" className="text-start px-4">
                    Total :
                  </td>
                  <td>{data.reduce((sum, elem) => sum + elem.price, 0)}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className="mt-4">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Makanan</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) =>
                  item.price >= 12500 ? (
                    <tr>
                      <td>{idx + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                    </tr>
                  ) : (
                    <></>
                  )
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
