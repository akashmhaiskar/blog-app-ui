import {
  Card,
  Container,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Form,
  Button,
  Row,
  Col,
} from "reactstrap";
import Base from "../components/Base";

const Signup = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Fill Information to Register !!</h3>
              </CardHeader>
              <CardBody>
                {/* creatting form*/}

                <Form>
                  {/*Name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input type="text" placeholder="Enter here" id="name" />
                  </FormGroup>

                  {/*Email field */}
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input type="email" placeholder="Enter here" id="email" />
                  </FormGroup>

                  {/*password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                    />
                  </FormGroup>
                  
                  {/*about field */}
                  <FormGroup>
                    <Label for="about">About</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "250px" }}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="light" outline>Register</Button>
                    <Button color="secondary" type="reset" className="ms-2">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
