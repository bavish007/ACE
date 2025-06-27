<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String user = (String) session.getAttribute("user");
    String loginTime = (String) session.getAttribute("loginTime");
    if (user == null || loginTime == null) {
        response.sendRedirect("index.html?timeout=1");
        return;
    }
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', Arial, sans-serif; }
        .welcome-box { background: #fff; padding: 2.5rem 2rem; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); width: 100%; max-width: 370px; text-align: center; }
        .banner { background: linear-gradient(90deg, #3182ce 0%, #2563eb 100%); color: #fff; font-size: 1.5rem; font-weight: 700; padding: 1rem 0.5rem; border-radius: 8px 8px 0 0; margin-bottom: 1.5rem; letter-spacing: 1px; }
        .user { color: #2563eb; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.7rem; }
        .time { color: #4a5568; font-size: 1rem; margin-bottom: 1.2rem; }
        a { display: inline-block; margin-top: 1.5rem; color: #3182ce; text-decoration: none; font-weight: 500; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="welcome-box">
        <div class="banner">Welcome to NeoShop!</div>
        <div class="user">Logged in as: <%= user %></div>
        <div class="time">Login time: <%= loginTime %></div>
        <a href="LogoutServlet">Logout</a>
    </div>
</body>
</html> 