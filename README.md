# Color ChangeJS


A new way to color. Designed by [planlodge](https://github.com/planlodge).


## Getting Started

 1. Include jQuery in your code.
 2. Download and include the color-change.js file.
 3. Pick your selector and apply colorChange method.

## Example

    <!DOCTYPE html>
    <html lang="en-US">
    <head>
        <title>Your Page</title>
        <meta charset="utf-8">
    </head>
    <body>

    <!-- your html code here -->
    <section>
      <p class="yourSelector">Lorem ipsum dolor sit amet, 
      consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
    </section>

        <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
        <script src="libs/color-change.min.js"></script>
        <script>
          $(function(){
              $(".yourSelector").colorChange({
                firefox: "#800000", 
                chrome: "#000000", 
                effect: true
              });
          });
        </script>

    </body>
    </html>

## License

Color ChangeJS is licensed under the [MIT license](http://opensource.org/licenses/MIT).
