package com.russellprojects.Transaction_tracker.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;



@NoArgsConstructor


public class Transaction {



    private Date date;
    private double amount;
    private String description;
    public Date getDate() {
        return date;
    }

    public double getAmount() {
        return amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Transaction(Date date, double amount, String description) {
       this.date = date;
        this.amount = amount;
        this.description = description;
    }
}
