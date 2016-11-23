class CreateGuestlists < ActiveRecord::Migration[5.0]
  def change
    create_table :guestlists do |t|

      t.timestamps
    end
  end
end
