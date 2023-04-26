#include <iostream>
 using  namespace std;

 int main(){

    
   int n;
   cin>>n;
int row=1;
   while(row<=n){

    int col=1;
    while(col<=row){
        cout<<"*";
        col++;

    }
    cout<<endl;
    row++;
   }


   int rowx=1;
   while(rowx<=n){

    int colx=1;
    while(colx<=n-(rowx-1)){
        cout<<"*";
        colx++;

    }
    cout<<endl;
    rowx++;
   }
   
}