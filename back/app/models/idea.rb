class Idea < ApplicationRecord
  belongs_to :user
  belongs_to :idea_detail
  belongs_to :category
end
