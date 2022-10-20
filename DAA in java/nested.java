public class Nested
 {
    static int fun(int n)
    {
        if (n > 100) return n - 10;
       
        else  return fun(fun(n + 11));
    }

    public static void main(String args[])
    {
        int i;

        i = fun(95);
        System.out.print("Result of nested recursion: "+ r);

    }
}
