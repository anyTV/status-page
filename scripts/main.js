/* globals $ */

'use strict';

$(document).ready(function() {
	var time = 60,
		time_span = $('.refresh-time');

	setInterval(function () {
		time_span.html(time);
		time--;
		if (!time) {
			location.reload();
		}
	}, 1000);

	$('.services-item > .collapsible-header').click(function(){
		var icon = ($(this).hasClass('active')) ? 'remove' : 'add';
		$('.material-icons.sub-item').text(icon);
	});


	var services = [
		{
			name: 'Heartbeat/HeartbeatTM server',
			url: 'https://www.you1tube.com',
			test_url: 'https://www.you1tube.com',
			expected_status: 404
		},
		{
			name: 'Partnership status checker',
			url: 'http://api2.freedom.tm:8000',
			test_url: 'http://api2.freedom.tm:8000',
			expected_status: 404
		},
		{
			name: 'Heartbeat channel verification server',
			url: 'http://api2.freedom.tm',
			test_url: 'http://api2.freedom.tm',
			expected_status: 404
		},
		{
			name: 'Gamers.tm',
			url: 'http://api.gamers.tm/',
			test_url: 'http://api.gamers.tm/',
			expected_status: 404
		},
		{
			name: 'Gamers Beta Frontend',
			url: 'http://beta.gamers.tm/',
			test_url: 'http://beta.gamers.tm/',
			expected_status: [200, 304]
		},
		{
			name: 'Gamers Beta Admin',
			url: 'http://beta.gamers.tm:3000/',
			test_url: 'http://beta.gamers.tm:3000/api/games',
			expected_status: [200, 304]
		},
		{
			name: 'Gamers Development DB',
			url: 'http://203.177.42.92:8082/',
			test_url: 'http://203.177.42.92:8082/',
			expected_status: 404
		}
	];

	services.forEach(function (a) {
		$.get(a.test_url)
			.always(function (b) {
				$('#list').append(' \
			            <li class="collection-item dismissable">\
			                <div>' + a.name + ' (<a href="' + a.url + '" target="_blank">' + a.url + '</a>)\
			                    <span class="secondary-content status-text-' + ((Array.isArray(a.expected_status) && a.expected_status.indexOf(b.status)) || b.status === a.expected_status ? 'normal' : 'rekt') + '">' + ((Array.isArray(a.expected_status) && a.expected_status.indexOf(b.status)) || b.status === a.expected_status ? 'GOOD' : 'REKT') + '</span>\
			                </div>\
			            </li>\
				');
			}
			);
	});
});
