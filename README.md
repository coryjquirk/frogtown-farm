# farm manager app
deployed development stage app: https://frogtownfarm.herokuapp.com/  
(give this a minute to start up, it runs on a free-tier server for now)

## technologies  
* MERN stack  
  * MongoDB, Express.js, React.js, Node.js  
  * self-contained user authentication  
* Front end  
  * Bootstrap  
  * Fontawesome  

ArcGIS StoryMaps [link to story](https://storymaps.arcgis.com/stories/52354515142b4631a1e09d402743d36e)

### development setup:  
`npm install`  
`npm run client-install`  

https://www.frogtownfarm.org/  
must use `npm run dev` to run app locally  

### future
need to build out the username and password authentication further. right now the only way to reset a password is by the user contacting me to manually delete their record from my MongoDB Atlas cluster, allowing them to create a new account (very not ideal).  

### credits
brad traversy's mern auth guide [repo](https://github.com/bradtraversy/mern_shopping_list), [vid](https://www.youtube.com/watch?v=USaB1adUHM0&ab_channel=TraversyMedia)
