import React, { useState } from "react";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

export default () => {
  const [description, setDescription] = useState("");

  const todoSchema = Yup.object({
    description: Yup.string().required("A descrição precisa ser informada!"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: todoSchema,
    onSubmit: (values) => {
      console.log(values);
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
              </Form.Group>
            </Col>
          </Row>
          <Button onClick={formik.onSubmit}>Create</Button>
        </Form>
      </Container>
    </div>
  );
};
