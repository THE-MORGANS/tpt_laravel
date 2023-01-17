<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @viteReactRefresh
    @vite([
      'resources/css/animate.min3661.css',
      'resources/css/slick3661.css',
      'resources/css/tailwind-built3661.css',
      'resource/css/app.css',
      'resources/jsfiles/smooth.js',
      'resources/jsfiles/slick.js',
      'resources/jsfiles/textType.js',
      'resources/jsfiles/waypoints.js',
      //'resources/jsfiles/wow.js',
      'resource/css/slide.css',

    'resources/jsfiles/counterup.js',
    //'resources/jsfiles/jquery-3.6.0.min.js',
    'resources/jsfiles/main3661.js',
    'resources/jsfiles/mobile-menu.js',
    'resources/jsfiles/modernizr-3.6.0.min.js',
    'resources/jsfiles/scrollup.js',
      'resources/js/components/Viewcase.jsx',
    ])
</head>
<body>
  <div id="vcase">

  </div>
</body>
<script type="text/javascript">
    var companyname = {{ Js::from($companyname??"") }}
</script>
</html>
