---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            {% capture component_variable %} $('input[name=test]:checked').val() {% endcapture %}
            {{ component_variable | jsonify }}
        });
        
    });

