<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CoffeeGram</title>

        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"/>
        <head>
        <script>
          var csrf_token = '<?php echo csrf_token(); ?>';
        </script>
</head>
    </head>
    <body>
      <div id="app">

      </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous">
    </script>
    <script src="https://kit.fontawesome.com/ff26e78eae.js"
            crossorigin="anonymous"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</html>
