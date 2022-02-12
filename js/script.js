/*
* Conor O'Brien
* SDEV328 1/13/2021
* script.js
* */

function docWriteNums()
{
    for (let x = 1; x <= 100; x++)
    {
        if(x % 3 === 0 && x % 5 === 0)
        {
            document.write("<p>Hee Haw!</p>");
        } else if (x % 3 === 0)
        {
            document.write("<p>Hee!</p>");
        } else if (x % 5 === 0)
        {
            document.write("<p>Haw!</p>");
        } else
        {
            document.write("</p>" + x + "</p>");
        }
    }
}