Rails.application.routes.draw do
  scope :json do
    get '/' => 'joins#join'
    delete '/' => 'joins#withdraw'
  end
  resources :idea_details
  resources :ideas
  get 'example/test'
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
