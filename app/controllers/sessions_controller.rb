class SessionsController < Devise::SessionsController
  layout 'application_admin'

  def new
    p 'bybis'
    if signed_in?
      redirect_to projects_path
      return
    end
    super
  end

end