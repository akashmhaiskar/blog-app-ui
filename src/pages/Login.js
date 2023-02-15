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

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Login Here !!</h3>
              </CardHeader>
              <CardBody>
                {/* creating login form*/}

                <Form>
                  {/*Email field */}
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input type="email" placeholder="Enter here" id="email" />
                  </FormGroup>
                  {/*password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input type="password" id="password" />
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="light" outline>
                      Login
                    </Button>
                    <Button
                      color="secondary"
                      type="reset"
                      className="ms-2"
                      outline
                    >
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

export default Login;
