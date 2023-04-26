#include <iostream>
 using  namespace std;

 int main(){

    
   int n;
   cin>>n;
int row=1;
   while(row<=n){

    int col1=1;
     int col2=1;
     int col3=1;
     int col4=1;
     int col5=1;

    while(col1<=n-row){
        cout<<" ";
        col1++;

    }

    while(col2<=1){
        cout<<"*";
        col2++;

    }

     while(col3<=row-1){

       
        cout<<" ";
        col3++;

    }

      while(col4<=row-2){

        
        
        cout<<" ";
        col4++;

    }
if(row!=1){
     while(col5<=1){

        
        
        
        cout<<"*";
        col5++;

    }}
    cout<<endl;
    row++;
   }





int rowx=1;
   while(rowx<=n-1){

    int col1x=1;
     int col2x=1;
     int col3x=1;
     int col4x=1;
     int col5x=1;

    while(col1x<=rowx){
        cout<<" ";
        col1x++;

    }

    while(col2x<=1){
        cout<<"*";
        col2x++;

    }

     while(col3x<=n-1-rowx){

       
        cout<<" ";
        col3x++;

    }

      while(col4x<=n-2-rowx){

        
        
        cout<<" ";
        col4x++;

    }
if(rowx!=n-1){
     while(col5x<=1){

        
        
        
        cout<<"*";
        col5x++;

    }}

    cout<<endl;
    rowx++;

   }








}

   
   






