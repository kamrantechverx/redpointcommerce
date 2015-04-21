module Spree
class SliderImage < Spree::Base
	belongs_to :template
	has_attached_file :slider_image, styles: {
    medium: '300x300!', 
    beauty_parlor: '1876x879#',
    warehouse: '1876x879#'

  }

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :slider_image, :content_type => ["image/jpg", "image/jpeg", "image/gif", "image/png"]
  validates_attachment_size :slider_image, :less_than => 1.megabytes
end
end