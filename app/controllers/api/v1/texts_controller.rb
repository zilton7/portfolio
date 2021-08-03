module Api
  module V1
    class TextsController < ApplicationController
      def index
        @texts = Text.all

        render json: @texts.to_json
      end
    end
  end
end