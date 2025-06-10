function generateReceipt(paymentData) {
    const receiptWindow = window.open('', 'PRINT', 'height=600,width=800');

    receiptWindow.document.write(`
        <html>
        <head>
            <title>Payment Receipt</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                .receipt {
                    background: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    max-width: 600px;
                    margin: auto;
                }
                h1 {
                    color: #004080;
                    text-align: center;
                }
                p {
                    margin: 8px 0;
                }
            </style>
        </head>
        <body>
            <div class="receipt">
                <h1>Payment Receipt</h1>
                <p><strong>Student Name:</strong> ${paymentData.name}</p>
                <p><strong>Matric Number:</strong> ${paymentData.matric}</p>
                <p><strong>Department:</strong> ${paymentData.department}</p>
                <p><strong>Payment Type:</strong> ${paymentData.type}</p>
                <p><strong>Amount Paid:</strong> ₦${paymentData.amount}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p><strong>Transaction ID:</strong> ${paymentData.transactionId}</p>
            </div>
        </body>
        </html>
    `);

    receiptWindow.document.close();
    receiptWindow.focus();
    receiptWindow.print();
    receiptWindow.close();
}

