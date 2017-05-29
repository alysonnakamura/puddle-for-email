---

---
 
$("#header_spacer").change(function(){
var mc_header_spacer ='{% highlight html %}{% include mc.html %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
alert($('input[name=test]:checked').val());
});
