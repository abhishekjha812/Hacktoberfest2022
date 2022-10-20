import java.util.Scanner;

public class ReverseArray {

    public static void reverse(int arr[], int start, int end)
     {
        int temp;
        if(start >= end)
            return;

        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
            reverse(arr, start+1, end-1);
    }
    public static void main(String[] args)
     {

        Scanner scan = new Scanner(System.in);
            System.out.println("Enter the size of the array: ");

        int n = scan.nextInt();
        int arr[] =  new int[n];
            System.out.println("Enter the values: ");
        for(int i = 0; i < n; i++) {
            arr[i] = scan.nextInt();
        }
        scan.close();

        reverse(arr, 0, n-1);
            System.out.println("Reverse of the array is ");

        for(int i = 0; i < n; i++)
         {
            System.out.println(arr[i]);
        }
    }
}
