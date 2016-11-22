Rails.application.routes.draw do
#  get 'welcome/index'
  resources :articles do
    resources :comments
  end
  resources :users
  resources :events
  resources :artists
  resources :music_style
  root 'welcome#index'
end
