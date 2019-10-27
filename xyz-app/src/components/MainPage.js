import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Breadcrumb, Card, Grid, Image } from 'semantic-ui-react'
import { UserConsumer } from './UserContext';

import PastApplicationImage from '../images/PastApplications.png'
import NewApplicationImage from '../images/NewApplication.png'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], userName: '', inputText: ''};
  }

  render() {
    return (

    <div style={{margin:"10px 20%"}}>
        <BreadcrumbHome />
    <UserConsumer>
        {
            ({user}) => (
            <h1>Welcome to the main page, {user.userName}</h1>)
        }
     </UserConsumer>
     <div style={{margin:"0px 0%"}}>
    <GridImageCelled/>
    </div>
</div>
      );
  }

}

const GridImageCelled = () => (
  <Card.Group itemsPerRow={4} >
    <Card raised style={{width:"210px", height:"210px"}}>
    <Image src={PastApplicationImage} style={{width:"120px", height:"150px", backgroundColor:"rgba(0,0,0,0)"}} centered verticalAlign="middle"/>
    <div style={{bottom:"10%", position:"absolute", textAlign:"center", width:"100%"}}>
            <Link to="/view" >
                View Past Applications
             </Link>
            </div>
    </Card>
    <Card raised style={{width:"210px", height:"210px"}}>
        <Image src={NewApplicationImage} style={{width:"120px", height:"150px", backgroundColor:"rgba(0,0,0,0)"}} centered verticalAlign="middle"/>
        <div style={{bottom:"10%", position:"absolute", textAlign:"center", width:"100%"}}>
        <Link to="/new" >
            Create New Application
         </Link>
        </div>
     </Card>
  </Card.Group>
)

const GridExampleCelled = () => (
  <Grid celled >
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={PastApplicationImage} style={{height:"100px", width:"100px"}} centered />
      </Grid.Column>
      <Grid.Column width={13}>
      <h3 style={{verticalAlign:"middle"}}>View Past Application</h3>
            <Link to="/view" style={{bottom:"10%", position:"absolute"}}>
                        View Past Applications
                      </Link>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={NewApplicationImage} style={{height:"100px", width:"100px"}} centered />
      </Grid.Column>
      <Grid.Column width={13}>
      <h3 style={{verticalAlign:"middle"}}>View Past Application</h3>
            <Link to="/view" style={{bottom:"10%", position:"absolute"}}>
                        New Application
                      </Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const BreadcrumbHome = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
  </Breadcrumb>
)

//
export default MainPage;