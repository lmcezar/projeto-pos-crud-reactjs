import React, { useEffect, useState } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

const url = "https://node-todo-dev.herokuapp.com/api/todos";

export default (props) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    findTodos();
  }, []);

  function findTodos() {
    axios.get(url).then((res) => {
      setTodos(res.data);
    });
  }

  function mapTodos() {
    return todos.map((todo) => (
      <tr>
        <td>{todo.description}</td>
        <td>{moment(todo.createdAt).format("DD/MM/YYYY")}</td>
        <td>{todo.done ? "Sim" : "Não"}</td>
      </tr>
    ));
  }

  return (
    <>
      <Container>
        <Row>
          <h3>TODOs</h3>
          <Button
            onClick={() => {
              props.history.push("/create");
            }}
            variant="primary"
          >
            Create
          </Button>
        </Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Data de criação</th>
              <th>Concluído</th>
            </tr>
          </thead>
          <tbody>{mapTodos()}</tbody>
        </Table>
      </Container>
    </>
  );
};
