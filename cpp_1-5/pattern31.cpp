#include <iostream>
 using  namespace std;

 int main(){

int n;
cin>>n;

int row = 1;

while(row<=n){

int colOne=row;
int colTwo=1;


while(colOne<=n-1){
    cout<<" ";
    colOne++;
}


    while(colTwo<=row){
    cout<<"* ";
    colTwo++;
}




cout<<endl;
row++;

}


int rowx = 1;

while(rowx<=n-1){

int colOnex=1;
int colTwox=1;


while(colOnex<=rowx){
    cout<<" ";
    colOnex++;
}


    while(colTwox<=n-rowx){
    cout<<"* ";
    colTwox++;
}




cout<<endl;
rowx++;

}
 }
