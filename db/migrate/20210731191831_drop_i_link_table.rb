class DropILinkTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :i_links
  end
end
