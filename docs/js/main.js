---
mc_header_spacer: mc_header-spacer.html
---

$("#header_spacer").change(function(){
var mc_header_spacer ='{% highlight html %}{% include {{ page.mc_header_spacer }} %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
