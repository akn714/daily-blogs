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
