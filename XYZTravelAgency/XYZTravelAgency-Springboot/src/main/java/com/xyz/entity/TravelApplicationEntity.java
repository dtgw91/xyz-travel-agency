package com.xyz.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TRAVEL_APPLICATION")
public class TravelApplicationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private int id;
    @Column(name = "CREATED_AT")
    private Date createdAt;
    @Column(name = "CREATED_BY")
    private String createdBy;
    @Column(name = "MODIFIED_AT")
    private Date modifiedAt;
    @Column(name = "MODIFIED_BY")
    private String modifiedBy;
    @Column(name = "COMPANY_NAME")
    private String companyName;
    @Column(name = "COMPANY_ADDRESS")
    private String companyAddress;
    @Column(name = "UEN")
    private String uen;
    @Column(name = "APPLICANT_NAME")
    private String applicantName;
    @Column(name = "APPLICANT_CONTACT")
    private String applicantContact;
    @Column(name = "APPLICANT_EMAIL")
    private String applicantEmail;
    @Column(name = "EMPLOYEE_NAME")
    private String employeeName;
    @Column(name = "NRIC_FIN")
    private String nationalIdentificationNumber;
    @Column(name = "PASSPORT_NO")
    private String passportNo;
    @Column(name = "COUNTRY_OF_ORIGIN")
    private String countryOfOrigin;
    @Column(name = "COUNTRY_OF_DESTINATION")
    private String countryOfDestination;
    @Column(name = "FROM_DATE")
    private Date fromDate;
    @Column(name = "TO_DATE")
    private Date toDate;
    @Column(name = "TOTAL_COST")
    private double totalCost;
    @Column(name = "STATUS")
    private String status;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
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

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
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

    @Override
    public String toString() {
        return "TravelApplicationEntity{" +
                "id=" + id +
                ", createdAt=" + createdAt +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedAt=" + modifiedAt +
                ", modifiedBy='" + modifiedBy + '\'' +
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
                ", totalCost='" + totalCost + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
