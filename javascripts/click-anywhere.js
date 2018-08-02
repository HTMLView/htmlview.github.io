<HTML>
<BODY>
 $(document).click(function(evt) {
      alert("clicked anywhere except catDIV and mouseDIV");
    });
    $("#catDIV, #mouseDIV").click(function(evt) {
      evt.stopPropagation();
    });
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="catDIV">catDIV</div>
<div id="cowDIV">cowDIV</div>
<div id="mouseDIV">mouseDIV</div>
</BODY>
</HTML>
