import React, { useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';

export default (props) => {
  const todoSchema = Yup.object({
    description: Yup.string().required('A descrição precisa ser informada!'),
  });

  const params = useParams();

  const formik = useFormik({
    initialValues: {
      description: '',
    },
    validationSchema: todoSchema,
    onSubmit: (values) => {
      axios.put(url + `/${params.id}`, values).then((res) => {
        if (res.status === 200) {
          toast.success('TODO atualizado com sucesso!');
          props.history.push('/home');
        }
      });
    },
  });

  useEffect(() => {
    axios.get(url + `/${params.id}`).then((res) => {
      formik.setFieldValue('description', res.data.description);
    });
  }, []); // eslint-disable-line

  return (
    <div>
      <Container>
        <Form>
          <h3>Edit TODO</h3>
          <Row>
            <Col md="4">
              <Form.Group controlId="description">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  name="description"
                />
                <span>{formik.errors.description}</span>
              </Form.Group>
            </Col>
          </Row>
          <Button onClick={formik.handleSubmit}>Atualizar</Button>
        </Form>
      </Container>
    </div>
  );
};
