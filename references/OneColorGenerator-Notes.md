Project Workflow

1. Idea Explanation
    - Done!

2. User stories
    - As a user, I want (---), so that (---)
        - to push a button / get a new color (1)
        - html code of current color / I can use it in another program (2)
        - to find a color / I can use it in my design projects (4)
        - button to copy html code / I can drop it into my CSS (5)
        - the name of the current color / I know what it's properly called (6)
        - to understand how to use this site / find random colors and know why (3)

3. Wireframe
    - (In progress)

4. Prioritize user stories
    - (Numbered in step 2)

5. Flowchart for each user story
    - (In progress - will be in G-Drive)

6. Break down user stories into flowcharts (?)
    - Same as above?

7. Create issues + DoD - Definition of Done
    
    Minimum Viable Product
    
    1. Push the generate button to get a new color on the screen

        - Create a button with the text "push to generate"
            - Click listener on button
                - A function here to console.log to see if responsive
                    - DoD - button is responsive! (console.log to test)

        - Button makes AJAX call to TheColorAPI
            - Return HTML hex code of a color
                - DoD - AJAX call works!

        - Needs some display/render function to call here
            - Display the pulled color code on the background (render function)
                - DoD - new color displays on screen!

    2. Get HTML hex code to display on screen
        
        - Inside the same AJAX call function from step 1
            - Create a .text() command to display name of color inside a div in HTML
                - DoD - name of color displays on screen!

    3. Tutorial - dropdown box on screen

        - Create a button to tie to hidden div icon (something like a ? icon/glyph)
            - Click listener on button
                - Function to console.log
                    - DoD - button is responsive!

        - Create a hidden div in HTML inside ? button (class = "hidden")
            - Add some content to test visibility
                - DoD - div does not appear on page!

        - Make an addClass function to button to reveal hidden div
            - DoD - content appears on screen!

        - Write a short description of the website and how it works
            - DoD - content appears on screen and explains the website properly!



8. ZenHub
    - Put issues from step 7 into ZenHub

9. Feature Dump
    - New color animates onto screen (slide up)
    - Tutorial on how to use the site
    - Google/Bing/Yahoo search for photos by current color
    - Name of color on screen to define it
    - Save color into drawer

10. Scrum - morning meetings


11. Retrospective