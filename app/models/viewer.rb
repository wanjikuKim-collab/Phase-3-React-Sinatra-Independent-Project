class Viewer < ActiveRecord::Base
    has_many :reviews
    has_many :movies, through: :reviews
end