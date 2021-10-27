Rails.application.routes.draw do
  resources :texts
  root to: 'home#index'
  
  devise_for :admins, controllers: { sessions: :sessions}
  
  devise_scope :admin do
    get '/admin', to: 'dashboard#index'
  end
  
  scope :admin do
    resources :dashboard, only: [:index]
    resources :projects
    resources :abilities
    resources :links
  end
  

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index]
      resources :texts, only: [:index]
      resources :links, only: [:index]
      resources :abilities, only: [:index]
    end
  end
end
