#include <iostream>
using namespace std;

int main(){
int a;
int b;


    cout<<"Enter a :";
    cin>>a;
cout<<"Enter b :";
    cin>>b;

    if(a==b){
        cout<< "a is equal to b "<<endl;
    }
    else if (a<b){
        cout<< "a is less than b "<<endl;

    }
    else{
        cout<<"a is greater than b "<<endl;
    }
}