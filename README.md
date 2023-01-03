# Color Saver App

- [x] Prepare App for devlopment
- [x] Adding initial color objects in a array
- [x] Adding color Cards
- [x] Adding Color Add Form to the Header
- [ ] Refactor form elements
- [ ] Edit color of cards
- [ ] Adding validation to the input field
- [ ] Add feedback to coping the colorhex to the clipboard
- [ ] Add color API to get color names
- [ ] Add color pallet
- [ ] Edit color pallet header

![State of App 1](public/App-State-Overview-1.png)

State of the App at launch.
You can add more colors to list below by either picking a color in the color wheel or write the color hexcode (e.g. #cccccc)

For now the text input only accepts 6-digit hexcode with `#` at the beginning.
Tested with 3-digit hexcode e.g. #ccc or #fff, but some reason it set the colorPicker to black.
The color card still works, with 3-digit hexcodes.
Still needs some validation and modifactions after the input got submitted from the user.

If you select a color with the color wheel it will fill out the text input for you.

The text input is required, it's autofilled with the color wheel.

Besides that there is no validation yet.
You can still write empty strings, but it will leave the the color empty, creating a blank card.
You can still delete the blank card with the delete button, since every card is created with a unique ID.
I should add a default color in case the input fails.

Clicking the cards will copy the color hexcode to the clipboard.
No feedback added yet, besides a console.log.

---

## Validation process idea:

Check if input length is 7 (e.g. #cccccc)
Check if input contains `#`.
Maybe add a regex pattern to the input to ensure 7 digits?
But #ccc is still a valid colorhex.
Maybe turning the shorthand hexcodes to fullsize one?

Some conditions for the input.

1. Check length === 7  
   if true JMP 3.
2. Check length === 4  
   if true JMP 3.
3. Check first char === #  
   if true JMP 4

The input should have a length of 7 with # included.
Transforms shorthand hexcodes.
Slice at 1 at the rest twice.
The first char should be a #
Maybe there is validation methode to check for hexcodes.
Needs more google.

---

## Refactoring the code.

Move the form styled components to there own components.
Move the handle functions to util.
Don't forget to add paramenter and add arguments when calling the function.
Pass props to the components.

Add props to the color form to remove the warning.

---

## Editing the color hexcode.

Idea: Make it similar to the form. Show the the hexcode as placeholder.
By pressing the name, open the input field.
Similar methode for the header?
There should be a better methode to do this.
Needs more google.

---

## Add feedback to copy to the clipboard

open a modal with the text e.g. 'Copied #cccccc'
animate from the top.

Or place text to bottom of the card.

---

##
