package com.russellprojects.Transaction_tracker.controller;


import com.russellprojects.Transaction_tracker.model.Transaction;
import com.russellprojects.Transaction_tracker.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081/",maxAge=30000)
@RestController
@RequestMapping("/v1")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;
//
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
// Placeholder credentials for testing
        if ("test".equals(username) && "password".equals(password)) {
            return "Login successful!";
        } else {
            return "Login failed!";
        }
    }
    @GetMapping("/transactions")
    public List<Transaction> getTransactions() {
        return transactionService.getAllTransactions();
    }

    // /transactions POST Endpoint - Add a new transaction
    @PostMapping("/transactions")
    public Transaction addTransaction(@RequestBody Transaction transaction) {
        return transactionService.addTransaction(transaction);
    }

}

