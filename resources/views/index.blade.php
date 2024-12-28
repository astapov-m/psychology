<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> </title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        #app {
            height: 100%;
            width: 100%;
        }
    </style>
</head>
<body style="background-image: url({{asset('image.png')}});">
<div id="app" >
    <footer-panel></footer-panel>
    <slide-panel></slide-panel>
    <auth-panel></auth-panel>
    <router-view></router-view>

</div>
</body>
</html>
