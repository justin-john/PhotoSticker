Photo sticker application
Create an application using HTML, CSS and JavaScript where you can upload a photo
and add stickers on top. Send us your submission as a zip file.

Tips and directions

● Don't worry about styling, but make sure the user interface is easy to understand.
● Use FileReader and data URIs for displaying uploaded images.
● Please use existing frameworks and libraries that will save you time! We like AngularJS,
but something else is fine too.
● Don't copy/paste code without attribution.


Structure
● The application has two columns: The photo area on the left, a sidebar containing the
sticker library on the right.
● The sticker library is 150px wide, the photo area fills the remaining width.
Photo area
● Initially, the photo area displays a file input field for uploading a new photo.
● Display the photo after a valid image has been picked in the input field.
● Show a "Start over" button in the top left corner when a photo is uploaded.
● When the "Start over" button is clicked, remove the photo and stickers and allow
uploading a new photo.



Sticker library sidebar

● The library displays an "Upload new sticker" button on top.
● When the "Upload new sticker" button is clicked, display a form in a modal window.
● The form in the modal window has a file input field, a title text field and a submit button.
○ All fields are required. Disable the submit button while any field is empty.
○ When the form is submitted, close the modal and add the sticker to the library.
● The stickers are displayed below the "Upload new sticker" button.
● A sticker in the library displays the image and title.
● Resize sticker images in the library area to fit within 150 x 150px.
● Allow dragging stickers from the sidebar and dropping them onto the photo.
● When a sticker is dropped onto the photo, it stays in position.
● The same sticker can be added multiple times.

Bonus features
These are optional. Pick one or more in case you still have energy left!
● When a user leaves the application and returns later, display the state of how the user
left the application.
○ Use localStorage for data persistence.
○ Display a warning to the user and stop storing the data in localStorage while
the total data size exceeds 5MB.
● Inform the user of input errors in the "Upload new sticker" form by displaying a
userfriendly
message below the input field.
● Allow resizing and repositioning stickers after they were dropped.
● When you hover a sticker in the sidebar or on the photo, display a delete button in the
top right corner that deletes the sticker.