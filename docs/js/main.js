---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var radioValue = $("input[name='test']:checked").val();
            if(radioValue){
            {% capture component_variable %}(radioValue){% endcapture %}
             }
            var mc_header_spacer ='{% highlight html %}{% include {{ component_variable }} %}{% endhighlight %}';
        });
        
    });
