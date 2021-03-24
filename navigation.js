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
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                      Tickets\
                    </a>\
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                      <a class="dropdown-item" href="tickets.html">Ticket Encashment</a>\
                      <a class="dropdown-item" href="PPL-Dollars.html">PPL Dollar Encashment</a>\
                      <a class="dropdown-item" href="issue-ticket.html">Add tickets</a>\
                      <a class="dropdown-item" href="issue-packages.html">PPL Packages</a>\
                    </div>\
                  </li>\
                  <li class="nav-item active">\
                    <a class="nav-link" href="payouts.html">Payouts</a>\
                  </li>\
                  <li class="nav-item active">\
                    <a class="nav-link" href="newODsetup.html">Percentage Payouts</a>\
                  </li>\
                  <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                      Descriptions\
                    </a>\
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                      <a class="dropdown-item disabled" href="#">Create partypoker Lobby Description</a>\
                      <a class="dropdown-item disabled" href="#">Preview partypoker Lobby Description</a>\
                      <div class="dropdown-divider"></div>\
                      <a class="dropdown-item disabled" href="#">Not yet done</a>\
                    </div>\
                  </li>\
                </ul>\
              </div>\
            </nav>\
`);