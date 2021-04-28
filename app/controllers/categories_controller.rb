class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  # GET /categories
  def index
    @categories = Category.all
    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category 
    # include: :item
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def add_category
      @item= Item.find(params[:item_id])
      @category = Category.find(params[:id])
      @item.categories.push(@category) 
      render json: @item, include: :categories
  end


  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:name)
    end
end
