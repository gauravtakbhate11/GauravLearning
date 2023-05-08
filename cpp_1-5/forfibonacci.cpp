#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int num1 = 0;
    int num2 = 1;
    int numN;

    cout << num1 << " " << num2 << " ";

    for (int i = 1; i <= n - 2; i++)
    {

        numN = num1 + num2;

        cout << numN << " ";

        num1 = num2;
        num2 = numN;
    }
}