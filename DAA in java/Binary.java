public class Binary {
    public static int fib(int n)

    {
       
        if (n <= 1)
            return n;
        return fib(n-1) + fib(n-2);
    }

    public static void main (String[] args){
        
        int n = 10;
        System.out.printf("The Fibonacci value for %d is "+fib(n), n);
    }
}
