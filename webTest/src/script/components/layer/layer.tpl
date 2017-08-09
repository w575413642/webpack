<div class="layer">
	<img src="${ require('../../../images/1.jpg') }">
	<div> this is <%= name %> ok?</div>
	<% for (var i = 0; i < arr.length; i++) {%>
	<%= arr[i] %>
	<% } %>
</div>