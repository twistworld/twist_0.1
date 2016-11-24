class ApiController < ApplicationController
  skip_before_action :verify_authencity_token
end
