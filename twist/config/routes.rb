Rails.application.routes.draw do
#  get 'welcome/index'
  resources :articles do
    resources :comments
  end
  resources :users
  resources :user_types
  resources :events
  resources :music_genres
  resources :towns do
    resources :neighborhood
  end
  resources :places
  resources :guestlists
  resources :levels
  root 'welcome#index'
end
