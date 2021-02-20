require "test_helper"

class JoinsControllerTest < ActionDispatch::IntegrationTest
  test "should get join" do
    get joins_join_url
    assert_response :success
  end

  test "should get withdraw" do
    get joins_withdraw_url
    assert_response :success
  end
end
