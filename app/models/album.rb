# == Schema Information
#
# Table name: albums
#
#  id                   :integer          not null, primary key
#  user_id              :integer          not null
#  title                :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  artwork_file_name    :string
#  artwork_content_type :string
#  artwork_file_size    :integer
#  artwork_updated_at   :datetime
#

class Album < ApplicationRecord
  validates :user_id, :title, presence: true
  # validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/
  belongs_to :user
end
