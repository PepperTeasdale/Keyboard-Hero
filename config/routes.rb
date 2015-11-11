Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resources :tracks, only: [:create, :destroy, :index]
  end
end
