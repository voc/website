# c3voc.de

## Install

Clone repository:

```
 git clone https://github.com/voc/website;
 cd website
```

Install dependencies:

```
 bundle install
```

Build website:

```
 nanoc compile
```


## Convert images

```
 convert input.jpg -resize "640x360^" -gravity center -extent 640x360 input_klein.jpg
```
