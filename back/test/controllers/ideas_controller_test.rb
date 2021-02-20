require "test_helper"

class IdeasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ideas_index_url
    assert_response :success
  end

  test "should get show" do
    get ideas_show_url
    assert_response :success
  end

  test "should get new" do
    get ideas_new_url
    assert_response :success
  end

  test "should get create" do
    get ideas_create_url
    assert_response :success
  end

  test "should get edit" do
    get ideas_edit_url
    assert_response :success
  end

  test "should get update" do
    get ideas_update_url
    assert_response :success
  end

  test "should get delete" do
    get ideas_delete_url
    assert_response :success
  end
end
