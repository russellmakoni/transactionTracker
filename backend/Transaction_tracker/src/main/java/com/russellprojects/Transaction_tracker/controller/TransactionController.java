package com.russellprojects.Transaction_tracker.controller;


import com.russellprojects.Transaction_tracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;


}
