// Ternary Search Algorithm

#include<bits/stdc++.h>
#define pi acos(-1.0)
#define pb push_back
#define mp make_pair
#define all(v) v.begin(), v.end()
#define mem(x,y) memset(x , y , sizeof(x))
using namespace std;
typedef long long ll;
typedef pair < int , int > pii;
typedef pair < ll , ll > pll;
const ll MOD = 1000000007;
const int MAX = 100005;

int n, a[MAX];
int call(int x){
    return a[x]*a[x];
}

int TS(int x){
    int loop=100, low=1, high=n, ans=-1;
    while(loop--){
        int mid1 = (2*low+high)/3;  /// mid1 = low + (high-low)/3;
        int mid2 = (2*high+low)/3;  /// mid2 = mid1 + (high-low)/3;
        int ans1 = call(mid1);
        int ans2 = call(mid2);
        if(ans1<ans2) ans=mid2, high=mid2;
        else low=mid1;
    }
    return ans;
}

int main(){
    ios_base::sync_with_stdio(0); cin.tie(0);
    cin>>n;
    for(int i=1; i<=n; i++) cin>>a[i];
    int x; cin>>x;
    cout<<TS(x)<<endl;
	return 0;
}
