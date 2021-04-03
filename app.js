// Chapter 17
// Q.1
var arr = [
    [1, 2],
    [2, 3],
    [3, 4]
]

// Q.2
var arr1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

// Q.3
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

// Q.4
var num = +prompt("Enter the number to show its multiplication table")
var len = +prompt("Enter Length multiplication table")
document.write("Multiplication table of " + num)
document.write("Length " + len)

for (var i = 1; i <= len; i++) {

    document.write(
        num + "x" + i + "=" + (num * i) + "<br>"
    )
}

// Q.5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[0] + "<br>")
}

// Q.6
// a
document.write("Counting: <br>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ")
}
// b
document.write("Reverse Counting: <br>")
for (var i = 10; i <= 1; i--) {
    document.write(i + ", ")
}
// c
document.write("Even: <br>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ", ")
}
// d
document.write("Odd: <br>")
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ", ")
}
// e
document.write("Series: <br>")
var k = "k"
for (var i = 2; i <= 20; i = i + 2) {
    document.write(i + k + ", ")
}

// Q.7
var check = prompt("Welcome to ABC Bakery, What do you want to order Sir/Ma'am")
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
for (var i = 0; i <= A.length; i++) {
    if (check === A[i]) {
        document.write(A[i] + " is <b> available </b> at index" + i + " in our bakery")
        break
    }
}
if (check !== A[i]) {
    document.write("We are sorry, " + A[i] + " is <b> not available </b> in our bakery")
    break
}

// Q.8
var A = [24, 53, 78, 91, 12]
var largest = 0;

for (i = 0; i <= A.length; i++) {
    if (A[i] > largest) {
        var largest = A[i];
    }
}

// Q.9
var A = [24, 53, 78, 91, 12]
var largest = 100;

for (i = 0; i <= A.length; i++) {
    if (A[i] < largest) {
        var largest = A[i];
    }
}

// Q.10
for (var i = 1; i <= 100; i = i + 5) {
    document.write(i + ", ")
}



// CH 20
// STRING Methods

// Q.1

var a = prompt("First Name")
var b = prompt("Last Name")
var fullname = a + " " + b
alert("Welcome!" + fullname)

// Q.2

var a = prompt("Your Favourite mobile model")
document.write("My favourite phone is: " + a + "<br>" + "Lenght of string: " + a.length)

// Q.3

var a = prompt()


// Q.4

swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
    (swapcase('AaBbc'));