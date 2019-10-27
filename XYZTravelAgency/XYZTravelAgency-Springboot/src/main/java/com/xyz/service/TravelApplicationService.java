package com.xyz.service;

import com.xyz.bean.ErrorBean;
import com.xyz.bean.TravelApplicationRequestBean;
import com.xyz.bean.TravelApplicationResponseBean;
import com.xyz.entity.TravelApplicationEntity;
import com.xyz.repository.TravelApplicationEntityRepository;
import com.xyz.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
public class TravelApplicationService {

    @Autowired
    private TravelApplicationEntityRepository travelApplicationEntityRepository;

    @Autowired
    private Utils utils;

    public List<TravelApplicationResponseBean> getPastApplications(String userName){
        List<TravelApplicationEntity> travelApplicationEntities = travelApplicationEntityRepository.findByCreatedByOrderByModifiedAtDesc(userName);
        return transformTravelApplicationResponseBean(travelApplicationEntities);
    }


    public ErrorBean createNewApplication(TravelApplicationRequestBean travelApplicationRequestBean) {

        try {
            TravelApplicationEntity travelApplicationEntity = transformNewTravelApplication(travelApplicationRequestBean);
            travelApplicationEntityRepository.save(travelApplicationEntity);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ErrorBean("Error while trying to create new Travel Application");
        }
        return null;
    }


    private List<TravelApplicationResponseBean> transformTravelApplicationResponseBean(Iterable<TravelApplicationEntity> travelApplicationEntities) {

        List<TravelApplicationResponseBean> travelApplicationResponseBeanList = new ArrayList<>();

        for (TravelApplicationEntity travelApplicationEntity : travelApplicationEntities){
            TravelApplicationResponseBean travelApplicationResponseBean = new TravelApplicationResponseBean();
            travelApplicationResponseBean.setId(travelApplicationEntity.getId());
            travelApplicationResponseBean.setCompanyName(travelApplicationEntity.getCompanyName());
            travelApplicationResponseBean.setCompanyAddress(travelApplicationEntity.getCompanyAddress());
            travelApplicationResponseBean.setUen(travelApplicationEntity.getUen());
            travelApplicationResponseBean.setApplicantName(travelApplicationEntity.getApplicantName());
            travelApplicationResponseBean.setApplicantContact(travelApplicationEntity.getApplicantContact());
            travelApplicationResponseBean.setApplicantEmail(travelApplicationEntity.getApplicantEmail());
            travelApplicationResponseBean.setEmployeeName(travelApplicationEntity.getEmployeeName());
            travelApplicationResponseBean.setNationalIdentificationNumber(travelApplicationEntity.getNationalIdentificationNumber());
            travelApplicationResponseBean.setPassportNo(travelApplicationEntity.getPassportNo());
            travelApplicationResponseBean.setCountryOfOrigin(travelApplicationEntity.getCountryOfOrigin());
            travelApplicationResponseBean.setCountryOfDestination(travelApplicationEntity.getCountryOfDestination());
            travelApplicationResponseBean.setFromDate(utils.dateToDateString(travelApplicationEntity.getFromDate()));
            travelApplicationResponseBean.setToDate(utils.dateToDateString(travelApplicationEntity.getToDate()));
            travelApplicationResponseBean.setTotalCost(travelApplicationEntity.getTotalCost());
            travelApplicationResponseBean.setStatus(travelApplicationEntity.getStatus());
            travelApplicationResponseBean.setSubmittedDate(utils.dateToDateString(travelApplicationEntity.getCreatedAt()));
            travelApplicationResponseBeanList.add(travelApplicationResponseBean);
        }

        return travelApplicationResponseBeanList;
    }

    private TravelApplicationEntity transformNewTravelApplication(TravelApplicationRequestBean travelApplicationRequestBean) throws Exception {

        TravelApplicationEntity travelApplicationEntity = new TravelApplicationEntity();

        Date currentDate = new Date();

        try {
            travelApplicationEntity.setCreatedAt(currentDate);
            travelApplicationEntity.setCreatedBy(travelApplicationRequestBean.getUserName());
            travelApplicationEntity.setModifiedAt(currentDate);
            travelApplicationEntity.setModifiedBy(travelApplicationRequestBean.getUserName());
            travelApplicationEntity.setCompanyName(travelApplicationRequestBean.getCompanyName());
            travelApplicationEntity.setCompanyAddress(travelApplicationRequestBean.getCompanyAddress());
            travelApplicationEntity.setUen(travelApplicationRequestBean.getUen());
            travelApplicationEntity.setApplicantName(travelApplicationRequestBean.getApplicantName());
            travelApplicationEntity.setApplicantContact(travelApplicationRequestBean.getApplicantContact());
            travelApplicationEntity.setApplicantEmail(travelApplicationRequestBean.getApplicantEmail());
            travelApplicationEntity.setEmployeeName(travelApplicationRequestBean.getEmployeeName());
            travelApplicationEntity.setNationalIdentificationNumber(travelApplicationRequestBean.getNationalIdentificationNumber());
            travelApplicationEntity.setPassportNo(travelApplicationRequestBean.getPassportNo());
            travelApplicationEntity.setCountryOfOrigin(travelApplicationRequestBean.getCountryOfOrigin());
            travelApplicationEntity.setCountryOfDestination(travelApplicationRequestBean.getCountryOfDestination());
            travelApplicationEntity.setFromDate(utils.dateStringToDate(travelApplicationRequestBean.getFromDate()));
            travelApplicationEntity.setToDate(utils.dateStringToDate(travelApplicationRequestBean.getToDate()));
            travelApplicationEntity.setTotalCost(1000);
            travelApplicationEntity.setStatus("NEW");
        }
        catch (Exception e){
            throw e;
        }

        return travelApplicationEntity;
    }
}
