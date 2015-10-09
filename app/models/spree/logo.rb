module Spree
class Logo < Spree::Base
	belongs_to :template
	has_attached_file :avatar, styles: {logo: '240x75'}
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_presence :avatar
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
   after_post_process :find_dimensions
   
   def find_dimensions
      temporary = attachment.queued_for_write[:original]
      filename = temporary.path unless temporary.nil?
      filename = attachment.path if filename.blank?
      geometry = Paperclip::Geometry.from_file(filename)
      self.attachment_width  = geometry.width
      self.attachment_height = geometry.height
    end
end
end