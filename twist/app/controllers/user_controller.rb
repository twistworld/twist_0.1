class UserController < ApplicationController 
  has_secure_token :auth_token
end
