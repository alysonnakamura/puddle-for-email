---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            {% capture component_variable %}{% raw %} $("input[name='test']:checked").val(); {% endraw %}{% endcapture %}
            $('#test').html('{{ component_variable }}');
        });
        
    });
