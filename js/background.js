
let data = [
    {
        'wiki-url': "http://simile.mit.edu/shelf/",
        'wiki-section': "Simile JFK Timeline",
        'dateTimeFormat': 'Gregorian',
        'events': [
            {
                'start': "Mon Aug 9 2018 12:30:00 GMT-0600",
                'title': "'Bay of Pigs' Invasion",
                'durationEvent': false // Notes: not "false". And no trailing comma.
            }
        ]
    },
    {
        'wiki-url': "http://simile.mit.edu/shelf/",
        'wiki-section': "Simile JFK Timeline",
        'dateTimeFormat': 'Gregorian',
        'events': [
            {
                'start': "Mon Aug 9 2018 13:30:00 GMT-0600",
                'title': "'Bay of Pigs' Invasion",
                'durationEvent': false // Notes: not "false". And no trailing comma.
            }
        ]
    }
];

chrome.extension.onMessage.addListener(//直接接受popup发来的消息
    function(request, sender, sendResponse) {
        if (request.cmd == "request_data")
            sendResponse(data);
        else
            sendResponse();
    });