<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
if(session.getAttribute("uid")==null)
{
	response.sendRedirect("admin.jsp");
}
%>

<%=session.getAttribute("uid")%>
<h1>welcome</h1>
<br>
<br>
<a href="logout.jsp">logout</a>
</body>
</html>