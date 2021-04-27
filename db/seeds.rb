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

puts "#{Category.count} Categories created"

Item.create(title: "radio for sale", description: "1990's radio by sony, looks new", price: 20 , user: @dan  , category: @furniture )
Item.create(title: "clothing for sale", description: "box of clothing for sale", price: 30 , user: @jim  , category: @clothing )
Item.create(title: "rare teapot", description: "teapot for sale by famous 1940. ", price: 130 , user: @jim  , category: @antiques )

puts "#{Item.count} Items created"