#include <iostream>
 using  namespace std;

 int main(){

    
   int n;
   cin>>n;
int row=1;
   while(row<=n){

    int col1=1;
     int col2=1;
    while(col1<=n-row){
        cout<<" ";
        col1++;

    }

    while(col2<=row){
        cout<<"*";
        col2++;

    }
    cout<<endl;
    row++;
   }


   int rowx=1;
  
   while(rowx<=n-1){

    int colx1=1;
    int colx2=1;
    while(colx1<=rowx){
        cout<<" ";
        colx1++;

    }

    while(colx2<=n-rowx){
        cout<<"*";
        colx2++;

    }
    cout<<endl;
    rowx++;
   }
   
}