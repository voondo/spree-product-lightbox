Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = 'spree_product_lightbox'
  s.version     = '1.0'
  s.summary     = 'Spree Extension that adds a lightbox preview for images'
  s.required_ruby_version = '>= 1.8.7'

  s.author            = 'Different people around the world'
  s.email             = 'romain@quarkstudio.fr'
  s.homepage          = 'https://github.com/voodno/spree-product-lightbox'

  s.files        = Dir['README.md', 'lib/**/*', 'app/**/*', 'vendor/**/*']
  s.require_path = 'lib'
  s.requirements << 'none'

  s.add_dependency('spree_core', '~> 1.3.0')
  s.add_dependency('fancybox2-rails', '~> 0.2.4')
end
