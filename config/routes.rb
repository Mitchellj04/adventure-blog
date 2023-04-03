Rails.application.routes.draw do
  resources :posts, only: [:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "application#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
