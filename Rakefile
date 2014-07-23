# encoding: utf-8
require 'sass'
require 'haml'
require 'pathname'

task :default => 'build'

task :build do
  output_dir = Pathname(Pathname.pwd + 'output')

  unless output_dir.exist?
    puts "Create output directory"

    output_dir.mkdir
    ['css', 'css/font-awsome', 'js', 'img'].each do |dir|
      dir = output_dir + dir
      dir.mkdir
    end
  end

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
    'static/bootstrap' => 'output/css/bootstrap',
    'static/img/30c3katze-nibbler.jpg' => 'output/img/30c3katze-nibbler.jpg',
    'static/img/raw_IMG_7013_klein.jpg' => 'output/img/raw_IMG_7013_klein.jpg',
    'static/img/camp2011.jpg' => 'output/img/camp2011.jpg',
    'static/img/30c3.jpg' => 'output/img/30c3.jpg',
    'static/img/froscon.jpg' => 'output/img/froscon.jpg',
    'static/img/raw_IMG_7044_klein.jpg' => 'output/img/raw_IMG_7044_klein.jpg',
  }.each do |source, destination|
    copy_static_files(source, destination)
  end

  puts
  puts 'Render css:'
  render_scss(nil, nil)
end

task :clear do

end

def render_scss(source, destination)
  File.open(Pathname.pwd + 'output/css/style.css', 'w') do |f|
    f.puts Sass::Engine.for_file(Pathname.pwd + 'static/css/style.css.scss', syntax: :scss).render
  end
end

def render_web_site(source, destination)
  File.open(Pathname.pwd + destination, 'w') do |f|
    f.puts Haml::Engine.new(File.read(Pathname.pwd + source), encoding: 'utf-8').render
  end
end

def copy_static_files(source, destination)
  FileUtils.copy_entry(Pathname(Pathname.pwd + source), Pathname(Pathname.pwd + destination))
end
