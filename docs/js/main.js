---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var component = $("input[name='test']:checked").val();
            var test = {% raw %} component {% endraw %};
            $('#test').html(test);
        });
        
    });

