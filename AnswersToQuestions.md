# Answers to questions :
1.Why I used old-style react instead of new-style ECMA script ?
I suppose this question was caused by lines of code like var BookingsList = React.createClass,instead of 
class BookingsList extends React.Component .   I can't claim that the first version is better or worst just because I haven't 
enough experience with it to use, and I am new to react,so I was investigating which way is better, and after reading articles like
http://blog.krawaller.se/posts/5-reasons-not-to-use-es6-classes-in-react/ I decided to go with first variant just because it
seemed a bit easier for me to get started with this technology.I suppose that using ES6 style is now conventional,and in my further 
projects  I would prefer ES6 style


2.Why I didn't separated CSS and JS code from HTML?
The reason was tied with spring framework settings.I ran into problems that links from static folder that are normally used to 
store css and js files to import them for html pages simply didn't worked,and I had a little time run out so I decided not to waste
time on finding reasons of it.It was fixed and I separated one from another now code looks better.

3.What about mixing Jquery and react-dom in add.html file?
Yes,I truly agree.This is my fail.This was caused because I had my controllers JSON consuming,so I decided to pass form data as a 
JSON.But there is a better way,spring controller methods also can consume default form submit type - "x-www-form-urlencoded" . So 
after making addBooking method to consume this type,jquery part of that document are unnecessary .

4.Delete and  update fuctions.
I forgot about them,my fail.Delete feature is added.The last thing I have to implement now is update.


Please,feel free to contact me any time with warnings/suggestions.
Thanks!
