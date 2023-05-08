#include <iostream>
 using  namespace std;

 int main(){

    
   int n;
   cin>>n;


   int star=1;
while(star<=(2*n)-1){
    cout<<"*";
    star++;  
}
cout<<endl;


int row=1;
   while(row<=n-1){

    int col1=1;
     int col2=1;
     int col3=1;
     int col4=1;
     int col5=1;

    while(col1<=row){
        cout<<" ";
        col1++;

    }

    while(col2<=1){
        cout<<"*";
        col2++;

    }

     while(col3<=n-1-row){

       
        cout<<" ";
        col3++;

    }

      while(col4<=n-2-row){

        
        
        cout<<" ";
        col4++;

    }
if(row!=n-1){
     while(col5<=1){

        
        
        
        cout<<"*";
        col5++;

    }}

    cout<<endl;
    row++;

   }




  

}