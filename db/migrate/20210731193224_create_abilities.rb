class CreateAbilities < ActiveRecord::Migration[6.1]
  def change
    create_table :abilities do |t|
      t.string :name
      t.string :icon
      t.string :skills

      t.timestamps
    end
  end
end
