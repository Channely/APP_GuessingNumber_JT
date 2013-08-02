# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Server::Application.config.secret_key_base = 'ba8623abe74b1da0e52fa7d3eb1c9e15330b19c742367a5f45bb43bcb1a8aa906d4a5dd2b8723917f3af9986a41c036bef39d90ddbc50a828d1f8a4f194737ca'
