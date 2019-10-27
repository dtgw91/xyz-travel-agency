import React from 'react';
import { Link } from 'react-router-dom';
import {
    Dropdown,
    Segment,
    Header,
    Icon
} from 'semantic-ui-react';
import { UserConsumer } from './UserContext';

// The Header creates links that can be used to navigate
// between routes.
var Heading = (fixed = 'top') => (
          <Segment
            inverted
            color= 'blue'
            textAlign='center'
            style={{ minHeight: 120, padding: '1em 0em'}}
            vertical
          >
            <Header as='h2' style={{ bottom: '0px', position: 'absolute', fontSize: '40px'}} >
                <Link to="/main" style={{color:"white"}}>
                            XYZ Travel Agency
                         </Link>
            </Header>

    <UserConsumer>
        {
            ({user, setLoginUserName}) => (
            <Segment
                inverted
                color= 'blue'
                icon = 'user circle'
                style={{ margin: '0px 0px', display:'block-inline', maxHeight: 140, minWidth:120, maxWidth:140, position: 'absolute', right: '15px', bottom: '0%'}}>
                { user.userName !== '' && <Icon size='huge' centered='true' name='user circle' style={{position:'relative', height: '90%', width: '90%', margin: 'auto', bottom:"5px"}}> </Icon>}
                { user.userName !== '' &&
                <Dropdown compact text={user.userName} style={{ position: 'relative', margin: 'auto', height: '90%'}}>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Log Out' onClick={() => setLoginUserName("")}/>
                    </Dropdown.Menu>
                </Dropdown>}
            </Segment>)
        }
     </UserConsumer>
          </Segment>
    )

const returnHome = () => {
    this.props.history.push('/main')
}

export default Heading
