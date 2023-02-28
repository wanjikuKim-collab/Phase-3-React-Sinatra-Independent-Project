class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :ratings
      t.string :comment
      t.integer :viewer_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
