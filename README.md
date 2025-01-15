# Workshop-0-task
Workshop 0 task

## Plan for this project
A moving green circle that can bounce back when it reaches the eage of the canvas. 

## Changes made during coding
I added more shapes with different colours - circle, square and triangle
Each shape has a different trajectory
- To achieve this, I added a third variable z
- Shape that move diagnoly downward --- x-axis = x, y-axis = x
- Shape that move diagnoly upward --- y-axis using the variable z, z = -x
- Changed background colour to pink
- Added lines as the motion trajectories of these shapes

### Problems met
At the start of the code, the variable y cannot equals 0, since when y = 0, thte shape will not move, therefore the yPos can never meet the conditionals. 

I found that it is hard to make the track for the triangle a straight line if I try to connect two lines from each edge of the
triangle.
- I tried to make a single line connect two corners of the canvas - a straight line but the line is on the top of the shape
- I move the code for the line to the top of the draw function - but because of the triangle transparency, we can still see the line.
<img width="1440" alt="截屏2025-01-15 22 28 02" src="https://github.com/user-attachments/assets/7a3c71e1-9c1f-42fe-9d09-83d5f5306713" />
- At last, I figured out that I can separate the line by using the straight line I made plus or minus the distance that I want to adjust.
<img width="1440" alt="截屏2025-01-15 22 28 23" src="https://github.com/user-attachments/assets/642e9b51-eb8f-408e-ab86-aa4878643877" />

### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-0-task/
