---
 
---

{% capture component_variable %}$( document ).ready(function() {
    $('input[name=test]:checked').val();
});{% endcapture %}
 
$("#header_spacer").change(function(){
var mc_header_spacer ='{% highlight html %}{% include {{ component_variable }} %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
