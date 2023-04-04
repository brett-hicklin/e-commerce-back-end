# e-commerce-back-end

## Description

In this project, I helped put together the back end for an e-commerce site. I created the models based off given criteria, and completed the routes needed to create, read, update, and delete content for the given paths. This now enables the company to update and view the current inventory by either adding new items, deleting old items, or updating existing items.

## Installation

 ```
  npm i
  ```

## Usage

To use this you must first remove the "EXAMPLE" from the .env file and enter your information into said file, run the source schema, then to test it out, you can run the seed file with the command 

```
npm run seed
```
After it has been seeded, you can run the application by typing 

```
npm run start
```

Once it has started, you can use whichever route you would like to. That includes GET,POST,PUT, or DELETE routes on the categories, the products, or the tags. You can also make GET,PUT, and DELETE requests to a specific ID, if you know what ID you want to view. To make viewing easier, you can use a program such as Insomnia, or Postman with your requests on the localhost port 3001.

You can view a walkthrough demonstration of the application in this video [here](https://drive.google.com/file/d/15XjTpYWQ8D128oVqHBnOEvI0XhSYZ_wY/view).
