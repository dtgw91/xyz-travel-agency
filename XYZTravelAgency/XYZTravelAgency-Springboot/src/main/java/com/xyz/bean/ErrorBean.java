package com.xyz.bean;

public class ErrorBean {

    private String errorMessage;

    public ErrorBean(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public String toString() {
        return "ErrorBean{" +
                "errorMessage='" + errorMessage + '\'' +
                '}';
    }
}
