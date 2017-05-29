---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var component = $("input[name='test']:checked").val();
            var test = {% capture test_var %}{% raw %}component{% endraw %}{% endcapture %}
            var post ='{% highlight html %}{% include test_var %}{% endhighlight %}'
            $('#test').html(post);
        });
        
    });

