package com.xyz.bean;

import java.util.Date;

public class TravelApplicationResponseBean {

    private int id;
    private String companyName;
    private String companyAddress;
    private String uen;
    private String applicantName;
    private String applicantContact;
    private String applicantEmail;
    private String employeeName;
    private String nationalIdentificationNumber;
    private String passportNo;
    private String countryOfOrigin;
    private String countryOfDestination;
    private String fromDate;
    private String toDate;
    private double totalCost;
    private String status;
    private String submittedDate;


    public TravelApplicationResponseBean() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSubmittedDate() {
        return submittedDate;
    }

    public void setSubmittedDate(String submittedDate) {
        this.submittedDate = submittedDate;
    }

    @Override
    public String toString() {
        return "TravelApplicationResponseBean{" +
                "id=" + id +
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
                ", fromDate='" + fromDate + '\'' +
                ", toDate='" + toDate + '\'' +
                ", totalCost=" + totalCost +
                ", status='" + status + '\'' +
                ", submittedDate='" + submittedDate + '\'' +
                '}';
    }
}
