package com.russellprojects.Transaction_tracker.service;

import com.russellprojects.Transaction_tracker.model.Transaction;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service

public class TransactionService {


    // In-memory data structure to store transactions
    private List<Transaction> transactions = new ArrayList<>();
    // Constructor to initialize some hardcoded transactions for testing
    public TransactionService() {
        // Add some sample transactions when the service is created
        transactions.add(new Transaction(new Date(), 100.00, "Sample Transaction 1"));
        transactions.add(new Transaction(new Date(), 200.00, "Sample Transaction 2"));
    }
    //method to get all transactions
    public List<Transaction> getAllTransactions() {
        return transactions;
    }

    //Method to add a transaction
    public Transaction addTransaction(Transaction transaction) {
        transactions.add(transaction);
        return transaction;
    }

}
