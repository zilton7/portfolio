class DashboardController < ApplicationController
  layout 'application_admin'

  before_action :authenticate_admin!


  def index
  end
end
