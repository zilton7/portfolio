class DropTextsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :texts
  end
end
