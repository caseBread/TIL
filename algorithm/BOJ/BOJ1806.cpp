//BOJ 1806
#include <bits/stdc++.h>
#define ll long long
using namespace std;

ll n, s;
vector<ll> arr;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> n >> s;
	ll temp;
	for (ll i = 0; i < n; i++) {
		cin >> temp;
		arr.push_back(temp);
	}

	ll i = 0, j = 0, ans = 1000000, sum = arr[0];
	while (i != n) {
		if (sum >= s) {
			ans = min(ans, (j - i + 1));
			sum -= arr[i++];
		}
		else if (j != n - 1) {
			sum += arr[++j];
		}
		else {
			sum -= arr[i++];
		}
	}
	if (ans == 1000000) cout << 0;
	else cout << ans;
}