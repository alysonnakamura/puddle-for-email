---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var post ='{% highlight html %}{% include mc_header-spacer.html %}{% endhighlight %}';
            $('#test').html(post);
        });
        
    });

