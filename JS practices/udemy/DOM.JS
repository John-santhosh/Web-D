let a = document.firstElementChild.lastElementChild.firstElementChild
// console.log(a)

a.innerHTML="santhosh"

a.style.color="yellow"


// query selector
/*
=> The querySelector() method returns the first element that matches a CSS selector. //document.querySelector("#list li")

= >To return all matches (not only the first), use the querySelectorAll() instead. //document.querySelectorAll("#list li")

=> Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

* => we can also use querySelector to select class and id by using .className (querySelector(".className")) and #id (querySelector("#id")) , and even more we can combine our selectors and query for something for something specific (querySelector("li a")),(querySelector("#list a"))
*/

document.querySelector("input").click()

/*
So you can see that our objects inside the DOM can have properties and methods. 

** Now properties describe something about the object and

** The methods are the things that the object can do.

** a method is something that an object can do, so it has to be associated with an object.

*/
let b = document.firstElementChild.lastElementChild.querySelector("ol").lastElementChild

b.innerHTML="santhosh"
b.style.color= "pink"

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// getElementByTagName()

/**
* => The getElementsByTagName() method of Document interface returns an "HTMLCollection/(array)" of elements with the given tag namea

* => A string representing the name of the elements. The special string * represents all elements in an array
* 
*/
let tag = document.getElementsByTagName("li")//[1]
// console.log(tag)

tag.length // 3 

// console.log(tag[2])


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// getElementsByClassName()

/**
* => The getElementsByClassName() method returns a collection of elements with a specified class name(s).
* => method returns an HTMLCollection.
* => The getElementsByClassName() property is read-only.
*/

document.getElementsByClassName("item")//[0]

// document.getElementById("")

document.getElementById("list")

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// classList 

// The classList property is read-only, but you can use some methods  to add, toggle or remove CSS classes from the list add(), remove() , toggle() ... etc 

document.querySelector("#title").classList.toggle("johnClass")

document.querySelector("#title").classList.add("johnClass")

document.querySelector("#title").classList.remove("johnClass")

// =-=-=-=-=-=-=-=-=-=-=-=-
// innerHTML vs textContent

/*
innerHTML  will return the every html element withing the specified object 

//document.querySelector("#title").innerHTML
will return every elements with the "id"

//document.querySelector("#title").textContent
// will return only the text inside the "id"
*/

// =-=-=-=-=-=-=-=-=-=-=-
// getAttribute()

// document.querySelector("a").getAttribute("href") 
// => www.google.com

// setAttribute()

// document.querySelector("a").setAttribute("href", "www.bing.com")
// => www.bing.com

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
addEventListener()//https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// syntax 
// element.addEventListener(event, function, useCapture);
//=> Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

// example
// element.addEventListener("click", mySecondFunction);


