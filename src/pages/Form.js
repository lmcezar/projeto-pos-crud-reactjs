import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import axios from "axios";

const url = "https://node-todo-dev.herokuapp.com/api/todos";

export default () => {
  const todoSchema = Yup.object({
    description: Yup.string().required("A descrição precisa ser informada!"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: todoSchema,
    onSubmit: (values) => {
      axios.post(url, values).then((res) => {
        if (res.status === 201) {
          toast.success("TODO foi criado com sucesso!");
        }
      });
    },
  });

  return (
    <div>
      <Container>
        <Form>
          <h3>Add TODO</h3>
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
          <Button onClick={formik.handleSubmit}>Create</Button>
        </Form>
      </Container>
    </div>
  );
};
