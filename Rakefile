# encoding: utf-8
require 'sass'
require 'haml'
require 'pathname'

task :default => 'build'

task :build do
  puts 'Build website:'
  haml_files = {
      'views/index.html.haml' => 'output/index.html'
  }.each do |source, destination|
    puts "#{source} → #{destination}"
    render_web_site(source, destination)
  end

  puts
  puts 'Copy static files:'
  static_files = {
    'static/font-awesome' => 'output/css/font-awsome',
    'static/js/jquery.hcaptions.js' => 'output/js/jquery.hcaptions.js',
    'static/bootstrap' => 'output/css/bootstrap'
  }.each do |source, destination|
    copy_static_files
  end

  puts
  puts 'Render css:'
  puts 'static/css/style.css.scss → output/css/style.css'

end

task :clear do

end

def render_scss(source, destination)
  File.open(Pathname.pwd + 'output/style.css', 'w') do |f|
    f.puts Sass::Engine.for_file(Pathname.pwd + 'static/css/style.css.scss', syntax: :scss).render
  end
end

def render_web_site(source, destination)
  File.open(Pathname.pwd + destination, 'w') do |f|
    f.puts Haml::Engine.new(File.read(Pathname.pwd + source), encoding: 'utf-8').render
  end
end

def copy_static_files(source, destination)
  FileUtils.copy_entry Pathname(Pathname.pwd + source, Pathname(Pathname.pwd + destination)
end
