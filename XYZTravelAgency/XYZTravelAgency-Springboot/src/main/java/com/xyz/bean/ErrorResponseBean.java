package com.xyz.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;
import java.util.List;

public class ErrorResponseBean {

    @JsonProperty("errors")
    private List<ErrorBean> errorBeanList;

    public ErrorResponseBean() {
    }

    public ErrorResponseBean(String errorMessage) {
        this.errorBeanList = Arrays.asList(new ErrorBean(errorMessage));
    }


    public List<ErrorBean> getErrorBeanList() {
        return errorBeanList;
    }

    public void setErrorBeanList(List<ErrorBean> errorBeanList) {
        this.errorBeanList = errorBeanList;
    }

    @Override
    public String toString() {
        return "ErrorResponseBean{" +
                "errorBeanList=" + errorBeanList +
                '}';
    }
}
