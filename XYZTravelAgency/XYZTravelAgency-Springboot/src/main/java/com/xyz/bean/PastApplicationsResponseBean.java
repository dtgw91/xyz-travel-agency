package com.xyz.bean;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import org.springframework.context.annotation.Bean;

import java.util.List;

public class PastApplicationsResponseBean {

    @JsonProperty("applications")
    private List<TravelApplicationResponseBean> travelApplicationResponseBeanList;

    public List<TravelApplicationResponseBean> getTravelApplicationResponseBeanList() {
        return travelApplicationResponseBeanList;
    }

    public void setTravelApplicationResponseBeanList(List<TravelApplicationResponseBean> travelApplicationResponseBeanList) {
        this.travelApplicationResponseBeanList = travelApplicationResponseBeanList;
    }

    @Override
    public String toString() {
        return "PastApplicationsResponseBean{" +
                "travelApplicationResponseBeanList=" + travelApplicationResponseBeanList +
                '}';
    }
}
