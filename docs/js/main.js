---
mc_header_spacer: mc_header-spacer.html
---

$("#header_spacer").change(function(){
{% capture component_variable %}$('input[name=test]:checked').val(){% endcapture %}
var mc_header_spacer ='{% highlight html %}{% include component_variable %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
