json.extract! text, :id, :intro_title, :intro_description, :portfolio_title, :aboutme_title, :aboutme_description, :resume_link, :contact_title, :contact_description, :analytics, :created_at, :updated_at
json.url text_url(text, format: :json)
