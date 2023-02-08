let a = document.firstElementChild.lastElementChild.firstElementChild
// console.log(a)

a.innerHTML="santhosh"

a.style.color="yellow"


// query selector
/*
=> The querySelector() method returns the first element that matches a CSS selector.

= >To return all matches (not only the first), use the querySelectorAll() instead.

=> Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

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
b.style.color= "red"

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// getElementByTagName()

/**
* => The getElementsByTagName() method of Document interface returns an "HTMLCollection/(array)" of elements with the given tag name

* => A string representing the name of the elements. The special string * represents all elements in an array
* 
*/
let tag = document.getElementsByTagName("li")//[1]
console.log(tag)

tag.length // 3 

// console.log(tag[2])
