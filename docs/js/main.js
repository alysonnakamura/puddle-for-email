---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var component = $("input[name='test']:checked").val();
            $('#test').html({{% raw %} component {% endraw %});
        });
        
    });

