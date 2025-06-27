<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Failed</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', Arial, sans-serif; }
        .error-box { background: #fff; padding: 2.5rem 2rem; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); width: 100%; max-width: 350px; text-align: center; }
        .failed { color: #ef4444; font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; }
        a { display: inline-block; margin-top: 1.5rem; color: #3182ce; text-decoration: none; font-weight: 500; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="error-box">
        <div class="failed">&#10060; Login Failed</div>
        <form action="index.html" method="get">
            <button type="submit" style="margin-top:1.5rem; background:#3182ce; color:#fff; border:none; border-radius:6px; padding:0.7rem 1.5rem; font-size:1rem; font-weight:600; cursor:pointer;">Back to Login</button>
        </form>
    </div>
</body>
</html> 