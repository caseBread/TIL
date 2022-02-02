//BOJ 10610
#include <bits/stdc++.h>
using namespace std;


string n;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> n;
	sort(n.begin(), n.end(), greater<>());
	int sum = 0;
	for (int i = 0; i < n.size(); i++) {
		sum = sum + n[i]-48;
	}
	if (sum % 3 != 0 || n[n.size()-1] != '0') {
		cout << -1;
	}
	else {
		cout << n;
	}
}