import java.util.Scanner;

public class Factorial{
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter number to find factorial:");
        int num = scan.nextInt();
        long factorial = factorial(num);
        System.out.println("Factorial of " + num + " = " + factorial);
        scan.close();
    }
    public static long factorial(int num)
    {
        if (num >= 1)
            return num * factorial(num - 1);
        else
            return 1;
    }
}
