class JoinsController < ApplicationController
  def join
    @join = Join.new(join_params)
    if @join.save
      render json: {status: "success", contents: @json}
    else
      render json: {status: "error", contents: @json.errors}
    end
  end

  def withdraw
    @json = Json.find(params[:id])
    @json.destroy
    render json: {status: "success", contents: @json}
  end

  private

  def join_params
    params.require(:join).permit(:user_id, :idea_id)
  end
end
