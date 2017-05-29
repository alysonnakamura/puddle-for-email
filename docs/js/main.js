---
  
---
 
$("#header_spacer").change(function(){
var test = $('input[name=test]:checked').val();
{% capture component_variable %}{{ test }}{% endcapture %}
var mc_header_spacer ='{% highlight html %}{% include {{ component_variable }} %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
