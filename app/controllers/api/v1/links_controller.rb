module Api
  module V1
    class LinksController < ApplicationController
      def index
        @links = Link.all

        render json: @links.to_json
      end
    end
  end
end