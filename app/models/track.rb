class Track < ActiveRecord::Base
  validates :name, :roll, :octave, presence: true
end
