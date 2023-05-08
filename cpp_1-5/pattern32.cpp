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

        while(col1<=n-row){
            cout<<" ";
            col1++;
        }

        while(col2<=row){
            cout<<"*";
            col2++;
        }

        while(col3<=row-1){
            cout<<"*";
            col3++;
        }

        cout<<endl;
        row++;
    }



     int rowx=1;
    while(rowx<=n-1){

        int col1x=1;
        int col2x=1;
        int col3x=1;

        while(col1x<=rowx){
            cout<<" ";
            col1x++;
        }

        while(col2x<=n-rowx){
            cout<<"*";
            col2x++;
        }

        while(col3x<=n-(rowx+1)){
            cout<<"*";
            col3x++;
        }
        cout<<endl;
        rowx++;

    }
    
   
}