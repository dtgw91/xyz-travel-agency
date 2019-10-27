import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { Breadcrumb, Button, Divider, Form, List, Message, Modal } from 'semantic-ui-react'
import { UserConsumer } from './UserContext';
import Utils from '../utils/Utils';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

class View extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyAddress: "",
      uen: "",
      applicantName: "",
      applicantContact: "",
      applicantEmail: "",
      employeeName: "",
      nricFin: "",
      passportNo: "",
      countryOfOrigin: "",
      countryOfDestination: "",
      fromDate: "",
      toDate: "",
      companyNameError: false,
      companyAddressError: false,
      uenError: false,
      applicationNameError: false,
      applicationContactError: false,
      applicationEmailError: false,
      employeeNameError: false,
      passportNoError: false,
      countryOfOriginError: false,
      countryOfDestinationError: false,
      fromDateError: false,
      toDateError: false,
      stage: "input",
      open: false,
      show: this.show
      };

          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleContinue = this.handleContinue.bind(this);
          this.handleBackButton = this.handleBackButton.bind(this);
          this.uenRegexCheck = this.uenRegexCheck.bind(this);
          this.emailRegexCheck = this.emailRegexCheck.bind(this);
          this.updateTravelDate = this.updateTravelDate.bind(this);
          this.closeModal = this.closeModal.bind(this);
          this.show = this.show.bind(this);
        }

        handleInputChange(event) {
          const target = event.target;
          const value = target.value;
          const name = target.name;

          this.setState({
            [name]: value
          });
        }

        updateTravelDate(dates) {
        let fromDate = dates[0];
        let toDate = dates[1];
        let fromYear = fromDate.getFullYear();
        let fromMonth = fromDate.getMonth() + 1;
        let fromDay = fromDate.getDate();
        let fromDateString = "".concat(fromYear,"-",fromMonth,"-",fromDay);
        var toDateString
        if(toDate){
        let toYear = toDate.getFullYear();
        let toMonth = toDate.getMonth() + 1;
        let toDay = toDate.getDate();
        toDateString = "".concat(toYear,"-",toMonth,"-",toDay);
        } else {
            toDateString = "";
        }
        this.setState({
                    "fromDate": fromDateString,
                    "toDate": toDateString
                  });
        }



        handleContinue(event) {
        var goToNext = true;
          if(Utils.isEmptyOrSpaces(this.state.companyName)){
            this.setState({companyNameError: true})
            goToNext = false;
          } else {
            this.setState({companyNameError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.companyAddress)){
            this.setState({companyAddressError: true})
            goToNext = false;
          } else {
            this.setState({companyAddressError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.uen) || !this.uenRegexCheck(this.state.uen)){
            this.setState({uenError: true})
            goToNext = false;
          } else {
            this.setState({uenError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.applicantName)){
            this.setState({applicationNameError: true})
            goToNext = false;
          } else {
            this.setState({applicationNameError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.applicantContact)){
            this.setState({applicationContactError: true})
            goToNext = false;
          } else {
            this.setState({applicationContactError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.applicantEmail) || !this.emailRegexCheck(this.state.applicantEmail)){
            this.setState({applicationEmailError: true})
            goToNext = false;
          } else {
            this.setState({applicationEmailError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.employeeName)){
            this.setState({employeeNameError: true})
            goToNext = false;
          } else {
            this.setState({employeeNameError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.passportNo)){
            this.setState({passportNoError: true})
            goToNext = false;
          } else {
            this.setState({passportNoError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.countryOfOrigin)){
            this.setState({countryOfOriginError: true})
            goToNext = false;
          } else {
            this.setState({countryOfOriginError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.countryOfDestination)){
            this.setState({countryOfDestinationError: true})
            goToNext = false;
          } else {
            this.setState({countryOfDestinationError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.fromDate)){
            this.setState({fromDateError: true})
            goToNext = false;
          } else {
            this.setState({fromDateError: false})
          }
          if(Utils.isEmptyOrSpaces(this.state.toDate)){
            this.setState({toDateError: true})
            goToNext = false;
          } else {
            this.setState({toDateError: false})
          }
            if (goToNext){
            this.setState({stage: "review"})
            } else {
                window.scrollTo(0, 0)
            }
        }

        handleBackButton = () => {
            this.setState({stage: "input"})
        }

        handleSubmitButton = () => {
            var postRequest = {
                userName: localStorage.getItem("userName"),
                companyName: this.state.companyName,
                companyAddress: this.state.companyAddress,
                uen: this.state.uen,
                applicantName: this.state.applicantName,
                applicantContact: this.state.applicantContact,
                applicantEmail: this.state.applicantEmail,
                employeeName: this.state.employeeName,
                nationalIdentificationNumber: this.state.nricFin,
                passportNo: this.state.passportNo,
                countryOfOrigin: this.state.countryOfOrigin,
                countryOfDestination: this.state.countryOfDestination,
                fromDate: this.state.fromDate,
                toDate: this.state.toDate

            }
            let fetchData = {
                method: 'POST',
                body: JSON.stringify(postRequest),
                headers: {'Content-Type': 'application/json'},
                mode: 'cors',
                cache: 'no-cache'
            }
            this.show();
            fetch("http://localhost:8080/createNewApplication.json", fetchData)
        }

            show = () => {
            this.setState({ open: true })
            }

        closeModal = () => {
            this.setState({open : false})
        }

  render() {
        let newApp;
            if(this.state.stage==='input'){
              newApp = <NewApplication compState={this.state}  handleInputChange={this.handleInputChange} handleContinue={this.handleContinue} updateTravelDate={this.updateTravelDate}/>
                  } else if (this.state.stage==='review'){
               newApp =   <ReviewApplication revState={this.state} handleBackButton={this.handleBackButton} handleSubmitButton={this.handleSubmitButton}/>
                  }
    return (
    <div style={{margin:"10px 20%"}}>
        <BreadcrumbNewApp/>
    <UserConsumer>
        {
            ({user}) => (
            <div>
            <h1 >New Application</h1>
                {newApp}
            </div>
        )}
     </UserConsumer>
     <ModalSuccess modalState={this.state} closeModal={this.closeModal}/>
</div>
      );
}

    uenRegexCheck = (str) => {
       var first = /^[0-9]{8}[A-Z]$/.test(str);
       var  second = /^[0-9]{9}[A-Z]$/.test(str) ;
       var third = /^[RST][0-9]{2}[A-Z][A-Z0-9][0-9]{4}[A-Z]$/.test(str);
        return first || second || third;
    }

    emailRegexCheck = (str) => {
        return /^[A-Za-z0-9+_.-]+@(.+)$/.test(str);
    }
}

const NewApplication = ({compState, handleInputChange, handleContinue, updateTravelDate}) => (
  <div style={{width:"100%", margin:"5% 0%", verticalAlign:"middle", top:"20px", position:"relative", overflow:"auto", height:"100%"}}>
      <Form size="large" key="large"
        error = {( compState.companyNameError || compState.companyAddressError || compState.uenError || compState.applicationNameError
        || compState.applicationContactError || compState.applicationEmailError || compState.employeeNameError || compState.passportNoError
        || compState.countryOfOriginError || compState.countryOfDestinationError || compState.fromDateError || compState.toDateError
        )}
      >
            <Message
                error
                header='Some fields are invalid'
                list={
                    generateErrorList(compState)
                }
             />
          <Form.Field
            name='companyName'
            label='Company Name'
            control='input'
            required
            placeholder='Company Name'
            onChange={handleInputChange}
            value={compState.companyName}
            error={compState.companyNameError}
          />
          <Divider hidden />
          <Form.Field
            name="companyAddress"
            label='Company Address'
            control='input'
            required
            placeholder='Company Address'
            onChange={handleInputChange}
            value={compState.companyAddress}
            error={compState.companyAddressError}
          />
          <Divider hidden />
          <Form.Field
            name="uen"
            label='UEN'
            control='input'
            required
            placeholder='UEN'
            onChange={handleInputChange}
            value={compState.uen}
            error={compState.uenError}
          />
          <Divider hidden />
          <Form.Field
            name="applicantName"
            label='Applicant Name'
            control='input'
            required
            placeholder='Applicant Name'
            onChange={handleInputChange}
            value={compState.applicantName}
            error={compState.applicationNameError}
          />
          <Divider hidden />
          <Form.Field
            name="applicantContact"
            label='Applicant Contact'
            control='input'
            required
            placeholder='Applicant Contact'
            onChange={handleInputChange}
            value={compState.applicantContact}
            error={compState.applicationContactError}
          />
          <Divider hidden />
          <Form.Field
            name="applicantEmail"
            label='Applicant Email'
            control='input'
            required
            placeholder='Applicant Email'
            onChange={handleInputChange}
            value={compState.applicantEmail}
            error={compState.applicationEmailError}
          />
          <Divider hidden />
          <Form.Field
            name="employeeName"
            label='Employee Name'
            control='input'
            required
            placeholder='Employee Name'
            onChange={handleInputChange}
            value={compState.employeeName}
            error={compState.employeeNameError}
          />
          <Divider hidden />
          <Form.Field
            name="nricFin"
            label='NRIC or FIN'
            control='input'
            placeholder='NRIC or FIN'
            onChange={handleInputChange}
            value={compState.nricFin}
          />
          <Divider hidden />
          <Form.Field
            name="passportNo"
            label='Passport No.'
            control='input'
            required
            placeholder='Passport No.'
            onChange={handleInputChange}
            value={compState.passportNo}
            error={compState.passportNoError}
          />
          <Divider hidden />
          <Form.Field
            name="countryOfOrigin"
            label='Country of Origin'
            control='input'
            required
            placeholder='Country of Origin'
            onChange={handleInputChange}
            value={compState.countryOfOrigin}
            error={compState.countryOfOriginError}
          />
          <Divider hidden />
          <Form.Field
            name="countryOfDestination"
            label='Country of Destination'
            control='input'
            required
            placeholder='Country of Destination'
            onChange={handleInputChange}
            value={compState.countryOfDestination}
            error={compState.countryOfDestinationError}
          />
          <Divider hidden />
          <div>
          <label style={{fontWeight: "bold", display:"block"}}>Travel Dates
            <span class="mandatory"> *</span>
          </label>
          <SemanticDatepicker class="red-error"  style={{display:"block"}} onDateChange={updateTravelDate} type="range"/>
          </div>
          <Button type='submit' floated="right" onClick={handleContinue}>Continue</Button>
      </Form>
  </div>
)

const ReviewApplication = ({revState, handleBackButton, handleSubmitButton}) => (
    <div style = {{width:"100%", margin:"5% 0%", verticalAlign:"middle", top:"20px", position:"relative", overflow:"auto", height:"100%"}}>
    <h3>Please review your application details and click the submit button if there are no changes required</h3>
    <ReviewList listState={revState}/>
    <Button type='submit' floated="left" onClick={handleBackButton}>Back</Button>
    <Button type='submit' floated="right" onClick={handleSubmitButton}>Submit</Button>
    </div>
)

const ReviewList = ({listState}) => (
 <List size="large"  divided verticalAlign='middle' relaxed='very'>
    <List.Item>
      <List.Header>Company Name</List.Header>
      {listState.companyName}
    </List.Item>
    <List.Item>
      <List.Header>Company Address</List.Header>
      {listState.companyAddress}
    </List.Item>
    <List.Item>
      <List.Header>UEN</List.Header>
      {listState.uen}
    </List.Item>
    <List.Item>
      <List.Header>Applicant Name</List.Header>
      {listState.applicantName}
    </List.Item>
    <List.Item>
        <List.Header>Applicant Contact</List.Header>
      {listState.applicantContact}
    </List.Item>
    <List.Item>
        <List.Header>Applicant Email</List.Header>
      {listState.applicantEmail}
    </List.Item>
    <List.Item>
        <List.Header>Employee Name</List.Header>
      {listState.employeeName}
    </List.Item>
    <List.Item>
        <List.Header>NRIC/FIN</List.Header>
      {listState.nricFin}
    </List.Item>
    <List.Item>
        <List.Header>Passport No.</List.Header>
      {listState.passportNo}
    </List.Item>
    <List.Item>
        <List.Header>Country of Origin</List.Header>
      {listState.countryOfOrigin}
    </List.Item>
    <List.Item>
        <List.Header>Country of Destination</List.Header>
      {listState.countryOfDestination}
    </List.Item>
    <List.Item>
        <List.Header>Travel Dates</List.Header>
      {listState.fromDate} to {listState.toDate}
    </List.Item>
    <List.Item>
        <List.Header>Total Cost</List.Header>
      $1000
    </List.Item>


  </List>
)



const generateErrorList = (state) => {
    var list = [];
    if (state.companyNameError){
        list.push("Company Name cannot be blank")
    }
    if (state.companyAddressError){
        list.push("Company Address cannot be blank")
    }
    if (state.uenError){
        list.push("UEN format provided is invalid")
    }
    if (state.applicationNameError){
        list.push("Applicant Name cannot be blank")
    }
    if (state.applicationContactError){
        list.push("Applicant Contact cannot be blank")
    }
    if (state.applicationEmailError){
        list.push("Applicant Email format is invalid")
    }
    if (state.employeeNameError){
        list.push("Employee Name cannot be blank")
    }
    if (state.passportNoError){
        list.push("Passport No. cannot be blank")
    }
    if (state.countryOfOriginError){
        list.push("Country of Origin cannot be blank")
    }
    if (state.countryOfDestinationError){
        list.push("Country of Destination cannot be blank")
    }
    if (state.fromDateError){
        list.push("From Date cannot be blank")
    }
    if (state.toDateError){
        list.push("To Date cannot be blank")
    }
    return list;
}

const ModalSuccess = ({modalState, closeModal}) => (
  <Modal open={modalState.open} basic size='small' onClose={closeModal}>
    <Modal.Content>
      <p>
            Application has been successfully created!
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='blue' inverted onClick={closeModal} as={Link} to="/main"  >
        Exit
      </Button>
    </Modal.Actions>
  </Modal>
)

const BreadcrumbNewApp = () => (
  <Breadcrumb>
    <Breadcrumb.Section link><a href='/main'>Home</a></Breadcrumb.Section>
    <Breadcrumb.Divider />
        <Breadcrumb.Section link>New Application</Breadcrumb.Section>
  </Breadcrumb>
)


export default View;