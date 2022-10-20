import java.util.Scanner;

public class PalindromeCheck {
    static int reverse(int n, int temp)
    {

        if (n == 0)
            return temp;
        temp = (temp * 10) + (n % 10);
        return reverse(n / 10, temp);
    }

    public static void main (String[] args)
    {

        Scanner scan = new Scanner(System.in);
            System.out.println("Enter the number: ");
        int n = scan.nextInt();
        int temp = reverse(n, 0);
        
        if (temp == n)
            System.out.printf("%d is a palindrome", n);
        else
            System.out.printf("%d is not a palindrome", n);
    }
}
