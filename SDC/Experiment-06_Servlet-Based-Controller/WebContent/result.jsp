<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Result</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background: #f8fafc;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Segoe UI', Arial, sans-serif;
        }
        .result-box {
            background: #fff;
            padding: 2.5rem 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            width: 100%;
            max-width: 350px;
            text-align: center;
        }
        .success {
            color: #22c55e;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .failed {
            color: #ef4444;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        a {
            display: inline-block;
            margin-top: 1.5rem;
            color: #3182ce;
            text-decoration: none;
            font-weight: 500;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="result-box">
        <% String status = (String) request.getAttribute("status"); %>
        <% if ("Success".equals(status)) { %>
            <div class="icon">✔️</div>
            <div class="success">Login Successful</div>
        <% } else { %>
            <div class="icon">❌</div>
            <div class="failed">Login Failed</div>
        <% } %>
        <a href="index.html">Back to Login</a>
    </div>
</body>
</html> 