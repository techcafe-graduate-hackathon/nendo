require "test_helper"

class IdeaDetailsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get idea_details_index_url
    assert_response :success
  end

  test "should get show" do
    get idea_details_show_url
    assert_response :success
  end

  test "should get new" do
    get idea_details_new_url
    assert_response :success
  end

  test "should get create" do
    get idea_details_create_url
    assert_response :success
  end

  test "should get edit" do
    get idea_details_edit_url
    assert_response :success
  end

  test "should get update" do
    get idea_details_update_url
    assert_response :success
  end

  test "should get delete" do
    get idea_details_delete_url
    assert_response :success
  end
end
