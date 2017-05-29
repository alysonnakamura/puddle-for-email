---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            {% capture test_var %}{% raw %} mc_header-spacer.html {% endraw %}{% endcapture %}
            var post ='{% highlight html %}{% include {{ test_var | jsonify }} %}{% endhighlight %}'
            $('#test').html(post);
        });
        
    });

