# Final Fantasy 12 Zodiac Age Job Boards API
## by [Adjectival](alexanderjacks.biz)

Nascent MEAN stack RESTful API project. This means something to modern web developers, b/c we write so much code we start speaking in it, too.
It's an online :cloud: reference :books: for anyone to build applications :iphone: with. Capitalism becomes a gift economy when there's enough free software, ya? :gift:

## Dev Notes
:construction: Under development aka WIP. Check back soon for more functionality.

## Attribution
Data scraped from [finalfantasy.wikia.com/wiki/License_Board](finalfantasy.wikia.com/wiki/License_Board)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.
MIT software license: fork and go crazy.


#### MongoDB & Express Notes for Dev :pill:

##### 5 endpoints
/api/licenses
GET
POST

/api/licenses/:id
GET
PUT
DELETE

##### 3 fields
###### Name
###### Type
- Magick
- Technick
- Weapon
- Armor
- Accessory
- Augment
- Summon

###### Cost

##### Fields in JSON db object schema
{
  "_id": <ObjectId>,
  "name": <string>,
  "type": <string>,
  "cost": <string>
}

##### Test w CURL, before frontend built
curl -H "Content-Type: application/json" -d '{"name":"Level UP!", "type":"intrinsic", "cost":"120m"}' http://shrouded-dusk-21205.herokuapp.com/api/licenses
