class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :ratings
      t.string :comment
      t.references :viewer, foreign_key: true
      t.references :movie, foreign_key: true

      t.timestamps
    end
  end
end
