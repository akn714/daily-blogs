# Daily-Blogs
* This is a blog website on which you can read posts about latest tech news.

### Routes
#### User scope
* GET `/` : redirect to home page
* GET `/blog` : getting all blogs (home page)
* GET `/blog/:id` : getting details of a perticular blog

#### Bot and Admin scope
* POST `/blog` : creating a blog post

#### Admin scope only
* GET `/blog/post` : getting blog post form page
* POST `/blog/post` : creating a blog post
* DELETE `/blog/:id` : deleting a perticular blog
* GET `/admin` : redirect to `/admin/login`
* GET `/admin/login` : getting admin login page
* POST `/admin/login` : logging admin in
* GET `/admin/logout` : logging admin out

## Quick Start
* first clong the project using the below code or download the zip file of this project
```
git cone git@github.com:adarshkumar714/daily-blogs
```
* install all the dependencies
```
npm install
```
* rename the file `.local.env` to `.env`
* make sure you are registered on mongodb atlas (online mongodb)
  * get the db link from your mongodb atlas account
* create a collection in mongodb atlas
* write anything in `sk`(secret key) in `.env` like `liqa398u52j`
* `.env` file entries
  * DB_MODEL_NAME: name of your collection in mongodb atlas
  * DB_LINK: db link from your mongodb atlas account
  * sk: any string
  * ADMIN_NAME: choose an admin name
  * ADMIN_PASSWORD: choose an admin password
* now run the app using
```
node app.js
```
