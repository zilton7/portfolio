json.extract! project, :id, :name, :description, :tags, :image, :live_link, :source_link, :position, :created_at, :updated_at
json.url project_url(project, format: :json)
