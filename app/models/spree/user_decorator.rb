Spree::User.class_eval do
  belongs_to :user_group
  has_many :AccountTransaction
end 