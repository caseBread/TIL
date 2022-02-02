//BOJ 1026
#include <bits/stdc++.h>
using namespace std;

int n;
vector<int> a;
vector<int> b;

int main() {
	int x;
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> x;
		a.push_back(x);
	}
	for (int i = 0; i < n; i++) {
		cin >> x;
		b.push_back(x);
	}

	sort(a.begin(), a.end(), greater<int>());
	sort(b.begin(), b.end());

	int sum = 0;
	for (int i = 0; i < n; i++) {
		sum = sum + a[i] * b[i];
	}
	cout << sum;
}