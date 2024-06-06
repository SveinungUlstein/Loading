package database;
import java.sql.*;

public class DBconnector {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/loading";
        String user = "root";
        String password = "1234";
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection(url,user,password);

            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("SELECT * FROM loading.choices");

            while (resultSet.next()){
                System.out.println(resultSet.getInt(1)+". "+resultSet.getInt(2)+"."+resultSet.getString(3));
            }
            connection.close();
        }
        catch (Exception e){
            System.out.println(e);
        }
    }
}