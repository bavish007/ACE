import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ShoppingController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String status;
        if ("admin@neoshop.com".equals(email) && "admin123".equals(password)) {
            status = "Success";
        } else {
            status = "Failed";
        }
        request.setAttribute("status", status);
        RequestDispatcher rd = request.getRequestDispatcher("result.jsp");
        rd.forward(request, response);
    }
} 