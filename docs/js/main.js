---
  
---
 
$("#header_spacer").change(function(){
{% capture component_variable %}{% include selected.js %}{% endcapture %}
var mc_header_spacer ='{% highlight html %}{% include {{ component_variable }} %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
