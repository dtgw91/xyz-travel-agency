import React from 'react';
import './App.css';
import { Accordion, Breadcrumb, Button, Container, Grid, Modal, Table} from 'semantic-ui-react'
import { UserConsumer } from './UserContext';
import Utils from '../utils/Utils';

class View extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, modalApplication: {}, show: this.show, close: this.close, pastApp: {}};
  }


  render() {
    return (
    <div style={{margin:"10px 20%"}}>
        <BreadcrumbView/>
    <UserConsumer>
        {
            ({user}) => (
            <h1 >View Past Records</h1>)
        }
     </UserConsumer>
     <TableExampleStructured parentState={this.state} />
</div>
      );
  }

  componentDidMount() {
    this.fetchData();
  }

    fetchData() {

      fetch("http://localhost:8080/getPastApplications.json?userName=" + localStorage.getItem('userName'))
        .then(response => response.json())
        .then(resp =>
          this.setData(resp)
        )
        // Catch any errors we hit and update the app
        .catch(error => this.setState({ error, isLoading: false }));
    }

    setData = (json) => {
        this.setState({pastApp: json});
    }

    show = (json) => {
    this.setState({ modalApplication: json})
    this.setState({ open: true })
    }
    close = () => this.setState({ open: false })


}

const TableExampleStructured = ({parentState}) => (
<div style={{overflow:"auto"}}>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='1'>Application Id</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Submitted On</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Employee Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Total Cost</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Application Status</Table.HeaderCell>
        <Table.HeaderCell rowSpan='1'>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    <PopulateTruncTable upperState={parentState} />
    </Table.Body>
  </Table>
  </div>
)




 const PopulateTruncTable = ({upperState}) =>
        {
        var data = upperState.pastApp;
        var table = [];
            if(!Utils.isEmpty(data) && data.applications.length > 0){
            (data.applications).forEach(function(json) {
            table.push (
              <Table.Row>
                <Table.Cell>{json.id}</Table.Cell>
                <Table.Cell singleLine>{json.submittedDate}</Table.Cell>
                <Table.Cell>{json.employeeName}</Table.Cell>
                <Table.Cell>${json.totalCost}</Table.Cell>
                <Table.Cell>{json.status}</Table.Cell>
                <Table.Cell textAlign="center">
                    <Button onClick={() => upperState.show(json)}>View</Button>
                </Table.Cell>

            </Table.Row>


            );
          })
          }
          var json=upperState.modalApplication;
            table.push(
            <Modal size="large" dimmer="blurring" open={upperState.open} onClose={upperState.close} style={{minHeight:"100px", minWidth:"100px", overflow:"auto"}}>
                                                    <Modal.Header>Application Details for Application Id {json.id}</Modal.Header>
                                                    <Modal.Content>
                                                        <Grid divided='vertically'>
                                                          <Grid.Row columns={4}>
                                                            <Grid.Column>
                                                              <Table style={{border:"none"}}>
                                                                  <Table.Body>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Company Name</Table.Cell>
                                                                      <Table.Cell>{json.companyName}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Company Address</Table.Cell>
                                                                      <Table.Cell>{json.companyAddress}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>UEN</Table.Cell>
                                                                      <Table.Cell>{json.uen}</Table.Cell>
                                                                    </Table.Row>
                                                                  </Table.Body>
                                                                </Table>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                              <Table style={{border:"none"}}>
                                                                  <Table.Body>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Applicant Name</Table.Cell>
                                                                      <Table.Cell>{json.applicantName}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Applicant Contact</Table.Cell>
                                                                      <Table.Cell>{json.applicantContact}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Applicant Email</Table.Cell>
                                                                      <Table.Cell>{json.applicantEmail}</Table.Cell>
                                                                    </Table.Row>
                                                                  </Table.Body>
                                                                </Table>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                              <Table style={{border:"none"}}>
                                                                  <Table.Body>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Employee Name</Table.Cell>
                                                                      <Table.Cell>{json.employeeName}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>NRIC/FIN</Table.Cell>
                                                                      <Table.Cell>{json.nationalIdentificationNumber}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Passport No.</Table.Cell>
                                                                      <Table.Cell>{json.passportNo}</Table.Cell>
                                                                    </Table.Row>
                                                                  </Table.Body>
                                                                </Table>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                              <Table style={{border:"none"}}>
                                                                  <Table.Body>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Country of Origin Name</Table.Cell>
                                                                      <Table.Cell>{json.countryOfOrigin}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Country of Destination</Table.Cell>
                                                                      <Table.Cell>{json.countryOfDestination}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Travel Date</Table.Cell>
                                                                      <Table.Cell>{json.fromDate} to {json.toDate}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Total Cost</Table.Cell>
                                                                      <Table.Cell>${json.totalCost}</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                      <Table.Cell collapsing>
                                                                      </Table.Cell>
                                                                      <Table.Cell>Application Status</Table.Cell>
                                                                      <Table.Cell>{json.status}</Table.Cell>
                                                                    </Table.Row>
                                                                  </Table.Body>
                                                                </Table>
                                                            </Grid.Column>
                                                          </Grid.Row>
                                                        </Grid>
                                                    </Modal.Content>
                                                    <Modal.Actions>
                                                      <Button
                                                        onClick={upperState.close}
                                                        labelPosition='right'
                                                        content='Exit'
                                                      />
                                                    </Modal.Actions>
                                                  </Modal>
            )
            return table;
          };

const BreadcrumbView = () => (
  <Breadcrumb>
    <Breadcrumb.Section link><a href='/main'>Home</a></Breadcrumb.Section>
    <Breadcrumb.Divider />
        <Breadcrumb.Section link>Past Applications</Breadcrumb.Section>
  </Breadcrumb>
)


export default View;