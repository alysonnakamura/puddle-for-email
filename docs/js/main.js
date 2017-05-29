---
test: mc_header-spacer.html

---
 
$("#header_spacer").change(function(){
{% capture component_variable %}{{ page.test }}{% endcapture %}
var mc_header_spacer ='{% highlight html %}{% include {{ component_variable }} %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
