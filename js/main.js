// 1. Sidebar

// Functional input - submit on enter or by clicking the search icon

// Search submit prepends to list under search bar

// Save list to local storage to populate on refresh

// Search submit triggers info on dashboard to update

// Clicking an item in the sidebar triggers info on dashboard to update








// create nav variable
var nav = $('#nav');

var toggle = $('#toggle').attr('style', 'opacity: 0.4');

// pull open/closed status from storage and add class to nav
var navStatus = localStorage.getItem('Navigation');
if (navStatus !== '') {
	nav.addClass(navStatus);
}

// if nav doesn't have either open/closed class, add open class
if (nav.hasClass('open') === false && nav.hasClass('closed') === false) {
	nav.addClass('open');
}

// on toggle menu click...
$('#toggle').on('click', function(event) {
	event.preventDefault();
	
	// if menu is open...
	if (nav.hasClass('open')) {
		
		// close menu
		nav.removeClass('open');
		nav.addClass('closed');
		nav.attr('style', 'padding: 24px 13px');
		
		// send status to storage
		localStorage.setItem('Navigation', 'closed');
	
	// if menu is closed...
	} else {
		
		// open menu
		nav.removeClass('closed');
		nav.addClass('open');
		nav.attr('style', 'padding: 24px 15px');
		
		// send status to storage
		localStorage.setItem('Navigation', 'open');
		
	}
	
});

// create empty list array
var listArray = [];

// create search list <section> and <ul>
var searchList = $('<section>').attr('id', 'search-list').addClass('row');
var ul = $('<ul>').addClass('col-12');

// if storage has list items, push items to list array and prepend to search list
var storage = localStorage.getItem('List Items');
if (storage !== null) {
	listArray = storage.split(',');
	listArray.forEach(function(i) {	
		var storageItem = $('<li>').text(i);
		ul.prepend(storageItem);	
	});
}

// append search list <section> and <ul>
searchList.append(ul);
nav.append(searchList);

// on search form submit...
$('#nav form').on('submit', function(event) {
	event.preventDefault();
	
	// grab the search value, then empty the field
	var search = $('#search').val();
	$('#search').val('');
	
	// if search has a value, prepend item to list
	if (search !== '') {
		var li = $('<li>').text(search);
		ul.prepend(li);
		
		// push new item to list array and send array to local storage
		listArray.push(li.text());
		localStorage.setItem('List Items', listArray);
	}

});