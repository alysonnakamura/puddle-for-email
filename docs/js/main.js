---

---

	$("#header_spacer").change(function(){
		var mc_header_spacer ='{% highlight html %}{% include mc_header-spacer.html %}{% endhighlight %}';
         $('#code-example').html(mc_header_spacer);
});
