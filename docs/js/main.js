---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var test = {% capture test_var %}{% raw %}$("input[name='test']:checked").val();{% endraw %}{% endcapture %}
            var post ='{% highlight html %}{% include {{ test_var | jsonify }} %}{% endhighlight %}'
            $('#test').html(post);
        });
        
    });

