Rails.application.routes.draw do
  resources :links
  root to: 'home#index'
  devise_for :admins, :controllers => {:sessions => "sessions"}

  devise_scope :admin do
    get '/admin', to: 'sessions#new'
  end

  resources :projects

  namespace :api do
    namespace :v1 do

      resources :projects, only: [:index] 
    end
  end
end
