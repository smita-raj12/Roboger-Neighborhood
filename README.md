## Application Name:

Mr. Roboger's Neighborhood

## Name of contributor:

Smita   

## Description of the project:

This a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

1. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
2. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
3. Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
4. All message displays in Forwarding direction and Backward direction.

## Live Site:

[Link](https://smita-raj12.github.io/Roboger-Neighborhood)

## Technologies used:

1. HTML and CSS.

2. jQuery and Javascript.

3. Bootstrap.
    

## Complete setup/installation instructions:

* Go to my project       

* Clone this repository to your desktop.

* Navigate to the directory.

* Open program/index.html on your choice of code editor.

* If you are using Vscode, open the command palette and search for `live server: open with live server`


## Known bugs

`None.`     

## License information with a copyright and date:

 [MIT](https://opensource.org/licenses/MIT)

## Contact information:
   
* EmailId:smita.raj12@gmail.com


# Tests

## beepBoop()

- *Test*: Number contains "0" it should return "0"
- *code*: beepBoop(0)
- *Expected Output*: 0

##

- *Test*: Number contains "1" it should return "Beep!"
- *code*: beepBoop(1)
- *Expected Output*: "Beep!"

##

- *Test*: Number contains "2" it should return "Boop!"
- *code*: beepBoop(2)
- *Expected Output*: "Boop!"

##

- *Test*: Number contains "3" it should return "Won't you be my neighbor?"  
- *code*: beepBoop(3)
- *Expected Output*: "Won't you be my neighbor?"

##

- *Test*: Number contains "4" it should return "0,Beep,Boop,Won't you be my neighbor?,"4"
- *code*: beepBoop(4)
- *Expected Output*: "0,"Beep","Boop","Won't you be my neighbor?",4

##

- *Test*: Number contains "13" The should replace with "Won't you be  my neighbor?" 
- *code*: beepBoop(13)
- *Expected Output*: "0,----------,Won't you be my neighbor?"

##

- *Test*: Number contains "21" it should replace with "Boop"       
- *code*: beepBoop(21)
- *Expected Output*: 0,"Beep","Boop","Won't you be my neighbor",4,5
 -----------"Boop" 

##

- *Test*: Number contains "32" it should replace with "Won't you be
       my neighbor"        
- *code*: beepBoop(32)
- *Expected Output*: "0,"Beep","Boop",Won't you be my neighbor",4,5,6------,"Won't you be my neighbor