#include <iostream>
 using  namespace std;

 int main(){

int n;
cin>>n;

int row = 1;

while(row<=n){

int colOne=1;
int colTwo=1;
int colThree=1;

while(colOne<=n-row){
    cout<<" ";
    colOne++;
}


    while(colTwo<=row){
    cout<<"*";
    colTwo++;
}


while(colThree<=row-1){
    cout<<"*";
    colThree++;
}


cout<<endl;
row++;



}


 }