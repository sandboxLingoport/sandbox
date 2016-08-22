<head/>
<body>
  <script>
    var greeting = "Hello";
    greeting += " World!";

    var today = new Date();
    var dateString = "{0}/{1}/{2}".format(today.getMonth(), today.getDay(), today.getYear);

    alert(greeting);
    alert("Today is {0}".format(dateString));

    var logMessage = "Logging Message - Don't translate me";
    console.log(logMessage);
  </script>
</body>
