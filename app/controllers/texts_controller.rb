class TextsController < ApplicationController
  layout 'application_admin'
  before_action :authenticate_admin!
  before_action :set_text, only: %i[ show edit update destroy ]

  # GET /texts or /texts.json
  def index
    @texts = Text.all
  end

  # GET /texts/1 or /texts/1.json
  def show
  end

  # GET /texts/new
  def new
    @text = Text.new
  end

  # GET /texts/1/edit
  def edit
  end

  # POST /texts or /texts.json
  def create
    @text = Text.new(text_params)

    respond_to do |format|
      if @text.save
        format.html { redirect_to @text, notice: "Text was successfully created." }
        format.json { render :show, status: :created, location: @text }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @text.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /texts/1 or /texts/1.json
  def update
    respond_to do |format|
      if @text.update(text_params)
        format.html { redirect_to @text, notice: "Text was successfully updated." }
        format.json { render :show, status: :ok, location: @text }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @text.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /texts/1 or /texts/1.json
  def destroy
    @text.destroy
    respond_to do |format|
      format.html { redirect_to texts_url, notice: "Text was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_text
      @text = Text.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def text_params
      params.require(:text).permit(:intro_title, :intro_description, :portfolio_title, :aboutme_title, :aboutme_description, :resume_link, :contact_title, :contact_description, :analytics)
    end
end
