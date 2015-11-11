class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :name, presence: true
      t.json :roll, presence: true
      
      t.timestamps null: false
    end
  end
end
