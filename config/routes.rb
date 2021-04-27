Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/items/:item_id/categories/:id' to: 'categories#add_category'
  resources :items
  resources :categories
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
