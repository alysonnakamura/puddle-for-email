---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var radioValue = $("input[name='test']:checked").val();
            if(radioValue){
            {% capture component_variable %}{% raw %} radioValue {% endraw %}{% endcapture %}
             }
            {{ component_variable }}
        });
        
    });
