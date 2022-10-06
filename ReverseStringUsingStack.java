import java.util.*;
class HelloWorld {
    public static String StackStr (String s){
        int i,Llen;
        char[] rev_str = new char[s.length()];
        Stack<Character> stack = new Stack<>();
        
        
        for(i=0;i<s.length();i++){
            stack.push(s.charAt(i));
        }
        i=0;
        while(!stack.isEmpty()){
            rev_str[i]=stack.pop();
            i++;
        }
        return new String(rev_str);
        
    }
    
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        String str = sc.nextLine();
        String ans = StackStr(str);
        System.out.println(ans);
    }
}
