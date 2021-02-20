class IdeasController < ApplicationController
  def index
    @ideas = Idea.all
    render json: [status: "success", contents: @ideas.as_json(include: [:category, :idea_detail] ) ]
  end

  def show
    @idea = Idea.find(params[:id])
    render json: {status: "success", contents: @idea}
  end

  def new
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render json: {status: "success", contents: idea}
    else
      render json: {status: "error", contents: idea.errors}
    end
  end

  def edit
  end

  def update
    @idea = Idea.find(params[:id])
    if @idea.update(idea_params)
      render json: {status: "success", contents: idea}
    else
      render json: {status: "error", contents: idea.errors}
    end
  end

  def destroy
    @idea = Idea.find(params[:id])
    @idea.destroy
    render json: { status: 'SUCCESS', contents: @idea}
  end

  def idea_params
    params.require(:idea).permit(:title, :user_id, :idea_detail_id, :category_id)
  end
end
