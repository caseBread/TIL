//BOJ 2470
#include <bits/stdc++.h>
#define ll long long
using namespace std;

ll n;
vector<ll> arr;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> n;
	ll temp;
	for (ll i = 0; i < n; i++) {
		cin >> temp;
		arr.push_back(temp);
	}
	sort(arr.begin(), arr.end());
	ll ans1, ans2;
	ll i = 0, j = n - 1;
	ll minn = 10000000000;
	while (i != j) {
		if (abs(arr[i] + arr[j]) < minn) {
			minn = abs(arr[i] + arr[j]);
			ans1 = arr[i];
			ans2 = arr[j];
			
		}
		if (arr[i] + arr[j] < 0) i++;
		else j--;
	}
	cout << ans1 << ' ' << ans2;
}