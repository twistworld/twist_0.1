Rails.application.routes.draw do
 #  get 'welcome/index'
  resources :articles do
    resources :comments
  end
  namespace :api do
    namespace :v1 do

      resources :users
      resources :user_types
      resources :events
      resources :music_genres
      resources :towns
      resources :neighborhood
      resources :places
      resources :guestlists
      resources :levels
      
    end
  end
  root 'welcome#index'
end
