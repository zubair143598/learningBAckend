require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Zubair337591")
})
app.get("/login",(req,res)=>{
res.send("<h1>Please Login to use Services</h1>")
})

const githubData={
    "login": "zubair143598",
    "id": 91283515,
    "node_id": "MDQ6VXNlcjkxMjgzNTE1",
    "avatar_url": "https://avatars.githubusercontent.com/u/91283515?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/zubair143598",
    "html_url": "https://github.com/zubair143598",
    "followers_url": "https://api.github.com/users/zubair143598/followers",
    "following_url": "https://api.github.com/users/zubair143598/following{/other_user}",
    "gists_url": "https://api.github.com/users/zubair143598/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/zubair143598/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/zubair143598/subscriptions",
    "organizations_url": "https://api.github.com/users/zubair143598/orgs",
    "repos_url": "https://api.github.com/users/zubair143598/repos",
    "events_url": "https://api.github.com/users/zubair143598/events{/privacy}",
    "received_events_url": "https://api.github.com/users/zubair143598/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Muhammad Zubair",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 64,
    "public_gists": 0,
    "followers": 0,
    "following": 3,
    "created_at": "2021-09-23T18:03:31Z",
    "updated_at": "2024-09-17T07:25:52Z"
  }

app.get("/github",(req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})