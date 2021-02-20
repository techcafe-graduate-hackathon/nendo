class AddColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :is_developer, :boolean, default: false, null: false
  end
end