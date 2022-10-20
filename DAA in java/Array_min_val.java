import java.util.*;

public class ArrayMin {
    
    public static int minVal(int A[], int n)
    {
        if(n == 1)
            return A[0];

        return Math.min(A[n-1], minVal(A, n-1));
    }

    public static void main(String args[])
    {
        int A[] = {1, 5, 25, 15, 2, 20, 3};
        int n = A.length;

        System.out.println(minVal(A, n));
    }
}
