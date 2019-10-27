package com.xyz.validator;

import com.xyz.bean.ErrorBean;
import com.xyz.bean.TravelApplicationRequestBean;
import com.xyz.util.Utils;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class TravelApplicationRequestValidator {


    public List<ErrorBean> validate(TravelApplicationRequestBean travelApplicationRequestBean) {

        List<ErrorBean> errorBeans = new ArrayList<>();

        try {
            Date fromDate = Utils.dateStringToDate(travelApplicationRequestBean.getFromDate());
            Date toDate = Utils.dateStringToDate(travelApplicationRequestBean.getToDate());
            if (fromDate.after(toDate)) {
                errorBeans.add(new ErrorBean("fromDate cannot be later than toDate"));
            }

        } catch (ParseException e){
            e.printStackTrace();
            errorBeans.add(new ErrorBean("fromDate and toDate should be in 'dd-MM-yyyy' format"));
        }
        return errorBeans;
    }

}
