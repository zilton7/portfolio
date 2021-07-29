module Api
  module V1
    class ProjectsController < ApplicationController
      def index
        @projects = Project.all

        render json: @projects.to_json
      end
    end
  end
end