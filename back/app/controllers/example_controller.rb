class ExampleController < ApplicationController
  def test
    render json: {status: 'success', content: 'good'}
  end
end
