class AbilitiesController < ApplicationController
  layout 'application_admin'
  before_action :set_ability, only: %i[ show edit update destroy ]
  before_action :authenticate_admin!

  # GET /abilities or /abilities.json
  def index
    @abilities = Ability.all
  end

  # GET /abilities/1 or /abilities/1.json
  def show
  end

  # GET /abilities/new
  def new
    @ability = Ability.new
  end

  # GET /abilities/1/edit
  def edit
  end

  # POST /abilities or /abilities.json
  def create
    @ability = Ability.new(ability_params)

    respond_to do |format|
      if @ability.save
        format.html { redirect_to @ability, notice: "Ability was successfully created." }
        format.json { render :show, status: :created, location: @ability }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ability.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /abilities/1 or /abilities/1.json
  def update
    respond_to do |format|
      if @ability.update(ability_params)
        format.html { redirect_to @ability, notice: "Ability was successfully updated." }
        format.json { render :show, status: :ok, location: @ability }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ability.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /abilities/1 or /abilities/1.json
  def destroy
    @ability.destroy
    respond_to do |format|
      format.html { redirect_to abilities_url, notice: "Ability was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ability
      @ability = Ability.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ability_params
      params.require(:ability).permit(:name, :icon, :skills)
    end
end
