# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :church,
  ecto_repos: [Church.Repo],
  api_key: System.get_env("API_KEY"),
  channel_id: System.get_env("CHANNEL_ID")

# Configures the endpoint
config :church, ChurchWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "UEdcNR2ibnUTmgQaZEUnkOV/ys3/Wp95C70F9aoraV7r2X+VyXUuOoAkzggiyijL",
  render_errors: [view: ChurchWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Church.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "FaKKzIRu"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
