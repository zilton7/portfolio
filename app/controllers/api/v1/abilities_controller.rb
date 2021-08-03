module Api
  module V1
    class AbilitiesController < ApplicationController
      def index
        @abilities = Ability.all

        render json: @abilities.to_json
      end
    end
  end
end