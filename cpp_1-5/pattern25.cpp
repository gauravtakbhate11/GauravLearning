#include <iostream>
 using  namespace std;

 int main(){

int n;
cin>>n;

int count=1;

int row = 1;
while(row<=n){

    int space=1;

    int col=1;

    while (space<=n-row){

        cout<<" ";
        space++;

    }
    
    while (col<=row){

        cout<<count;
        count++;
        col++;

    }
    cout<<endl;
    row++;
}
    
   
}