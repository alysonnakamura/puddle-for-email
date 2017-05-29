---

---
 
function myFunction() {
    var x = document.getElementById("header_spacer").value;
    document.getElementById("demo").innerHTML = x;
}
 
$("#header_spacer").change(function(){
var mc_header_spacer ='{% highlight html %}{% include mc.html %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
