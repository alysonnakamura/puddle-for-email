---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            {% capture component_variable %} mc_header-spacer.html {% endcapture %}
            var post ='{% highlight html %}{% include {{ component_variable }} %}{% endhighlight %}';
            $('#test').html(post);
        });
        
    });

