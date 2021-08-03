class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :name
      t.string :link
      t.string :icon

      t.timestamps
    end
  end
end
