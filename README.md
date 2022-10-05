# Classes and Mixins in JS
Covers the basic of classes and then how to implement mixins in JavaScript.

### Not able to veiw in console.log?
Uncomment the script tags which you want to view.


```
const SocialClass = superclass => 
  class SocialClass extends superclass { 
    //constructor + methods code 
  };
```
Returns a class i.e SocialClass extending the superclass that is passed to it. (Human class over here)
```
class ClassedHuman extends SocialClass(Human) {};
```