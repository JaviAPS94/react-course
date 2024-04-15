# How Navigation Works with React

- User types our address in

    - Always send back the index.html file
    - When app loads up, look at address bar and use i to decide what content to show

- User click a link or press 'back' button

    - Stop the browser's default page-switching behavior!
    - Figure out where the user was trying to go
    - Update content on the screen to trick the user into thinking they swapped page
    - Update address bar to trick the user into thinking they swapped pages.