Rails.application.routes.draw do
  devise_for :admins
  root to: 'projects#index'
  resources :projects

  namespace :api do
    namespace :v1 do

      resources :projects, only: [:index] 
    end
  end
end
