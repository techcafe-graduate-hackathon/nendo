class CreateIdeaDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :idea_details do |t|
      t.string :purpose
      t.string :target
      t.string :name
      t.string :belong_to
      t.string :possible
      t.string :competitor
      t.string :function

      t.timestamps
    end
  end
end
