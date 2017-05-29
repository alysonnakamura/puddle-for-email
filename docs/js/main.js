---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var component = $("input[name='test']:checked").val();
            var test = {% capture test_var %}component{% endcapture %};
            $('#test').html(test);
        });
        
    });

