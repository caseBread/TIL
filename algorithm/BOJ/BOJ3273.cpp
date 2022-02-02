//BOJ 3273
#include <bits/stdc++.h>
#define ll long long
using namespace std;


ll n;
vector<ll> arr;
ll x;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	ll temp;
	cin >> n;
	for (ll i = 0; i < n; i++) {
		cin >> temp;
		arr.push_back(temp);
	}
	sort(arr.begin(), arr.end());
	cin >> x;
	ll i = 0, j = n - 1, cnt = 0;
	while (i != j) {
		if (arr[i] + arr[j] == x) {
			cnt++;
			i++;
		}
		else if (arr[i] + arr[j] < x) i++;
		else j--;

	}

	cout << cnt;
}