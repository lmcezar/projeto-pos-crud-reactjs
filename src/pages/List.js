import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Table } from 'react-bootstrap';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import moment from 'moment';
import axios from 'axios';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';

export default (props) => {
  const [todos, setTodos] = useState([]);
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    findTodos();
  }, []);

  function findTodos() {
    axios.get(url).then((res) => {
      setTodos(res.data);
    });
  }

  function handleRemove(id) {
    console.log('Lista de TODOs', todos);
    MySwal.fire({
      title: 'Você tem certeza?',
      text: 'Uma vez deletado, você não poderá recuperar este TODO.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d9534f',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((isConfirmed) => {
      if (isConfirmed.value) {
        axios.delete(`${url}/${id}`).then((res) => {
          const lista = todos.filter((todo) => {
            return todo._id !== id;
          });
          setTodos(lista);
        });
      }
    });
  }

  function mapTodos() {
    return todos.map((todo) => (
      <tr>
        <td>{todo.description}</td>
        <td>{moment(todo.createdAt).format('DD/MM/YYYY')}</td>
        <td>{todo.done ? 'Sim' : 'Não'}</td>
        <td>
          <Button variant="danger" onClick={() => handleRemove(todo._id)}>
            Remover
          </Button>
          <Button
            variant="outline-success"
            onClick={() => {
              props.history.push(`/edit/${todo._id}`);
            }}
          >
            Editar
          </Button>
        </td>
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
              props.history.push('/create');
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
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>{mapTodos()}</tbody>
        </Table>
      </Container>
    </>
  );
};
