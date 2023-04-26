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

while(colOne<=row-1){
    cout<<" ";
    colOne++;
}


    while(colTwo<=n-(row-1)){
    cout<<"*";
    colTwo++;
}


while(colThree<=n-row){
    cout<<"*";
    colThree++;
}

cout<<endl;
row++;

}
 }