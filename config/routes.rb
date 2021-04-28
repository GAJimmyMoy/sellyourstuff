Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/items/:item_id/categories/:id', to: 'categories#add_category'

  resources :items
  resources :categories
  resources :users, only: :create

end
