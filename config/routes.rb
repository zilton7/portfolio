Rails.application.routes.draw do
  resources :projects

  namespace :api do
    namespace :v1 do

      resources :projects, only: [:index] 
    end
  end
end
