module Api
  module V1
    class ProjectsController < ApplicationController
      def index
        @projects = Project.where.not(position: '0').order('position')

        render json: @projects.to_json
      end
    end
  end
end