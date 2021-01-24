import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact-section-bg">
      <div className="container pt-5 pb-5 ">
        <Row className="justify-content-between">
          <Col md={4}>
            <h1>Web Developer</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              veniam corporis debitis repudiandae, voluptas nulla recusandae
              aliquam omnis expedita est. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aut veniam corporis debitis
              repudiandae, voluptas nulla recusandae aliquam omnis expedita est.
            </p>
          </Col>
          <Col md={7}>
            <from autoComplete="off">
              <Row>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Name"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Email"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Phone"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={6}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Subject"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
                <Col className="mb-4" md={12}>
                  <TextField
                    className="w-100 form-textfield"
                    id="standard-basic"
                    label="Message"
                    InputLabelProps={{
                      className: "form-textfield-input",
                    }}
                    InputProps={{
                      className: "form-textfield-input",
                    }}
                  />
                </Col>
              </Row>
              <Button
                color="white"
                variant="outlined"
                className="send-message-btn mt-4"
              >
                Send Message
              </Button>
            </from>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
