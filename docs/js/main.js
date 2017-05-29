---

---
$(document).ready(function(){
        $("input[type='button']").click(function(){
            var test = $('input[name=test]:checked').val()
            {% capture component_variable %} test {% endcapture %}
            {{ component_variable | jsonify }}
            $('#test').html(test);
        });
        
    });

