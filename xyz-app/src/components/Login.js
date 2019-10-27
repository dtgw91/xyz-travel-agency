import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { UserConsumer } from './UserContext'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], userName: '', userNameField: '', passwordField: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top' position='absolute'>
          <Grid.Column style={{ maxWidth: 450, margin: '20px 0px' }}>
            <Header as='h2' color='blue' textAlign='center'>
             <label>Login with your credentials</label>
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='UserName' maxLength="12" name='userNameField' onChange={this.handleChange} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='passwordField'
                  onChange={this.handleChange}
                />
                <UserConsumer>{
                (setLoginUserName) =>
                (<Button color='blue' fluid size='large' onClick={() => {this.handleSubmit(setLoginUserName)}}>
                  Login
                </Button>)
                }
                </UserConsumer>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      );
  }

  handleChange(event) {
              const target = event.target;
              const value = target.value;
              const name = target.name;

              this.setState({
                [name]: value
              });
  }

  handleSubmit = (e) => {
//    e.preventDefault();
    if (!this.state.userNameField.length) {
      return;
    }
    const user = this.state.userNameField;
    e.setLoginUserName(user);
    this.setState(state => ({
        items: [],
        userName: user,
        userNameField: ''
     }));
     this.props.history.push('/main')
}
}

export default Login;