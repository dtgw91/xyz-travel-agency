package com.xyz.bean;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.Pattern;
import java.util.Date;

public class TravelApplicationRequestBean {

    @NotBlank(message = "userName is mandatory")
    private String userName;
    @NotBlank(message = "companyName is mandatory")
    private String companyName;
    @NotBlank(message = "companyAddress is mandatory")
    private String companyAddress;

    private String uen;
    @NotBlank(message = "applicantName is mandatory")
    private String applicantName;
    @NotBlank(message = "applicantContact is mandatory")
    private String applicantContact;
    @NotBlank(message = "applicantEmail is mandatory")
    @Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$")
    private String applicantEmail;
    @NotBlank(message = "employeeName is mandatory")
    private String employeeName;

    private String nationalIdentificationNumber;
    @NotBlank(message = "passportNo is mandatory")
    private String passportNo;
    @NotBlank(message = "countryOfOrigin is mandatory")
    private String countryOfOrigin;
    @NotBlank(message = "countryOfDestination is mandatory")
    private String countryOfDestination;
    @NotBlank(message = "fromDate is mandatory")
    private String fromDate;
    @NotBlank(message = "toDate is mandatory")
    private String toDate;


    public TravelApplicationRequestBean() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public String getUen() {
        return uen;
    }

    public void setUen(String uen) {
        this.uen = uen;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public String getApplicantContact() {
        return applicantContact;
    }

    public void setApplicantContact(String applicantContact) {
        this.applicantContact = applicantContact;
    }

    public String getApplicantEmail() {
        return applicantEmail;
    }

    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getNationalIdentificationNumber() {
        return nationalIdentificationNumber;
    }

    public void setNationalIdentificationNumber(String nationalIdentificationNumber) {
        this.nationalIdentificationNumber = nationalIdentificationNumber;
    }

    public String getPassportNo() {
        return passportNo;
    }

    public void setPassportNo(String passportNo) {
        this.passportNo = passportNo;
    }

    public String getCountryOfOrigin() {
        return countryOfOrigin;
    }

    public void setCountryOfOrigin(String countryOfOrigin) {
        this.countryOfOrigin = countryOfOrigin;
    }

    public String getCountryOfDestination() {
        return countryOfDestination;
    }

    public void setCountryOfDestination(String countryOfDestination) {
        this.countryOfDestination = countryOfDestination;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    @Override
    public String toString() {
        return "TravelApplicationResponseBean{" +
                ", companyName='" + companyName + '\'' +
                ", companyAddress='" + companyAddress + '\'' +
                ", uen='" + uen + '\'' +
                ", applicantName='" + applicantName + '\'' +
                ", applicantContact='" + applicantContact + '\'' +
                ", applicantEmail='" + applicantEmail + '\'' +
                ", employeeName='" + employeeName + '\'' +
                ", nationalIdentificationNumber='" + nationalIdentificationNumber + '\'' +
                ", passportNo='" + passportNo + '\'' +
                ", countryOfOrigin='" + countryOfOrigin + '\'' +
                ", countryOfDestination='" + countryOfDestination + '\'' +
                ", fromDate=" + fromDate +
                ", toDate=" + toDate +
                '}';
    }
}