import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./form.css";
function FormValid(props) {
  const [FName, setFName] = useState();
  const [LName, setLName] = useState();
  const [Email, setEmail] = useState();
  const [Mobile, setMobile] = useState();
  const [Country, setCountry] = useState();
  const [City, setCity] = useState();
  const [State, setState] = useState();
  const [Message, setMessage] = useState();

  const [formErrors, setformErrors] = useState({
    FNameErr: "",
    LNameErr: "",
    EmailErr: "",
    MobileErr: "",
    CountryErr: "",
    CityErr: "",
    StateErr: "",
    MessageErr: "",
  });
  const handleFormValidation = () => {
    let formIsValid = true;
    setformErrors({});
    const formsss = {};
    //Student name
    if (!FName) {
      formIsValid = false;
      formsss["FNameErr"] = "First Name is required.";
    }
    if (!LName) {
      formIsValid = false;
      formsss["LNameErr"] = "Last Name is required.";
    }
    //Email
    if (!Email) {
      formIsValid = false;
      formsss["EmailErr"] = "Email id is required.";
    } else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(Email)) {
      formIsValid = false;
      formsss["EmailErr"] = "Invalid email id.";
    }

    //Phone number
    if (!Mobile) {
      formIsValid = false;
      formsss["MobileErr"] = "Phone number is required.";
    } else {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!mobPattern.test(Mobile)) {
        formIsValid = false;
        formsss["MobileErr"] = "Invalid phone number.";
      }
    }
    if (!Country) {
      formIsValid = false;
      formsss["CountryErr"] = "Country is required";
    }
    if (!City) {
      formIsValid = false;
      formsss["CityErr"] = "City is required";
    }
    if (!State) {
      formIsValid = false;
      formsss["StateErr"] = "State is required";
    }
    setformErrors(formsss);
    console.log(formsss);
    return formIsValid;
  };
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(handleFormValidation());
    if (handleFormValidation()) {
      setFName("");
      setLName("");
      setEmail("");
      setMobile("");
      setCountry("");
      setCity("");
      setState("");
      setMessage("");
      window.alert("You have been successfully registered.");
      //   this.setState(this.initialState);
    } else {
      console.log(formErrors);
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="full-height">
              <div className="wrap">
                <form className="" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first Name"
                        onChange={(e) => {
                          setFName(e.target.value);
                        }}
                      />
                      {formErrors.FNameErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.FNameErr}
                        </div>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Last Name"
                        onChange={(e) => {
                          setLName(e.target.value);
                        }}
                      />
                      {formErrors.LNameErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.LNameErr}
                        </div>
                      )}
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>E-Mail</Form.Label>
                      <Form.Control
                        placeholder="Enter your E-mail"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      {formErrors.EmailErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.EmailErr}
                        </div>
                      )}
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={7}>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your mobile number"
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                        />
                        {formErrors.MobileErr && (
                          <div style={{ color: "red", paddingBottom: 10 }}>
                            {formErrors.MobileErr}
                          </div>
                        )}
                      </Form.Group>
                    </Col>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Country</Form.Label>
                      <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                      >
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                      {formErrors.CountryErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.CountryErr}
                        </div>
                      )}
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your city"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                      {formErrors.CityErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.CityErr}
                        </div>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                      >
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                      {formErrors.StateErr && (
                        <div style={{ color: "red", paddingBottom: 10 }}>
                          {formErrors.StateErr}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Country</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Enter your message (optional)"
                      />
                    </Form.Group>
                  </Row>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormValid;
