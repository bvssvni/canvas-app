canvas-app
==========

Javascript framework for developing browser apps.  
BSD license.  
For version log, view the individual files.  

##Introduction

This framework is inspired by the LÖVE 2D game engine:  
https://love2d.org/

Setting up the same html code over and over is boring.  
I started to make this is because I wanted to have a "main.js" file containing the program instead of html.  
Now I can just copy "index.html" and the "app" folder and create a "main.js" file.  

##App Object

    app.timer     - Methods for the game loop.
    app.graphics  - Methods for various 2D graphics drawing.
    app.context   - The 2D cairo context with low-level drawing routines.
    app.keyboard  - Methods for dealing with keyboard input.

##Adjusting FPS and UPS rate

FPS (Frames Per Second) and UPS (Updates Per Second) controls how often to draw to the screen and update the game logic.  

    app.timer.setFPS(60); // Set frames per second to 60.
    
    app.timer.setUPS(120);  // Set updates per second to 120.
    
The method 'app.timer.getDelta()' returns the fixed update rate.  
