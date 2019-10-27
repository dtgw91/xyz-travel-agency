import React from 'react'
import { UserProvider } from './UserContext'

class UserStore extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
        user: {
        userName: "",
        password: ""
    }
  };
  }

    componentDidMount = () => {

  if(localStorage.getItem('userName')){
    this.setState({ user: {
                        userName: localStorage.getItem('userName')
                    } })
  }

  }

    setLoginUserName = val => {
        if(!val || val===""){
            localStorage.clear();
        }
            localStorage.setItem('userName', val);
            this.setState({ user: {
                            userName: val
                            } });
        };

  render() {
    return (
      <UserProvider value={{ user:this.state.user , setLoginUserName: this.setLoginUserName}}>
        {this.props.children}
      </UserProvider>
    );
  }

}

export default UserStore;