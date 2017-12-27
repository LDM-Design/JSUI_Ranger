# JSUI_Ranger

A JSUI device for Max which is a single slider allowing you to set minimum and maximum values and to display the range across the slider. 

The RGBA values of the slider can be set in the object inspector.

The minimum and maximum values are passed from the first 2 outlets, and the values for the display are passed from the 3rd outlet as a list. If this list is passed into the inlet with the prepended message 'Recall' then this will recall the values and display.
