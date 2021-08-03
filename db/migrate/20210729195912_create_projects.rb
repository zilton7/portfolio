class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :tags
      t.string :image
      t.string :live_link
      t.string :source_link
      t.string :position

      t.timestamps
    end
  end
end
