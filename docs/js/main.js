---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var component = $("input[name='test']:checked").val();
            var test = {% capture test_var %}{% raw %}component{% endraw %}{% endcapture %}
            {{ test_var }}
            $('#test').html({{ test_var }});
        });
        
    });

