---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var radioValue = $("input[name='test']:checked").val();
            if(radioValue){
                alert("Your are a - " + radioValue);
            }
        });
        
    });

$("#header_spacer").change(function(){
var mc_header_spacer ='{% highlight html %}{% include mc.html %}{% endhighlight %}';
$('#code-example').html(mc_header_spacer);
});
