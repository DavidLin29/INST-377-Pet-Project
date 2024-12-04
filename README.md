# INST377 Group Project: Pet Adoption Website

- **Group Members**: Fadel Muzahdi, David Lin, Fatima Castillo, Pedro José da Rocha Mendonça, Rheymar Devera
- **Title**: Pet Haven (Temporary)
- **Project Description**: Our project goal is to combat the increasing problem of overcrowding in shelters around the United States. To achieve this, we leverage the use of the PetFinder API to obtain information about rescue groups, donation centers, and most importantly, pets. With this API, we created a comprehensive and user-friendly website for users looking to donate to the cause or adopt a pet.
- **Target Browsers Description**: Our project is best utilized using computers with Google Chrome. However, it will also be available to be used, although not as optimal, through devices with iOS, or Android.
- [Go to Developer Manual](#developer-manual)

---

## Developer Manual
### Installation

1. Clone the repository on your local directory:
```
git clone https://github.com/DavidLin29/INST-377-Pet-Project.git
```
2. Open the project directory:
```
For example: cd ./INST-377-Pet-Project.git
```
3. Ensure that Node.JS is installed. If not, use the link below to follow instructions regarding installation:
```
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
```
4. Ensure that all of the dependencies used in the project are installed within the system before usage: Express.JS, Nodemon, Supabase. If not, use these commands in the terminal:
```
npm install express
```
```
npm install nodemon
```
```
npm install @supabase/supabase-js
```
5. Finally, the project can be run through this command:
```
npm start
```
6. When the server is running succesfully, the messsage "App is Running" will be displayed in the terminal.
7. This website application can also be accessed at http://localhost:5500 through your browser.

### API Development
- We use the free version of the PetFinder API. *** ADD MORE DETAILS POST-COMPLETION ***
- We use the Leaflet API to create a Map Display that provide visual matching system for ease of use.
- We are connected to an external database that we created through Supabase. For this API, we use the POST endpoint to gather sensitive information that users fill out from the Contact page.