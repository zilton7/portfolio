class DropAbilitiesTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :abilities
  end
end
