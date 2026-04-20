const cppQuestions = [
    {
        id: 1,
        question: "Who developed C++?",
        options: ["Bjarne Stroustrup","Dennis Ritchie","James Gosling","Ken Thompson"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 2,
        question: "C++ is a _______ language.",
        options: ["Procedural","Both Procedural & Object-Oriented","Functional","Object-Oriented"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 3,
        question: "Which of the following is the correct extension of the C++ file?",
        options: [".cpp",".c","Both of these",".cxx"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 4,
        question: "Which of the following is used for a single-line comment in C++?",
        options: ["None","/* */","#","//"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 5,
        question: "Which of the following is not a valid data type in C++?",
        options: ["real","float","int","double"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 6,
        question: "Every C++ program must have a ______ function.",
        options: ["start()","main()","run()","init()"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 7,
        question: "Which of the following is the extraction operator?",
        options: [">","<<",">>","<"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 8,
        question: "Which of the following is the insertion operator?",
        options: [">>","<",">","<<"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 9,
        question: "The 'iostream' header file stands for:",
        options: ["Input-Output Stream","Int-Output Stream","In-Out Stream","None"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 10,
        question: "Which of the following is not a keyword in C++?",
        options: ["volatile","constant","export","friend"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 11,
        question: "Size of 'char' in C++ is usually:",
        options: ["4 bytes","2 bytes","1 byte","8 bytes"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 12,
        question: "What is the result of 5 / 2 in C++ (integer division)?",
        options: ["2.5","Error","3","2"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 13,
        question: "Which operator is used to access the address of a variable?",
        options: ["&","*","->","@"],
        answer: 0,
        topic: "Pointers"
    },
    {
        id: 14,
        question: "Which operator is used to dereference a pointer?",
        options: ["&","*","->","."],
        answer: 1,
        topic: "Pointers"
    },
    {
        id: 15,
        question: "A pointer that points to nothing is called:",
        options: ["Void pointer","Wild pointer","Null pointer","Dangling pointer"],
        answer: 2,
        topic: "Pointers"
    },
    {
        id: 16,
        question: "Which of the following is used to allocate memory dynamically?",
        options: ["malloc","create","alloc","new"],
        answer: 3,
        topic: "Memory Management"
    },
    {
        id: 17,
        question: "Which of the following is used to deallocate memory?",
        options: ["delete","free","remove","clear"],
        answer: 0,
        topic: "Memory Management"
    },
    {
        id: 18,
        question: "What is a class in C++?",
        options: ["A function","A user-defined data type","A standard variable","A loop"],
        answer: 1,
        topic: "OOPs"
    },
    {
        id: 19,
        question: "An object is an _______ of a class.",
        options: ["Inheritance","Interface","Instance","Initial"],
        answer: 2,
        topic: "OOPs"
    },
    {
        id: 20,
        question: "By default, all members of a C++ class are:",
        options: ["Public","Protected","Global","Private"],
        answer: 3,
        topic: "OOPs"
    },
    {
        id: 21,
        question: "Which access specifier allows members to be accessible in derived classes but not outside?",
        options: ["Protected","Private","Public","Internal"],
        answer: 0,
        topic: "OOPs"
    },
    {
        id: 22,
        question: "What is encapsulation?",
        options: ["Inheriting data","Binding data and functions together","Hiding data","None"],
        answer: 1,
        topic: "OOPs"
    },
    {
        id: 23,
        question: "What is polymorphism?",
        options: ["Binding data","Hiding data","One name, many forms","None"],
        answer: 2,
        topic: "OOPs"
    },
    {
        id: 24,
        question: "Which of the following is a type of polymorphism?",
        options: ["Compile-time","Runtime","None","Both of these"],
        answer: 3,
        topic: "OOPs"
    },
    {
        id: 25,
        question: "Function overloading is an example of:",
        options: ["Compile-time polymorphism","Runtime polymorphism","Inheritance","Abstraction"],
        answer: 0,
        topic: "OOPs"
    },
    {
        id: 26,
        question: "Virtual functions are used for:",
        options: ["Compile-time polymorphism","Runtime polymorphism","Inheritance","None"],
        answer: 1,
        topic: "OOPs"
    },
    {
        id: 27,
        question: "What is an abstract class?",
        options: ["A class with all private members","A class with no data","A class with at least one pure virtual function","None"],
        answer: 2,
        topic: "OOPs"
    },
    {
        id: 28,
        question: "What is the syntax for a pure virtual function?",
        options: ["None","virtual void func();","void func() = 0;","virtual void func() = 0;"],
        answer: 3,
        topic: "OOPs"
    },
    {
        id: 29,
        question: "Which keyword is used for inheritance?",
        options: [":","extends","inherits","using"],
        answer: 0,
        topic: "OOPs"
    },
    {
        id: 30,
        question: "In multiple inheritance:",
        options: ["A base class has many derived classes","A class inherits from two or more base classes","Level of inheritance","None"],
        answer: 1,
        topic: "Inheritance"
    },
    {
        id: 31,
        question: "The diamond problem occurs in:",
        options: ["Single Inheritance","Hybrid Inheritance","Multiple Inheritance","Multi-level Inheritance"],
        answer: 2,
        topic: "Inheritance"
    },
    {
        id: 32,
        question: "How is the diamond problem solved in C++?",
        options: ["None","Abstract Classes","Private Inheritance","Virtual Inheritance"],
        answer: 3,
        topic: "Inheritance"
    },
    {
        id: 33,
        question: "What is a constructor?",
        options: ["A function called during object creation","A function to delete objects","A special variable","None"],
        answer: 0,
        topic: "OOPs"
    },
    {
        id: 34,
        question: "Can a constructor be private?",
        options: ["No","Yes","Only for static classes","Only with friend functions"],
        answer: 1,
        topic: "OOPs"
    },
    {
        id: 35,
        question: "What is a copy constructor?",
        options: ["Used for files","Copies code","Initializes an object using another object of the same class","None"],
        answer: 2,
        topic: "OOPs"
    },
    {
        id: 36,
        question: "Which of the following is not a loop in C++?",
        options: ["for","while","do-while","foreach (built-in keyword)"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 37,
        question: "What is the purpose of 'break' statement?",
        options: ["Terminates the loop or switch","Skips one iteration","Restarts the loop","None"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 38,
        question: "What is the purpose of 'continue' statement?",
        options: ["Terminates the loop","Skips the rest of current loop iteration","Speeds up loop","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 39,
        question: "What is the first index of an array in C++?",
        options: ["-1","1","0","Any"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 40,
        question: "How do you declare a constant in C++?",
        options: ["const int x = 10;","#define x 10","None","Both of these"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 41,
        question: "Which operator is used for Logical AND?",
        options: ["&&","||","!","&"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 42,
        question: "Which operator is used for Logical OR?",
        options: ["&&","||","!","|"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 43,
        question: "What is the size of 'int' on a 32-bit system usually?",
        options: ["8 bytes","2 bytes","4 bytes","1 byte"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 44,
        question: "What is the scope resolution operator?",
        options: [":",".","->","::"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 45,
        question: "What is 'this' pointer?",
        options: ["Points to the current object","Points to the base class","Points to the static class","None"],
        answer: 0,
        topic: "OOPs"
    },
    {
        id: 46,
        question: "Which keyword is used to handle exceptions?",
        options: ["try","All of the mentioned","throw","catch"],
        answer: 1,
        topic: "Exceptions"
    },
    {
        id: 47,
        question: "Where should the 'catch' block be placed?",
        options: ["Before main","Anywhere","Immediately after try","None"],
        answer: 2,
        topic: "Exceptions"
    },
    {
        id: 48,
        question: "What is 'std::endl' used for?",
        options: ["None","Ends the program","Clears screen","Inserts a newline and flushes the stream"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 49,
        question: "What is the difference between 'float' and 'double'?",
        options: ["Double has more precision","Float is for numbers","No difference","Double is only for integers"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 50,
        question: "Which keyword is used to modify a variable even if it's within a const member function?",
        options: ["volatile","mutable","static","register"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 51,
        question: "What is a 'friend' function?",
        options: ["A static function","A function within the class","A function that can access private/protected members of a class","None"],
        answer: 2,
        topic: "OOPs"
    },
    {
        id: 52,
        question: "What is a 'friend' class?",
        options: ["None","A derived class","A base class","A class that can access private members of another class"],
        answer: 3,
        topic: "OOPs"
    },
    {
        id: 53,
        question: "Templates in C++ allow:",
        options: ["Generic programming","Hiding data","Deleting memory","None"],
        answer: 0,
        topic: "Templates"
    },
    {
        id: 54,
        question: "Which keyword is used for templates?",
        options: ["generic","template","type","logic"],
        answer: 1,
        topic: "Templates"
    },
    {
        id: 55,
        question: "What are the two types of templates?",
        options: ["Static & Dynamic","Variable & Object","Function & Class","None"],
        answer: 2,
        topic: "Templates"
    },
    {
        id: 56,
        question: "STL stands for:",
        options: ["None","System Type Link","Static Template List","Standard Template Library"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 57,
        question: "Which component of STL is used to store data?",
        options: ["Containers","Algorithms","Iterators","Functions"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 58,
        question: "Which component of STL is used to traverse containers?",
        options: ["Containers","Iterators","Algorithms","Pointers"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 59,
        question: "Which container is a dynamic array?",
        options: ["set","list","vector","map"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 60,
        question: "Which container stores key-value pairs?",
        options: ["list","set","vector","map"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 61,
        question: "Complexity of searching in a 'std::set' is:",
        options: ["O(log n)","O(n)","O(1)","O(n^2)"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 62,
        question: "Which container stores unique elements in sorted order?",
        options: ["unordered_set","set","vector","map"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 63,
        question: "What is 'auto' keyword in C++11?",
        options: ["Dynamic variable","Static variable","Automatic type deduction","None"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 64,
        question: "What is 'nullptr'?",
        options: ["None","A zero value","An empty string","Type-safe null pointer"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 65,
        question: "What is a 'lambda' expression in C++?",
        options: ["An anonymous function","A new variable","A styling tag","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 66,
        question: "Which of the following is correct for 'nullptr'?",
        options: ["int x = nullptr;","int *p = nullptr;","Both","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 67,
        question: "Which keyword is used to provide an alternative name for an existing type?",
        options: ["typedef","using","Both","Rename"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 68,
        question: "What is a 'namespace'?",
        options: ["None","A memory area","A file name","A declarative region that provides a scope to the identifiers"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 69,
        question: "Default namespace in C++ is:",
        options: ["std","global","main","root"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 70,
        question: "What does 'using namespace std;' do?",
        options: ["Deletes the namespace","Avoids prefixing 'std::' before standard components","Sets up a new namespace","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 71,
        question: "Which operator cannot be overloaded?",
        options: ["::",".","All of the mentioned","sizeof"],
        answer: 2,
        topic: "Operators"
    },
    {
        id: 72,
        question: "What is 'operator overloading'?",
        options: ["None","Creating new operators","Deleting operators","Providing special meaning to an operator for user-defined types"],
        answer: 3,
        topic: "Operators"
    },
    {
        id: 73,
        question: "What is a 'destructor'?",
        options: ["Called when an object is destroyed","Called during creation","Used to clean RAM manually","None"],
        answer: 0,
        topic: "OOPs"
    },
    {
        id: 74,
        question: "What is the symbol for destructor?",
        options: ["!","~","#","@"],
        answer: 1,
        topic: "OOPs"
    },
    {
        id: 75,
        question: "Can we overload a destructor?",
        options: ["Only in some compilers","Yes","No","None"],
        answer: 2,
        topic: "OOPs"
    },
    {
        id: 76,
        question: "What is a pointer to a pointer?",
        options: ["None","A chain loop","Illegal code","A variable that stores the address of another pointer"],
        answer: 3,
        topic: "Pointers"
    },
    {
        id: 77,
        question: "What is an array of pointers?",
        options: ["An array where elements are addresses","An array with values","A pointer to an array","None"],
        answer: 0,
        topic: "Pointers"
    },
    {
        id: 78,
        question: "What is 'RAII'?",
        options: ["Random Access Internal Info","Resource Acquisition Is Initialization","Read Access In Interface","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 79,
        question: "Smart pointers were introduced to prevent:",
        options: ["Slow build","Syntax errors","Memory leaks","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 80,
        question: "Which smart pointer allows only one owner?",
        options: ["auto_ptr (deprecated)","shared_ptr","weak_ptr","unique_ptr"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 81,
        question: "Which smart pointer uses reference counting?",
        options: ["shared_ptr","unique_ptr","weak_ptr","All"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 82,
        question: "What is the function of 'std::move'?",
        options: ["Moves files","Converts an lvalue to rvalue to enable moving","Deletes objects","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 83,
        question: "Which header is used for smart pointers?",
        options: ["pointer","smart","memory","stdlib"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 84,
        question: "What is the difference between 'std::vector' and 'std::list'?",
        options: ["None","List is faster","Vector is linked","Vector is contiguous in memory, List is not"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 85,
        question: "Default storage of C++ strings is:",
        options: ["Heap (dynamically managed)","Stack","Read-only","None"],
        answer: 0,
        topic: "Strings"
    },
    {
        id: 86,
        question: "Which function is used to find the size of a string?",
        options: ["size()","Both","length()","count()"],
        answer: 1,
        topic: "Strings"
    },
    {
        id: 87,
        question: "How to compare two strings in C++?",
        options: ["==","compare()","Both","None"],
        answer: 2,
        topic: "Strings"
    },
    {
        id: 88,
        question: "What is 'const' char* p?",
        options: ["None","Constant pointer","Both","Pointer to constant char"],
        answer: 3,
        topic: "Pointers"
    },
    {
        id: 89,
        question: "What is char* 'const' p?",
        options: ["Constant pointer to char","Pointer to constant","Both","None"],
        answer: 0,
        topic: "Pointers"
    },
    {
        id: 90,
        question: "What is 'static' variable in a function?",
        options: ["Deleted after call","Retains its value between function calls","Always zero","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 91,
        question: "What is 'static' member in a class?",
        options: ["Cannot be accessed","Unique per object","Shared by all objects of the class","None"],
        answer: 2,
        topic: "Classes"
    },
    {
        id: 92,
        question: "How to initialize a static member?",
        options: ["None","Inside the constructor","Automatically","Outside the class using scope resolution"],
        answer: 3,
        topic: "Classes"
    },
    {
        id: 93,
        question: "Which keyword is used to access global variables when a local variable has same name?",
        options: ["::","global","extern","this"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 94,
        question: "What is 'typedef'?",
        options: ["Defines a new class","Gives a new name to an existing type","A type of loop","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 95,
        question: "What is 'enum'?",
        options: ["A static class","A number list","User-defined enumeration type","None"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 96,
        question: "In C++, 'struct' members are public by default. True/False?",
        options: ["Depends on compiler","False","Only in C","True"],
        answer: 3,
        topic: "OOPs"
    },
    {
        id: 97,
        question: "Can a struct have methods in C++?",
        options: ["Yes","No","Only static methods","None"],
        answer: 0,
        topic: "OOPs"
    },
    {
        id: 98,
        question: "What is a 'union'?",
        options: ["Members are combined","Members share the same memory location","A group of classes","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 99,
        question: "What is the size of a 'union'?",
        options: ["Size of its smallest member","Sum of sizes","Size of its largest member","None"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 100,
        question: "What is 'inline' function?",
        options: ["None","Function inside a class","Function with one line","Function whose code is replaced at the call site to save overhead"],
        answer: 3,
        topic: "Functions"
    },
    {
        id: 101,
        question: "What is 'static' function in a class?",
        options: ["Both of these","Can only access static members","Can be called without an object","None"],
        answer: 0,
        topic: "Classes"
    },
    {
        id: 102,
        question: "What is 'virtual' destructor?",
        options: ["A destructor that is empty","Ensures proper cleanup of derived class objects when deleted via base class pointer","A destructor called by a virtual function","None"],
        answer: 1,
        topic: "Destructors"
    },
    {
        id: 103,
        question: "What is 'dynamic_cast'?",
        options: ["A way to copy variables","Used for speed","Used for safe downcasting in polymorphic classes","None"],
        answer: 2,
        topic: "Casting"
    },
    {
        id: 104,
        question: "What is 'static_cast'?",
        options: ["A memory cast","A fast cast","A pointers-only cast","Used for non-polymorphic casting"],
        answer: 3,
        topic: "Casting"
    },
    {
        id: 105,
        question: "What is 'reinterpret_cast'?",
        options: ["Used to cast between unrelated pointer types (highly unsafe)","Used for templates","Used for strings","A safe cast"],
        answer: 0,
        topic: "Casting"
    },
    {
        id: 106,
        question: "What is 'const_cast'?",
        options: ["Used for math","Used to add or remove 'const' or 'volatile' qualifiers","Used for inheritance","None"],
        answer: 1,
        topic: "Casting"
    },
    {
        id: 107,
        question: "What is 'typeid' operator used for?",
        options: ["To delete a type","To define a type","To find the type of an expression at runtime","To check memory"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 108,
        question: "Which header is needed for 'typeid'?",
        options: ["type.h","iostream","stdlib","typeinfo"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 109,
        question: "What is 'RTTI'?",
        options: ["Run-Time Type Information","Random Tool Type Info","Read Tree Tag Info","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 110,
        question: "What is 'VTable'?",
        options: ["A visual table","A table of virtual functions used for dynamic dispatch","A variable table","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 111,
        question: "What is 'VPTR'?",
        options: ["Void Pointer","Variable Pointer","Virtual Pointer pointing to a VTable","Vector Pointer"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 112,
        question: "What is 'SFINAE'?",
        options: ["None","Small File Info Not Accessible Error","Static Function In Nested Area Error","Substitution Failure Is Not An Error"],
        answer: 3,
        topic: "Templates"
    },
    {
        id: 113,
        question: "What is 'CRTP'?",
        options: ["Curiously Recurring Template Pattern","Class Routing Template Pattern","Core React Template Pattern","None"],
        answer: 0,
        topic: "Patterns"
    },
    {
        id: 114,
        question: "What is 'tuple' in C++11?",
        options: ["A small table","A generalization of std::pair for multiple elements","A linked list","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 115,
        question: "What is 'thread' in C++11?",
        options: ["A variable type","A line of code","A way to run code concurrently","None"],
        answer: 2,
        topic: "Multithreading"
    },
    {
        id: 116,
        question: "Which header is used for threading?",
        options: ["system","multiprocessing","io","thread"],
        answer: 3,
        topic: "Multithreading"
    },
    {
        id: 117,
        question: "What is 'mutex' used for?",
        options: ["To prevent race conditions by locking resources","To speed up code","To delete objects","To create threads"],
        answer: 0,
        topic: "Multithreading"
    },
    {
        id: 118,
        question: "What is 'lock_guard'?",
        options: ["A security tool","A RAII-style wrapper for mutex","A class for files","None"],
        answer: 1,
        topic: "Multithreading"
    },
    {
        id: 119,
        question: "What is 'atomic' variable?",
        options: ["A fast variable","A very small variable","A variable that can be updated thread-safely without locks","None"],
        answer: 2,
        topic: "Multithreading"
    },
    {
        id: 120,
        question: "What is 'std::async'?",
        options: ["None","A networking command","A timer","Runs a function asynchronously and returns a future"],
        answer: 3,
        topic: "Multithreading"
    },
    {
        id: 121,
        question: "What is 'std::future'?",
        options: ["A promise to provide a result eventually","A way to predict code","A new variable type","None"],
        answer: 0,
        topic: "Multithreading"
    },
    {
        id: 122,
        question: "What is 'std::promise'?",
        options: ["A legal contract","Used to set the value that std::future will retrieve","A way to handle errors","None"],
        answer: 1,
        topic: "Multithreading"
    },
    {
        id: 123,
        question: "What is 'lambda capture clause'?",
        options: ["The {} part","The () part","The [] part that specifies variables to capture","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 124,
        question: "What does '[=]' in lambda capture mean?",
        options: ["Capture only pointers","Capture nothing","Capture by reference","Capture all local variables by value"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 125,
        question: "What does '[&]' in lambda capture mean?",
        options: ["Capture all local variables by reference","Capture by value","Capture only address","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 126,
        question: "What is 'mutable' in lambda?",
        options: ["Deletes variables","Allows modifying variables captured by value","None","Speeds up lambda"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 127,
        question: "What is 'std::function'?",
        options: ["A template","A normal function","A polymorphic function wrapper","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 128,
        question: "Which header is needed for 'std::function' and 'std::bind'?",
        options: ["stdlib","math","iostream","functional"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 129,
        question: "What is 'std::bind'?",
        options: ["Used to bind arguments to functions creating new function objects","Connecting files","Deleting functions","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 130,
        question: "What is 'perfect forwarding failure'?",
        options: ["When code crashes","When types are not preserved correctly","When memory leaks","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 131,
        question: "What is 'std::forward' used for?",
        options: ["To skip steps","To go forward in code","To achieve perfect forwarding of arguments","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 132,
        question: "What is 'rvalue reference' operator?",
        options: ["^","&","*","&&"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 133,
        question: "What is 'move semantics'?",
        options: ["Transferring resources from one object to another without copying","Copying fast","Deleting old objects","Moving data to disk"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 134,
        question: "What is 'move constructor'?",
        options: ["A constructor that moves the object","Constructor that takes an rvalue reference and transfers ownership","A constructor for numbers","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 135,
        question: "What is 'Rule of Three'?",
        options: ["Three methods per object","Three variables per class","If you define destructor/copy constructor/copy assignment, you probably need all three","None"],
        answer: 2,
        topic: "Memory Management"
    },
    {
        id: 136,
        question: "What is 'Rule of Five' in C++11?",
        options: ["None","Five classes per file","Five rules for coding","Adds move constructor and move assignment to the Rule of Three"],
        answer: 3,
        topic: "Memory Management"
    },
    {
        id: 137,
        question: "What is 'Rule of Zero'?",
        options: ["Avoid defining custom copy/move/destructor by using smart pointers and containers","No rules","Zero variables","None"],
        answer: 0,
        topic: "Memory Management"
    },
    {
        id: 138,
        question: "What is 'std::vector::reserve()' used for?",
        options: ["To change size","To allocate memory without changing size","To delete memory","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 139,
        question: "What is 'std::vector::resize()' used for?",
        options: ["To delete items","To set capacity","To change the size of the vector","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 140,
        question: "What is 'emplace_back()' vs 'push_back()'?",
        options: ["Emplace is only for numbers","No difference","Push is faster","Emplace constructs in-place; Push copies/moves"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 141,
        question: "What is 'std::list' complexity for insertion/deletion?",
        options: ["O(1) given position","O(n)","O(log n)","O(n^2)"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 142,
        question: "What is 'std::deque'?",
        options: ["Deletion Queue","Double Ended Queue","Default Queue","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 143,
        question: "What is 'std::stack' adapter using by default?",
        options: ["std::list","std::vector","std::deque","std::array"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 144,
        question: "What is 'std::priority_queue' using by default?",
        options: ["std::map","std::list","std::set","std::vector"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 145,
        question: "What is 'std::bitset'?",
        options: ["For managing a fixed-size sequence of bits","A list of booleans","A mathematical filter","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 146,
        question: "What is 'std::string' complexity for finding length?",
        options: ["O(n)","O(1)","O(log n)","None"],
        answer: 1,
        topic: "Strings"
    },
    {
        id: 147,
        question: "What is 'std::array'?",
        options: ["A pointer list","A dynamic array","A fixed-size wrapper around C-style array","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 148,
        question: "Which keyword is used to specify that a function does not throw exceptions?",
        options: ["override","const","final","noexcept"],
        answer: 3,
        topic: "Exceptions"
    },
    {
        id: 149,
        question: "What is 'ADL'?",
        options: ["Argument-Dependent Lookup (Koenig lookup)","Active Data List","Automatic Data Loading","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 150,
        question: "What is 'std::initializer_list'?",
        options: ["A list of variables","Used for {1, 2, 3} style initialization","A type of class","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 151,
        question: "What was 'NULL' replaced by in C++11?",
        options: ["0ptr","void","nullptr","nil"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 152,
        question: "What is 'override' keyword used for?",
        options: ["None","To delete a function","To bypass rules","To ensure a virtual function actually overrides one in a base class"],
        answer: 3,
        topic: "Polymorphism"
    },
    {
        id: 153,
        question: "What is 'final' keyword used for in classes?",
        options: ["To prevent further inheritance","To mark end of class","To make it static","None"],
        answer: 0,
        topic: "Inheritance"
    },
    {
        id: 154,
        question: "What is 'delegating constructor'?",
        options: ["A constructor for delegates","A constructor calling another constructor in the same class","A static constructor","None"],
        answer: 1,
        topic: "Constructors"
    },
    {
        id: 155,
        question: "What is 'user-defined literal'?",
        options: ["Custom strings","Writing your own numbers","Custom suffixes like 10_kg","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 156,
        question: "What is 'std::unique_ptr::get()' used for?",
        options: ["None","Returns a copy","Deletes the pointer","Returns the raw pointer"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 157,
        question: "What is 'std::unique_ptr::release()' used for?",
        options: ["Relinquishes ownership and returns raw pointer","Deletes memory","Releases all variables","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 158,
        question: "What is 'std::shared_ptr::use_count()'?",
        options: ["Memory size","Number of shared_ptrs managing the same object","Number of methods","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 159,
        question: "What is 'weak_ptr' used for?",
        options: ["A temporary pointer","A pointer with low power","To break circular dependencies between shared_ptrs","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 160,
        question: "What is 'std::make_shared'?",
        options: ["None","Connecting shared pointers","Creating lists","Preferable way to create shared_ptr for efficiency and exception safety"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 161,
        question: "What is 'structured bindings' in C++17?",
        options: ["auto [x, y] = my_pair;","Connecting structs","New database structure","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 162,
        question: "What is 'std::optional' in C++17?",
        options: ["An optional variable","A wrapper that may or may not contain a value","A random choice","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 163,
        question: "What is 'std::variant' in C++17?",
        options: ["A random number","A variable type","A type-safe union","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 164,
        question: "What is 'std::any' in C++17?",
        options: ["None","Accepts anything","A global variable","A container that can hold a single value of any type"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 165,
        question: "Which header is for 'std::optional'?",
        options: ["optional","maybe","variant","any"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 166,
        question: "What is 'concepts' in C++20?",
        options: ["New ideas","Named requirements for template arguments","A way to group code","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 167,
        question: "What is 'ranges' in C++20?",
        options: ["Scoping","Distance between numbers","A better way to work with sequences (composability)","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 168,
        question: "What is 'coroutines' in C++20?",
        options: ["None","Parallel code","Recursive code","Functions that can suspend and resume"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 169,
        question: "What is 'three-way comparison operator' (spaceship operator) in C++20?",
        options: ["<=>","<>","!==","=="],
        answer: 0,
        topic: "Operators"
    },
    {
        id: 170,
        question: "What is 'modules' in C++20?",
        options: ["Parts of the library","Modern alternative to header files","Folders","None"],
        answer: 1,
        topic: "Environment"
    },
    {
        id: 171,
        question: "What is 'std::format' in C++20?",
        options: ["Hard drive formatting","Code auto-format","Python-like string formatting","None"],
        answer: 2,
        topic: "Strings"
    },
    {
        id: 172,
        question: "What is 'std::span' in C++20?",
        options: ["None","A timer","A distance","A non-owning view of a contiguous sequence"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 173,
        question: "What is 'memory leak'?",
        options: ["Allocated memory not being freed","Deleting memory twice","Slow RAM","None"],
        answer: 0,
        topic: "Memory Management"
    },
    {
        id: 174,
        question: "What is 'dangling pointer'?",
        options: ["A pointer that is loose","A pointer pointing to deleted memory","A pointer with no type","None"],
        answer: 1,
        topic: "Pointers"
    },
    {
        id: 175,
        question: "What is 'double free' error?",
        options: ["Speeding up deletion","Getting two for one","Attempting to free the same memory twice","None"],
        answer: 2,
        topic: "Memory Management"
    },
    {
        id: 176,
        question: "What is 'segmentation fault'?",
        options: ["None","Dividing segments","Large files","Accessing invalid memory area"],
        answer: 3,
        topic: "Execution"
    },
    {
        id: 177,
        question: "What is 'stack overflow'?",
        options: ["Infinite recursion filling up the stack","Too much RAM used","A website","None"],
        answer: 0,
        topic: "Execution"
    },
    {
        id: 178,
        question: "What is 'buffer overflow'?",
        options: ["Fast data","Writing more data to a buffer than it can hold","Slow data","None"],
        answer: 1,
        topic: "Execution"
    },
    {
        id: 179,
        question: "What is 'undefined behavior' (UB)?",
        options: ["Error behavior","Random behavior","Operation whose result is not defined by the standard","None"],
        answer: 2,
        topic: "Execution"
    },
    {
        id: 180,
        question: "What is 'implementation-defined behavior'?",
        options: ["None","Custom code","Standard behavior","Behavior that depends on the compiler/target (e.g., size of int)"],
        answer: 3,
        topic: "Environment"
    },
    {
        id: 181,
        question: "What is 'unspecified behavior'?",
        options: ["Result depends on the implementation (e.g., evaluation order of arguments)","Broken code","Random code","None"],
        answer: 0,
        topic: "Environment"
    },
    {
        id: 182,
        question: "What is 'static initialization order fiasco'?",
        options: ["Fast loading","Undetermined order of initializing static variables in different files","Static errors","None"],
        answer: 1,
        topic: "Execution"
    },
    {
        id: 183,
        question: "How do you avoid static initialization fiasco?",
        options: ["Deleting variables","Using more variables","Using 'construct on first use' pattern (local static object)","None"],
        answer: 2,
        topic: "Patterns"
    },
    {
        id: 184,
        question: "What is 'linkage' in C++?",
        options: ["None","Connecting methods","The build process","How names can be shared between files"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 185,
        question: "What is 'internal linkage'?",
        options: ["Names reachable only within the same translation unit (using 'static')","Inside a class","Inside a block","None"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 186,
        question: "What is 'external linkage'?",
        options: ["Outside code","Names reachable from other translation units","Global only","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 187,
        question: "What is 'translation unit'?",
        options: ["A compiler part","A binary file","A single .cpp file after preprocessing (including headers)","None"],
        answer: 2,
        topic: "Environment"
    },
    {
        id: 188,
        question: "What does 'extern \"C\"' do?",
        options: ["None","Calls C from C++","Speeds up build","Enables C-linkage (prevents name mangling) for compatibility with C"],
        answer: 3,
        topic: "Environment"
    },
    {
        id: 189,
        question: "What is 'name mangling'?",
        options: ["Process where compiler encodes function names with type info for overloading","Messing up names","Encryption","None"],
        answer: 0,
        topic: "Environment"
    },
    {
        id: 190,
        question: "What is 'inline' keyword primarily for today?",
        options: ["Speeding up","Allowing multiple definitions of the same function (e.g., in headers)","Smaller code","None"],
        answer: 1,
        topic: "Functions"
    },
    {
        id: 191,
        question: "What is 'tuple_size' and 'tuple_element'?",
        options: ["Variables","Methods of tuple","Templates to query tuple info","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 192,
        question: "What is 'std::tie'?",
        options: ["None","Connects objects","Links variables","Creates a tuple of references to its arguments"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 193,
        question: "What is 'ignore' in 'std::tie' used for?",
        options: ["Used to skip elements when unpacking tuples","Deleting code","Skipping steps","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 194,
        question: "What is 'std::get<index>(tuple)' used for?",
        options: ["Finding size","Accessing elements by index","Sorting","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 195,
        question: "What is 'std::get<T>(tuple)' used for?",
        options: ["Deleting type","Finding type","Accessing elements by type (if unique)","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 196,
        question: "What is 'std::array' size known at?",
        options: ["None","Runtime","Whenever","Compile time"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 197,
        question: "What is 'std::forward_list'?",
        options: ["Singly linked list","Doubly linked list","A vector","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 198,
        question: "What is 'std::multiset'?",
        options: ["A group of sets","A set that allows duplicate elements","A list","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 199,
        question: "What is 'std::multimap'?",
        options: ["A list","Multiple maps","A map that allows multiple entries for same key","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 200,
        question: "What is 'iterator invalidation'?",
        options: ["None","Broken iterator","Small iterator","When an operation on a container makes existing iterators dangerous to use"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 201,
        question: "What is 'std::next' and 'std::prev'?",
        options: ["Helpers to get iterators at a distance","Methods of vector","Loop variables","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 202,
        question: "What is 'std::distance'?",
        options: ["Measures memory","Returns number of elements between two iterators","A timer","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 203,
        question: "What is 'std::advance'?",
        options: ["A fast loop","Goes to next page","Increments an iterator N times","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 204,
        question: "What is 'C-style cast' vs 'C++ cast'?",
        options: ["C++ casts are for classes only","C is faster","No difference","C++ casts are safer and explicit"],
        answer: 3,
        topic: "Casting"
    },
    {
        id: 205,
        question: "What is 'memory alignment'?",
        options: ["Arranging data in memory at specific byte boundaries for CPU efficiency","Deleting memory","Sorting data","None"],
        answer: 0,
        topic: "Execution"
    },
    {
        id: 206,
        question: "What is 'alignas' specifier?",
        options: ["For aligning text","Used to specify custom alignment requirement","For aligning code","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 207,
        question: "What is 'alignof' operator?",
        options: ["A pointer tool","Checks memory","Returns the alignment of a type","None"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 208,
        question: "What is 'sizeof' operator applied to a class with one virtual function?",
        options: ["Same as data","0","1","At least the size of a pointer (for VPTR) plus data"],
        answer: 3,
        topic: "Classes"
    },
    {
        id: 209,
        question: "What is 'empty base optimization' (EBO)?",
        options: ["Optimization where base classes with no data members occupy 0 bytes","Deleting base classes","Smaller objects","None"],
        answer: 0,
        topic: "Architecture"
    },
    {
        id: 210,
        question: "What is 'pod' (Plain Old Data)?",
        options: ["A list","Data types compatible with C","A container","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 211,
        question: "What is 'is_pod' trait?",
        options: ["Method","Variable","Template to check if a type is POD","None"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 212,
        question: "What is 'std::move_if_noexcept'?",
        options: ["None","Always moves","Always copies","Moves if move constructor is noexcept, otherwise copies (for safety)"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 213,
        question: "What is 'exception neutral' code?",
        options: ["Code that allows exceptions to propagate through it to a caller","Code with no exceptions","Safe code","None"],
        answer: 0,
        topic: "Exceptions"
    },
    {
        id: 214,
        question: "What is 'exception specification' (deprecated C++11)?",
        options: ["noexcept","throw(type list)","const","None"],
        answer: 1,
        topic: "Exceptions"
    },
    {
        id: 215,
        question: "What is 'std::terminate()'?",
        options: ["Clears memory","Ends the app","Called when an exception is not caught or noexcept is violated","None"],
        answer: 2,
        topic: "Exceptions"
    },
    {
        id: 216,
        question: "What is 'std::set_terminate()'?",
        options: ["None","Sets a timer","Deletes data","Allows setting a custom handler for terminate"],
        answer: 3,
        topic: "Exceptions"
    },
    {
        id: 217,
        question: "What is 'stack unwinding'?",
        options: ["The process of calling destructors for local objects when an exception is thrown","Clearing the stack","Fast execution","None"],
        answer: 0,
        topic: "Exceptions"
    },
    {
        id: 218,
        question: "What is 'catch(...)' used for?",
        options: ["To catch nothing","To catch any exception","To catch errors","None"],
        answer: 1,
        topic: "Exceptions"
    },
    {
        id: 219,
        question: "What is 'nested exception'?",
        options: ["Infinite exception","Small exception","Throwing an exception while handling another","None"],
        answer: 2,
        topic: "Exceptions"
    },
    {
        id: 220,
        question: "What is 'std::exception' base class?",
        options: ["None","A template","A list","Common base for all standard exceptions"],
        answer: 3,
        topic: "Exceptions"
    },
    {
        id: 221,
        question: "What is 'std::logic_error'?",
        options: ["Exceptions for errors in program logic","Syntax error","Math error","None"],
        answer: 0,
        topic: "Exceptions"
    },
    {
        id: 222,
        question: "What is 'std::runtime_error'?",
        options: ["Always happens","Exceptions for errors only detectable at runtime","A crash","None"],
        answer: 1,
        topic: "Exceptions"
    },
    {
        id: 223,
        question: "What is 'std::bad_alloc'?",
        options: ["Thrown by file","Thrown by vector","Thrown when 'new' fails to allocate memory","None"],
        answer: 2,
        topic: "Exceptions"
    },
    {
        id: 224,
        question: "What is 'std::bad_cast'?",
        options: ["None","Thrown by int","Thrown by float","Thrown by dynamic_cast on references when it fails"],
        answer: 3,
        topic: "Exceptions"
    },
    {
        id: 225,
        question: "What is 'std::bad_typeid'?",
        options: ["Thrown when typeid is applied to null polymorphic pointer","No type found","Wrong type","None"],
        answer: 0,
        topic: "Exceptions"
    },
    {
        id: 226,
        question: "How do you re-throw the current exception?",
        options: ["throw e;","throw;","return;","None"],
        answer: 1,
        topic: "Exceptions"
    },
    {
        id: 227,
        question: "What is 'function-try-block'?",
        options: ["A loop","A small try","A try block that wraps the entire function body (including constructor initializer list)","None"],
        answer: 2,
        topic: "Exceptions"
    },
    {
        id: 228,
        question: "What is 'inline namespace'?",
        options: ["None","Fast namespace","Inside a class","Used for library versioning where members are hoisted to outer scope"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 229,
        question: "What is 'unnamed namespace'?",
        options: ["Replaces 'static' for internal linkage in a translation unit","No name","Global","None"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 230,
        question: "What is 'namespace alias'?",
        options: ["Short name","namespace my = very::long::name;","Custom name","None"],
        answer: 1,
        topic: "Basics"
    },
    {
        id: 231,
        question: "Which keyword prevents a class from being inherited?",
        options: ["static","sealed","final","private"],
        answer: 2,
        topic: "Inheritance"
    },
    {
        id: 232,
        question: "Which keyword prevents a virtual function from being overridden?",
        options: ["inline","const","static","final"],
        answer: 3,
        topic: "Polymorphism"
    },
    {
        id: 233,
        question: "What is 'covariant return types'?",
        options: ["Allowing a derived override to return a pointer/reference to a derived class instead of base","Returns same type","Multiple returns","None"],
        answer: 0,
        topic: "Polymorphism"
    },
    {
        id: 234,
        question: "What is 'object slicing'?",
        options: ["Cutting vectors","Losing derived part of an object when assigning derived object to base by value","Dividing memory","None"],
        answer: 1,
        topic: "Classes"
    },
    {
        id: 235,
        question: "How do you avoid object slicing?",
        options: ["Deleting data","Using more memory","Passing by pointer or reference","None"],
        answer: 2,
        topic: "Classes"
    },
    {
        id: 236,
        question: "What is 'std::vector::begin()' vs 'std::vector::cbegin()'?",
        options: ["cbegin is for integers","No difference","begin is faster","cbegin returns a const_iterator"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 237,
        question: "What is 'std::vector::data()'?",
        options: ["Returns pointer to the underlying raw array","Returns size","Returns data type","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 238,
        question: "What is 'std::vector::clear()' complexity?",
        options: ["O(1)","O(n) - calls destructors","O(log n)","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 239,
        question: "What is 'std::list' storage mechanism?",
        options: ["Balanced tree","Singly linked list","Doubly linked list","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 240,
        question: "What is 'std::list::sort()'?",
        options: ["None","A global sort","A manual sort","Member function to sort list (std::sort doesn't work on lists)"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 241,
        question: "Which container has the best cache locality?",
        options: ["std::vector","std::list","std::set","std::map"],
        answer: 0,
        topic: "Performance"
    },
    {
        id: 242,
        question: "What is 'std::set' keys uniqueness?",
        options: ["Can be duplicate","Always unique","Depends on size","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 243,
        question: "What is 'std::set::find()' complexity?",
        options: ["O(n)","O(1)","O(log n)","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 244,
        question: "What is 'std::unordered_set::find()' complexity on average?",
        options: ["None","O(log n)","O(n)","O(1)"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 245,
        question: "What is 'load factor' in unordered containers?",
        options: ["Ratio of elements to buckets","Number of buckets","Size of bucket","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 246,
        question: "What is 'rehashing'?",
        options: ["Deleting elements","Increasing buckets and redistributing elements when load factor exceeds threshold","Sorting buckets","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 247,
        question: "What is 'std::priority_queue' interface?",
        options: ["enqueue(), dequeue()","push(), pop(), front()","push(), pop(), top()","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 248,
        question: "What is 'std::bitset::test()'?",
        options: ["None","Tests all bits","Runs a test app","Checks value of specific bit"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 249,
        question: "What is 'std::string::substr()'?",
        options: ["Returns a part of the string","Replaces a part","Deletes a part","None"],
        answer: 0,
        topic: "Strings"
    },
    {
        id: 250,
        question: "What is 'std::string::find()' returns if not found?",
        options: ["-1","std::string::npos","0","nullptr"],
        answer: 1,
        topic: "Strings"
    },
    {
        id: 251,
        question: "What is 'std::string_view' in C++17?",
        options: ["A part of GUI","A string for viewing","A non-owning read-only view of a string (prevents copying)","None"],
        answer: 2,
        topic: "Strings"
    },
    {
        id: 252,
        question: "What is 'std::accumulate'?",
        options: ["None","Multiplies elements","Lists elements","Sums up all elements in a range"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 253,
        question: "Which header for 'std::accumulate'?",
        options: ["numeric","algorithm","cmath","math"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 254,
        question: "What is 'std::transform'?",
        options: ["Changes variable type","Applies a function to a range and stores the result","Moves data","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 255,
        question: "What is 'std::for_each'?",
        options: ["A list","A for loop","Applies a function to all elements in a range","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 256,
        question: "What is 'std::iota'?",
        options: ["None","Small values","Random values","Fills a range with sequential values"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 257,
        question: "What is 'std::all_of', 'std::any_of', 'std::none_of'?",
        options: ["Predicates to check conditions on a range","Math functions","Sorting functions","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 258,
        question: "What is 'std::count' vs 'std::count_if'?",
        options: ["No difference","Count counts instances; Count_if counts if predicate is true","Count is faster","Count_if is for strings"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 259,
        question: "What is 'std::min_element' returns?",
        options: ["The index","The value","Iterator to the minimum element","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 260,
        question: "What is 'std::nth_element'?",
        options: ["None","Finds N-th item","Deletes N-th item","Partially sorts a range so that the N-th element is correct"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 261,
        question: "What is 'std::stable_sort'?",
        options: ["A sort that preserves order of equal elements","A fast sort","A slow sort","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 262,
        question: "What is 'std::partition'?",
        options: ["Divides container","Reorders elements based on predicate (true elements first)","Deletes elements","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 263,
        question: "What is 'std::lower_bound' and 'std::upper_bound' on sorted range?",
        options: ["Deleting edges","Finding edges","Binary search helpers","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 264,
        question: "What is 'std::binary_search' returns?",
        options: ["None","iterator","index","bool (true if found)"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 265,
        question: "What is 'std::equal_range'?",
        options: ["Returns a pair of lower_bound and upper_bound","Checks if equal","Matches ranges","None"],
        answer: 0,
        topic: "STL"
    },
    {
        id: 266,
        question: "What is 'std::merge'?",
        options: ["Combines anything","Merges two sorted ranges into one","Moves data","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 267,
        question: "What is 'std::inclusive_scan' in C++17?",
        options: ["A filter","A loop","Prefix sum including current element","None"],
        answer: 2,
        topic: "STL"
    },
    {
        id: 268,
        question: "What is 'execution policies' in C++17?",
        options: ["None","System rules","Build rules","Allowing STL algorithms to run in parallel (std::execution::par)"],
        answer: 3,
        topic: "Performance"
    },
    {
        id: 269,
        question: "Which header for 'execution policies'?",
        options: ["execution","parallel","std","algo"],
        answer: 0,
        topic: "Performance"
    },
    {
        id: 270,
        question: "What is 'std::filesystem' in C++17?",
        options: ["A hard drive tool","Library for managing files, directories, paths","A cloud tool","None"],
        answer: 1,
        topic: "I/O"
    },
    {
        id: 271,
        question: "What is 'std::byte' in C++17?",
        options: ["A small int","A char","A distinct type for raw data (non-character)","None"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 272,
        question: "What is 'nested namespaces' in C++17?",
        options: ["None","Namespace in a class","Small namespace","namespace A::B::C { ... }"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 273,
        question: "What is 'if with initializer' in C++17?",
        options: ["if (int x = get(); x > 0) { ... }","New if syntax","Initializing if","None"],
        answer: 0,
        topic: "Basics"
    },
    {
        id: 274,
        question: "What is 'std::clamp' in C++17?",
        options: ["Clips values","Ensures a value is within [min, max] range","Sets values","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 275,
        question: "What is 'std::gcd' and 'std::lcm' in C++17?",
        options: ["Graphs","Encryption","Math functions for Greatest Common Divisor and Least Common Multiple","None"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 276,
        question: "What is 'std::reduce' vs 'std::accumulate'?",
        options: ["None","No difference","Reduce is for strings","Reduce can be parallelized (order of operations is not fixed)"],
        answer: 3,
        topic: "STL"
    },
    {
        id: 277,
        question: "What is 'std::invocable' concept?",
        options: ["Checks if a type can be called with arguments","A function","A template","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 278,
        question: "What is 'std::contiguous_range' concept?",
        options: ["Checks size","Checks if range elements are stored contiguously in memory","Checks counts","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 279,
        question: "What is 'jthread' in C++20?",
        options: ["Just thread","Joint thread","A thread that automatically joins on destruction","None"],
        answer: 2,
        topic: "Multithreading"
    },
    {
        id: 280,
        question: "What is 'stop_token' in C++20?",
        options: ["None","End code","Break loop","Mechanism to request a thread to stop gracefully"],
        answer: 3,
        topic: "Multithreading"
    },
    {
        id: 281,
        question: "What is 'std::source_location' in C++20?",
        options: ["Retrieves info about file, line, function at compile time (replaces __LINE__ etc)","Finds code on disk","A map of code","None"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 282,
        question: "What is 'std::bit_cast' in C++20?",
        options: ["Changing bits","Bit-wise reinterpretation (safer than reinterpret_cast)","Fast casting","None"],
        answer: 1,
        topic: "Advanced C++"
    },
    {
        id: 283,
        question: "What is 'std::endian' in C++20?",
        options: ["A variable","End of code","Enables checking native byte order (Big vs Little Endian)","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 284,
        question: "What is 'std::numbers' in C++20?",
        options: ["None","A list of ints","A counter","Mathematical constants like pi, e, etc in <numbers> header"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 285,
        question: "What is 'char8_t' in C++20?",
        options: ["A type for UTF-8 encoded characters","A small int","A bool","None"],
        answer: 0,
        topic: "Data Types"
    },
    {
        id: 286,
        question: "Which keyword used to import modules in C++20?",
        options: ["include","import","use","require"],
        answer: 1,
        topic: "Environment"
    },
    {
        id: 287,
        question: "What is 'consteval' in C++20?",
        options: ["Fast constant","Always constant","Specifies that a function must produce a compile-time constant","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 288,
        question: "What is 'constinit' in C++20?",
        options: ["None","Always initialized","Fast initialization","Ensures a variable is initialized at compile time (prevents static fiasco)"],
        answer: 3,
        topic: "Advanced C++"
    },
    {
        id: 289,
        question: "What is 'likely' and 'unlikely' attributes in C++20?",
        options: ["Hints for branch prediction optimization","Probabilities","Randomness","None"],
        answer: 0,
        topic: "Performance"
    },
    {
        id: 290,
        question: "What is 'std::atomic_ref' in C++20?",
        options: ["Atomic pointer","Allows atomic operations on non-atomic objects","Reference only","None"],
        answer: 1,
        topic: "Multithreading"
    },
    {
        id: 291,
        question: "What is 'std::barrier' in C++20?",
        options: ["A block","A wall","Synchronization primitive for thread coordination","None"],
        answer: 2,
        topic: "Multithreading"
    },
    {
        id: 292,
        question: "What is 'std::latch' in C++20?",
        options: ["None","A lock","A timer","A downward counter used for synchronization"],
        answer: 3,
        topic: "Multithreading"
    },
    {
        id: 293,
        question: "What is 'std::counting_semaphore' in C++20?",
        options: ["Lightweight synchronization primitive","Measures semaphores","A list","None"],
        answer: 0,
        topic: "Multithreading"
    },
    {
        id: 294,
        question: "What is 'std::ssize()' in C++20?",
        options: ["Returns small size","Returns signed size of a container","No difference from size()","None"],
        answer: 1,
        topic: "STL"
    },
    {
        id: 295,
        question: "What is 'std::bind_front' in C++20?",
        options: ["Binds code","Binds variables","A simpler alternative to std::bind for binding first arguments","None"],
        answer: 2,
        topic: "Advanced C++"
    },
    {
        id: 296,
        question: "What is 'designated initializers' (C++20)?",
        options: ["None","Named variables","Fast initialization",".name = \"val\" style initialization for aggregates"],
        answer: 3,
        topic: "Basics"
    },
    {
        id: 297,
        question: "Which header is for C++20 date and time extensions?",
        options: ["chrono","time","date","calendar"],
        answer: 0,
        topic: "Advanced C++"
    },
    {
        id: 298,
        question: "What is the primary difference between C and C++?",
        options: ["C++ is faster","C++ is object-oriented, C is procedural","C is for hardware","None"],
        answer: 1,
        topic: "General"
    },
    {
        id: 299,
        question: "Which of the following is not a C++ keyword?",
        options: ["class","try","string","catch"],
        answer: 2,
        topic: "Basics"
    },
    {
        id: 300,
        question: "What is the purpose of C++ core guidelines?",
        options: ["None","To teach C++","To explain compiler errors","To provide best practices for modern C++ development"],
        answer: 3,
        topic: "General"
    }
];

export default cppQuestions;

