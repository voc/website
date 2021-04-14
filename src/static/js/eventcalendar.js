function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

function generateEventRow(start_date, end_date, name) {
  var evrow = document.createElement('tr');
  evrow.classList.add("eventcalendar-entry");

  var datecol = document.createElement('td');
  datecol.innerText = start_date + ((start_date != end_date) ? (" - " + end_date) : "");
  datecol.classList.add("eventcalendar-date");
  datecol.style.width = '280px';
  datecol.style['text-align'] = "right";
  datecol.style['font-family'] = 'Monospace';
  evrow.appendChild(datecol);

  var namecol = document.createElement('td');
  namecol.innerText = name;
  namecol.classList.add("eventcalendar-name");
  evrow.appendChild(namecol);

  return evrow;
}

function loadEvents(show_running=true, show_upcoming=true) {
  getJSON('https://c3voc.de/eventkalender/events.json', function(status, data) {
    var running_events = [];
    var upcoming_events = [];

    var items = Object.keys(data.voc_events).map(function(key) {
      return [key, data.voc_events[key]];
    });

    items.sort(function(first, second) {
      return Date.parse(first[1].start_date) - Date.parse(second[1].start_date);
    });

    for (var key in items) {
      var event = items[key][1];
      if (Date.parse(event.start_date) < Date.now() && Date.parse(event.end_date) > Date.now()) {
        running_events.push(event);
      } else if (Date.parse(event.start_date) > Date.now()) {
        if (upcoming_events.length < 5) {
          upcoming_events.push(event);
        }
      }
    }

    if (show_running) {
      for (var i in running_events) {
        var event = running_events[i];
        document.getElementById('running-events-calendar').appendChild(generateEventRow(event.start_date, event.end_date, event.name));
        document.getElementById('running-events-heading').style.display = 'block';
        document.getElementById('running-events-calendar').style.display = 'table';
      }
    }

    if (show_upcoming) {
      for (var i in upcoming_events) {
        var event = upcoming_events[i];
        document.getElementById('upcoming-events-calendar').appendChild(generateEventRow(event.start_date, event.end_date, event.name));
        document.getElementById('upcoming-events-heading').style.display = 'block';
        document.getElementById('upcoming-events-calendar').style.display = 'table';
      }
    }
  });
}
