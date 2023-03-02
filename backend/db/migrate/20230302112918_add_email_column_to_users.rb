class AddEmailColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :viewers , :email, :string
  end
end
