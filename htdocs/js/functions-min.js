jQuery(document).ready(function($){$(".toggle").click(function(){var o=$(this);return o.is(".box-on")?(o.removeClass("box-on"),o.addClass("box-off")):(o.removeClass("box-off"),o.addClass("box-on")),!1}),$(".btn").click(function(){$(".btn").removeClass("on").addClass("off"),$(this).removeClass("off").addClass("on")})});