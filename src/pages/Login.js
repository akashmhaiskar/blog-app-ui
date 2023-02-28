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
import { useEffect, useState } from "react";
import {toast } from 'react-toastify';
import Base from "../components/Base";
import { loginUser } from "../services/user-service";

const Login = () => {

const [loginDetail, setLoginDetail] = useState({
  username:'',
  password:''
});

const handleChange = (event, field)=>{

  let actualValue=event.target.value
  setLoginDetail({
    ...loginDetail,
    [field]:actualValue
  })
}

const handleReset = () => {
  setLoginDetail({
    username:"",
    password:""
  });
};


const handleFormSubmit = (event) =>{
  event.preventDefault();
  console.log(loginDetail);

  //validation
  if(loginDetail.username.trim() == '' || loginDetail.password.trim() == ''){
    toast.error("Username or password is required !!");
    return;
  }

  //submit the data to server to generate token
  loginUser(loginDetail).then((jwtTokenData) => {
    console.log("user login: ")
    console.log(jwtTokenData)
    toast.success('Login Success !!')
  }).catch(error => {
    console.log(error)
    if(error.response.status == 400 || error.response.status == 404
      || error.response.status == 401){
      toast.error(error.response.data.message)
    }else {
      toast.error("Something went wrong on server !!")
    }
  })
};

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

                <Form onSubmit={handleFormSubmit}>
                  {/*Email field */}
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input type="email" placeholder="Enter here" id="email" 
                    value={loginDetail.username}
                    onChange = {(e) => handleChange(e, 'username')}/>
                  </FormGroup>
                  {/*password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input type="password" id="password" 
                     value={loginDetail.password}
                     onChange = {(e) => handleChange(e, 'password')}/>
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="light" outline>
                      Login
                    </Button>
                    <Button onClick={handleReset}
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
