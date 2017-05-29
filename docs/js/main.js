---
  
---
 
$("#header_spacer").change(function(){
{% capture component_variable %}{{ 'mc_header-spacer.html' }}{% endcapture %}
var mc_header_spacer ='{% highlight html %}{% include {{ component_variable }} %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
