import java.util.*;

public class Find_gcd {

    public static void main (String[] args){

        Scanner scan = new Scanner(System.in);
        System.out.println("Enter two numbers to find GCD:");
       
        int fn = scan.nextInt();
        int sn = scan.nextInt();

        int ans = gcd(fn, sn);

        System.out.printf("G.C.D of %d and %d: %d.", fn, sn, ans);
    }
    public static int gcd(int fn, int sn)
    {
        if (sn != 0)
            return gcd(sn, fn % sn);
        else
            return fn;
    }
}
