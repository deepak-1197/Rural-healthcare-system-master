# Rural-healthcare-system
 
## Steps To Run this Application
1) Install Expo-cli from playstore in ur mobile device.

2) Install Node Package Manager In your PC (or simply insall Node.js)

3) Open CMD and type npm

4) If any error comes in step 3 then try to set environmental Variable for node, and if this dosent work too, then do some googling 

If no error in step 3, then only proceed further

5) Clone this repository

6) Open CMD and go to the file location of local repository

7) Type "npm i" in CMD

If it dosen't work, try same things with git bash

8) Then type "npm i bcrypt express jsonwebtoken mongoose nodemon"

9) Now Open three seperate Terminals and all three should be pointing towards the local repository 

10) In first Terminal type "npm start"

11) In second Terminal type "ngrok http 3000", and you will receive a http address, copy that addrees and save it to userDataApi.js file

12) In third Terminal type "cd trackserver" and then "npm run dev"

13) Now a development server in your default browser will pop up, change it to Tunnel instead of LAN and scan the QR code, and app should be working fine
