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
            name: 'Freedom! Dashboard',
            url: 'https://www.freedom.tm/',
            test_url: 'https://www.freedom.tm/',
            expected_status: [200]
        },
        {
            name: 'Freedom! Community Site',
            url: 'https://www.community.tm/',
            test_url: 'https://www.community.tm/',
            expected_status: [200]
        },
        {
            name: 'Freedom! Reuter Server',
            url: 'http://52.12.82.102:3000',
            test_url: 'http://52.12.82.102:3000',
            expected_status: [404]
        },
        {
            name: 'Earnings Module',
            url: 'https://earnings.freedom.tm',
            test_url: 'https://earnings.freedom.tm',
            expected_status: [200, 400, 403, 404]
        },
        {
            name: 'Spam.tm API',
            url: 'http://spam.api.tm',
            test_url: 'http://spam.api.tm',
            expected_status: 404
        },
        {
            name: 'Proxy API',
            url: 'http://proxy.api.tm',
            test_url: 'http://proxy.api.tm',
            expected_status: 404
        },
        {
            name: 'Trixie tool',
            url: 'http://api2.freedom.tm:3000',
            test_url: 'http://api2.freedom.tm:3000',
            expected_status: [200, 302, 304]
        },
        {
            name: 'Spam.tm',
            url: 'http://www.spam.tm',
            test_url: 'http://www.spam.tm',
            expected_status: [200, 304]
        },
        {
            name: 'Universal Uploader',
            url: 'http://www.upload.tm',
            test_url: 'http://www.upload.tm',
            expected_status: [200, 304]
        },
        {
            name: '[Master] Unlinked channels',
            url: 'http://raven.tm',
            test_url: 'http://raven.tm',
            expected_status: [200, 304]
        },
        {
            name: '[Master] Updated counters',
            url: 'http://raven.tm:8080',
            test_url: 'http://raven.tm:8080',
            expected_status: [200, 304]
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
