class CreateTexts < ActiveRecord::Migration[6.1]
  def change
    create_table :texts do |t|
      t.string :intro_title
      t.text :intro_description
      t.string :portfolio_title
      t.string :aboutme_title
      t.text :aboutme_description
      t.string :resume_link
      t.string :contact_title
      t.string :contact_description
      t.string :analytics

      t.timestamps
    end
  end
end
