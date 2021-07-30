Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :admins
  devise_scope :admin do
    get '/admin', to: 'devise/sessions#new'
  end

  resources :projects

  namespace :api do
    namespace :v1 do

      resources :projects, only: [:index] 
    end
  end
end
