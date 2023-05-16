# README

# Adventure Blog 

This is a website to showcase some of the adventures that I have been on. One of my passions is being outdoors and seeing new places. 
Scroll through to see some of my favorite trips or reach out to me in regards to a trip that you have been on that I can post on my adventure blog!

## Demo
https://adventure-blog.onrender.com


## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before cloning this project make sure that you have the right enviorment setup. This application was created with Ruby on Rails and postgres as a database. With a React Frontend. 

* npm
  ```sh
  npm install npm@latest -g
  ```
or if you already have npm install make sure it is up to date. 

* npm 
  ```sh 
  npm -v
  ```
  Make sure that you have Ruby installed as well. First check to see if you already have rails installed. 
  
  * Ruby 
   ```sh 
    ruby -v 
   ```
   * Ruby 
    ```sh 
     gem install rails 
     ```
    
### Installation 

Next you are going to want to install the app into a new directory. 

1. Clone Repo 
  ```sh 
    git clone https://github.com/mitchellj04/adventure-blog.git
  ```
2. Install dependencies   
  ```sh 
   bundle install 
   ```
4. Create the database and schema 
  ```sh 
   rails db:create db:migrate 
  ```
5. Seed the existing data   
  ```sh 
  rails db:seed
  ```
6. CD into the client folder and install packages 
  ```sh 
    npm install 
  ```
  
  Once this is done all of the dependancies and packages should be setup for you to run the server and start the localhost
  
  1. Server
    ```sh 
      rails s 
   ```
  2. Local host 
  ```sh 
  cd client 
  npm start 
  ```

## Technologies 

- Ruby on Rails 
- Postgres 
- Javascript 
- React



## Navigation 

### Homepage 
The homepage displays all of the newest blog posts that have been submited. 
On the homepage you have the option to filter through posts by searching or to go to different categories to filter the search by category 
At the top on the navigation menu there is a button linked to instagram to redirect the user. 
Then there are four other naviation menus:
1. Home
2. About 
3. Create 
4. Contact 

### About 
The about me page is to share some information about the creator which is me. There is a navigation menu at the bottom which displays some of the categories that were on the home page which you can use to filter difference blog posts. 

### Create 
The create page is where new blog posts are added. With the ability to add a title which will be displayed over a post, then a description where you add details about the trip and what you liked or disliked about it. Add one of your favorite images to the new post by adding a link to a picture which shows your adventure. Then select the category in which is blogs this is so that is can be filtered later. 

### Contact 
The contact page is just so people can contact me with any trips that they have been on they would want me to add to the blog. Or even individuals who share in some of the same interests that may want to plan a trip in the future for us to go on. 

##Contact 

Justin Mitchell 

Email: mitchelljm04@gmail.com 
Phone: 203-909-0635 

## Creator 

JUSTIN MITCHELL 


