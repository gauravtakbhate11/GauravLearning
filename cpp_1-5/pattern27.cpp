#include <iostream>
 using  namespace std;

 int main(){

int n;
cin>>n;



int row = 1;
while(row<=n){

    int one=1;

    int two=1;

    int three=1;

    int four=1;

    while (one<=n-(row-1)){

        cout<<one;
        one++;

    }
    
    while (two<=row-1){

        cout<<"*";
       
       two++;

    }

    while(three<=row-1){

        cout<<"*";
        three++;
    }

    while(four<=n-(row-1)){

        cout<<n-(row-1)-(four-1);
        four++;
    }


    cout<<endl;
    row++;
}
    
 }