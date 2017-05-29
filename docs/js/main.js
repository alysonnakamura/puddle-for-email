---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var component = $("input[name='test']:checked").val();
            var test = {% capture %}{% raw %} component {% endraw %}{% endcapture %};
            $('#test').html(test);
        });
        
    });

