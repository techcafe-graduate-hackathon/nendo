class Idea < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :idea_detail
  belongs_to :category
  has_many :tags
end
