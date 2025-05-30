﻿namespace Server.Loan.Contracts.Features.Loan.Common;

public record LoanDto(string Id,
                        int LoanAmount,
                        int LoanTerm,
                        int LoanPurpose,
                        string BankAccountNumber,
                        string BankAccountType,
                        string BankName,
                        string FullName,
                        string Email,
                        DateTime DateOfBirth,
                        int LoanStatus);
