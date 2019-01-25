/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var spanElement = document.getElementById('matCount');
spanElement.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var msgElement = document.getElementById('msgCount');
msgElement.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var fullNameElement = document.getElementById('fullname');
fullNameElement.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var ageElement = document.getElementById('age');
ageElement.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var jobElement = document.createElement('div');
jobElement.id = 'job';
jobElement.innerHTML = 'Clown and Restauranteur';
data.appendChild(jobElement);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var hobbiesElement = document.createElement('div');
hobbiesElement.id = 'hobbies';
hobbiesElement.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(hobbiesElement);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var locationElement = document.createElement('div');
locationElement.id = 'location';
locationElement.innerHTML = 'Honolulu, Hi'
data.appendChild(locationElement);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var wantsElement = document.createElement('div');
wantsElement.id = 'wants';
wantsElement.innerHTML = 'Looking for a Mrs. McDonald';
data.appendChild(wantsElement);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var pro2Element = document.createElement('p');
pro2Element.id = 'pro2'; 
pro2Element.innerHTML = "You may have heard of 'super sizing it' and let me tell you, I am open to women with not only super sized hearts, but super sized butts. Like my good ol friend sir mix-a-lot says, 'I like big butts and cannot lie.' Supersize me baby."
data.appendChild(pro2Element);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var firstNameElement = document.getElementsByClassName('firstName');
firstNameElement[0].innerHTML = 'Wendy';


//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var otherAgeElement = document.getElementsByClassName('otherAge');
otherAgeElement[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var statusElement = document.getElementsByClassName('status');
statusElement[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

var firstNameElement = document.getElementsByClassName('firstName');
firstNameElement[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

var otherAgeElement = document.getElementsByClassName('otherAge');
otherAgeElement[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto


 var firstNameElement = document.getElementsByClassName('firstName');
 firstNameElement[2].innerHTML = 'Dom';

 var otherAgeElement = document.getElementsByClassName('otherAge');
 otherAgeElement[2].innerHTML = 34;

 var statusElement = document.getElementsByClassName('status');
statusElement[2].innerHTML = 'Single Sailor';

var mottoElement = document.getElementsByClassName('motto');
mottoElement[2].innerHTML = 'Lookin for that Special Sauce';

var newProfileElement = document.getElementsByClassName('other')
image.src = "http://www.worstpreviews.com/images/headlines/headline13649.jpg" ;
newProfileElement[2].innerHTML = "http://www.worstpreviews.com/images/headlines/headline13649.jpg" ;
