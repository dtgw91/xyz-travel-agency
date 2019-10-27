package com.xyz.controller;

import com.xyz.bean.*;
import com.xyz.service.TravelApplicationService;
import com.xyz.validator.TravelApplicationRequestValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;


@RestController
public class TravelApplicationController {

    @Autowired
    private TravelApplicationService travelApplicationService;

    @Autowired
    private TravelApplicationRequestValidator travelApplicationRequestValidator;

    private ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private Validator validator = factory.getValidator();

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/getPastApplications.json")
    public ResponseEntity getPastApplications(@RequestParam(value="userName") String userName) {

        try {
            List<TravelApplicationResponseBean> pastApplications = travelApplicationService.getPastApplications(userName);
            PastApplicationsResponseBean responseBean = new PastApplicationsResponseBean();
            responseBean.setTravelApplicationResponseBeanList(pastApplications);
            return new ResponseEntity(responseBean, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(new ErrorResponseBean("Failed to get past applications"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(path="/createNewApplication.json",method=POST)
    public ResponseEntity<Object> createNewApplication(@RequestBody TravelApplicationRequestBean travelApplicationRequestBean) {

        //request validation error
        Set<ConstraintViolation<TravelApplicationRequestBean>> violations = validator.validate(travelApplicationRequestBean);
        if (violations == null && violations.size() != 0){
            ErrorResponseBean errorResponseBean = new ErrorResponseBean();
            List<ErrorBean> errorBeans = new ArrayList<>();
            violations.forEach(violation -> errorBeans.add(new ErrorBean(violation.getMessage())));
            errorResponseBean.setErrorBeanList(errorBeans);
            return new ResponseEntity(errorResponseBean,HttpStatus.INTERNAL_SERVER_ERROR);
        }

        //custom validation error
        List<ErrorBean> validationErrorList = travelApplicationRequestValidator.validate(travelApplicationRequestBean);
        if (validationErrorList.size() > 0){
            ErrorResponseBean errorResponseBean = new ErrorResponseBean();
            errorResponseBean.setErrorBeanList(validationErrorList);
            return new ResponseEntity(errorResponseBean,HttpStatus.INTERNAL_SERVER_ERROR);
        }


        ErrorBean errorBean = travelApplicationService.createNewApplication(travelApplicationRequestBean);
        if (errorBean == null){
         return ResponseEntity.ok("Success");
        } else {
            return new ResponseEntity(new ErrorResponseBean(errorBean.getErrorMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
