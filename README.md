###FREE CODE CAMP###
#### BONFIRE: Check for Palindromes####
[Link to Test](http://freecodecamp.com/challenges/bonfire-check-for-palindromes)

<p>
This bonfire is a simple enough test - Check to see if a word / string is a palindrome.  On the face it is easy, but soon we being to realize that punctuation and case are going to be the issues here. 
<p>
My thoughts were to convert the string to an array and then simply compare the array to its reverse.  Up to this point I hadn't used any Regex, but a little bit of research [here](http://regexone.com/lesson/excluding_characters) got me the necessary info for [^a-z]. What is happening here is that the string is being converted to lower case, and it is removing all characters that are <em>not</em> (lowercase) a-z(spaces, punctuation). A bit of further research told me that /g would search the whole string globally (as without it it would hit the first one and then stop.)
<p>
 ![image](https://cloud.githubusercontent.com/assets/12467136/9394182/d5365fd0-473b-11e5-9266-74e9d897d5c3.png)
<p>
With that taken care of I now can make an array that I can easily reverse and compare.
<p>
![image](https://cloud.githubusercontent.com/assets/12467136/9394347/da4c1e6e-473c-11e5-9ace-35c5dba6a063.png)
<p>
In my mind it seemed that having an array for the forward string and reverse string (note for future calling it fArray /rArray would be more semantic) would be easier for comparing. So I now have two arrays, one for each direction, waiting to be compared. (a bit of console logging helped verify of course).
<p>
at this point I simply tried to compare fString & rString but the results needed to not be in arrays, so adding the .join() in the comparison was my response!
<p>
![image](https://cloud.githubusercontent.com/assets/12467136/9394471/7ecda07a-473d-11e5-8368-b821bfcad298.png)
<p>
This might not have been the most <strong>DRY</strong> method, however I am pretty happy with the way I made it work.  I found some other methods while reading of people using while loops [here](https://www.gorkahernandez.com/blog/fcc-bonfire-series-105-check-for-palindromes/) but that seemed in-elegant to me.  

