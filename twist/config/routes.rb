Rails.application.routes.draw do
#  get 'welcome/index'
  resources :articles
  resources :users
  resources :events
  resources :artists
  resources :music_style
  root 'welcome#index'
end
