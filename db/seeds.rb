# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# food, flavor, User
Item.destroy_all
Category.destroy_all
User.destroy_all



@jim = User.create!(username: 'jimmy', email: 'jimmy@jim.com', password: '123456')
@dan = User.create!(username: 'dan', email: 'dan@dan.com', password: '123456')
puts "#{User.count} Users created"

@electronics = Category.create(name: "electronics")
@clothing =Category.create(name: "clothing")
@appliances =Category.create(name: "appliances")
@antiques =Category.create(name: "antiques")
@furniture =Category.create(name: "furniture")
@media =Category.create(name: "media")
puts "#{Category.count} Categories created"

Item.create(title: "radio for sale", description: "1990's radio by sony, looks new", price: 20 , user: @dan  , category: @furniture ,img_url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/old-radio-claudiad.jpg")
Item.create(title: "clothing for sale", description: "box of clothing for sale", price: 30 , user: @jim  , category: @clothing ,img_url: "https://jessicamoyblog.files.wordpress.com/2012/08/img_3588.jpg")
Item.create(title: "rare teapot", description: "teapot for sale by famous 1940. ", price: 130 , user: @jim  , category: @antiques ,img_url: "https://images-na.ssl-images-amazon.com/images/I/616fYN%2BkYYL._AC_SL1200_.jpg")
Item.create(title: "Used stove", description: "Phillips stove. Good for outdoors. ", price: 30 , user: @jim  , category: @appliances ,img_url: "https://www.pgusedappliances.com/uploads/1/0/3/9/103997980/editor/gas-stove.jpg?1507635660")
Item.create(title: "sneakers for sale", description: "Famous Jordans for sale, like new and clean. ", price: 230 , user: @dan  , category: @clothing ,img_url: "https://specials-images.forbesimg.com/imageserve/60807a48154e43186b19bcb7/960x0.jpg?cropX1=0&cropX2=2962&cropY1=216&cropY2=2191")
Item.create(title: "bunch of old vhs", description: " Many vhs videos from the 60's to 90's, cleanuping. ", price: 50 , user: @jim  , category: @media ,img_url: "https://s1.r29static.com/bin/entry/ce7/x/1804496/image.png")
Item.create(title: "tv for sale.", description: "50 inches tv flat screen still functions. Looking for a new home. ", price: 130 , user: @jim  , category: @electronics ,img_url: "https://assets.website-files.com/5b4521070bc300e1f47063e2/5dfd1a7efda770623da441c5_tv-with-stand-in-living-room-UN.jpg")
Item.create(title: "office chairs", description: "barely used ergonics chairs from office due to close out. ", price: 430 , user: @dan  , category: @furniture ,img_url: "https://135kxh24ksgu2855gz2as5nd-wpengine.netdna-ssl.com/wp-content/uploads/used-steelcase-leap-v2-office-chair-1.jpg")
puts "#{Item.count} Items created"