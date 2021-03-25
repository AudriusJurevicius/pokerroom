document.write(`\
\
<nav class="navbar navbar-expand-lg navbar-light bg-light">\
              <a class="navbar-brand" href="index.html">Poker Room Operations</a>\
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="navbar-toggler-icon"></span>\
              </button>\
            \
              <div class="collapse navbar-collapse" id="navbarSupportedContent">\
                <ul class="navbar-nav mr-auto">\
                  <li class="nav-item dropdown active">\
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tickets</a>\
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                      <a class="dropdown-item" href="issue-ticket.html">Issue Tickets</a>\
					  <a class="dropdown-item" href="tickets.html">View Tickets</a>\
                    </div>\
                  </li>\
                  <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                      Descriptions (in progress)\
                    </a>\
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                      <a class="dropdown-item disabled" href="#">Create</a>\
                      <a class="dropdown-item disabled" href="#">Preview</a>\
                      <div class="dropdown-divider"></div>\
                      <a class="dropdown-item disabled" href="#">Not yet done</a>\
                    </div>\
                  </li>\
				  <li class="nav-item disabled">\
                    <a class="nav-link" href="#">(unused)</a>\
                  </li>\
                  <li class="nav-item disabled">\
                    <a class="nav-link" href="#">(unused)</a>\
                  </li>\
                </ul>\
              </div>\
            </nav>\
`);