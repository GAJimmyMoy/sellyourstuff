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

Item.create(title: "radio for sale", description: "1990's radio by sony, looks new", price: 20 , user: @dan  , category: @furniture )
Item.create(title: "clothing for sale", description: "box of clothing for sale", price: 30 , user: @jim  , category: @clothing )
Item.create(title: "rare teapot", description: "teapot for sale by famous 1940. ", price: 130 , user: @jim  , category: @antiques )
Item.create(title: "Used stove", description: "Phillips stove. Good for outdoors. ", price: 30 , user: @jim  , category: @appliances )
Item.create(title: "sneakers for sale", description: "Famous Jordans for sale, like new and clean. ", price: 230 , user: @dan  , category: @clothing )
Item.create(title: "bunch of old vhs", description: " Many vhs videos from the 60's to 90's, cleanuping. ", price: 50 , user: @jim  , category: @media )
Item.create(title: "tv for sale.", description: "50 inches tv flat screen still functions. Looking for a new home. ", price: 130 , user: @jim  , category: @electronics )
Item.create(title: "office chairs", description: "barely used ergonics chairs from office due to close out. ", price: 430 , user: @dan  , category: @furniture )
puts "#{Item.count} Items created"