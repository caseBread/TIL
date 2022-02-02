//BOJ 1789
#include <bits/stdc++.h>
#define ll long long
using namespace std;


ll n;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> n;
	
	cout << floor((sqrt((2*n)+0.25) - 0.5));
}