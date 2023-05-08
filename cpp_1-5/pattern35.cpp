#include <iostream>
 using  namespace std;

 int main(){

    
   int n;
   cin>>n;
int row=1;
   while(row<=n-1){

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

int star=1;
while(star<=(2*n)-1){
    cout<<"*";
    star++;

}

   
   
}