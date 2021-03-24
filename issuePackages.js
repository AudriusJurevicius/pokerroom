const list = document.querySelector("#ticket-list");
const filter = document.querySelector("#filter");

const btnGetList = document.querySelector("#btn-ticket-list");
const btnIssueTicket = document.querySelector("#btn-ticket-issue");
const btnEncashTicket = document.querySelector("#btn-ticket-encash");

const tickets = [
    {id: 881980, name: '$4k CPP Package: $600 - $600 Travel Expenses#', settl: 'cash'},
    {id: 881981, name: '$4k CPP Package: $2300 - 9 Night Grand Hyatt Hotel Stay - PPL Dollars#', settl: 'pp_event1201'},
    {id: 879079, name: '$4k CPP Package: $1100 - Mini Main Event Seat - PPL Dollars#', settl: 'pp_event1201'}
]

btnGetList.addEventListener("click", (e) => {
    e.preventDefault();
    let q = e.target.parentElement.children;
    if (q[0].value != "") {
        getTicketList(q[0].value);
    }
});

btnIssueTicket.addEventListener("click", (e) => {
    e.preventDefault();
    let q = e.target.parentElement.children;
    if (q[0].value != "" && q[1].value != "" && q[2].value != "") {
        issueTicket(q[0].value,q[1].value,q[2].value);
    }
});

btnEncashTicket.addEventListener("click", (e) => {
 
});

filter.addEventListener("keyup", filterTickets);

list.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log(event.target)
    if (event.target.classList.contains("btn") && !event.target.classList.contains("disabled")) {
        //if element pressed is a button then we are here,
        let elementList = event.target.parentElement.children;
        if (event.target.classList.contains("getList") && elementList[3].textContent != "") {
            getTicketList(elementList[3].textContent);
        }
        if (event.target.classList.contains("issue") && elementList[1].value != "" && elementList[2].value != "") {
            issueTicket(elementList[3].textContent, elementList[1].value, elementList[2].value);
        }
        if (event.target.classList.contains("encash")) {
            encashTicket(elementList[3].textContent, elementList[1].value, elementList[2].value);
        }
    }
});

function getTicketList(ticketID){
    if (ticketID != "") {
        let q = "https://preports-new.iglobalmedia.com/pls/ppoker/P_R_Freeroll_Player_Info";
        window.open(`${q}?In_Choice=2&In_Freeroll_Id=${ticketID}&in_status=0`,
        "_blank");
    }
}

function issueTicket(ticketID,username,comment) {
    if (ticketID != "" && username != "" && comment != "" && confirm(`Are you sure you want to issue (Ticket ID: ${ticketID}) for ${username}?`)) {
        let q = "https://preports-new.iglobalmedia.com/pls/ppoker/p_r_issue_userfreeroll";
        window.open(`${q}?stage=2&account_name=${username}&freeroll_id=${ticketID}&in_brand_id=${getFrontEnd(username)}&p_comments=${comment}`,
        "_blank");
    }
}

function getSettlementAccount(ticketID) {
    let q = tickets.find(el => el.id == ticketID);
    return q.settl;
}

function encashTicket(ticketID,username,comment) {
    //encashing ticket to settlement account
    if (ticketID != "" && username != "" && comment != "" && getSettlementAccount(ticketID) != "cash") {
        console.log(`ID: ${ticketID}, encash from: ${username}, with comment: ${comment}, to: ${getSettlementAccount(ticketID)}`);
        let q = `https://preports-new.iglobalmedia.com/pls/ppoker/p_r_fr_bulk_refund_stage1`
        window.open(`${q}?in_remarks=${comment}&in_target_account_name=${getSettlementAccount(ticketID)}&in_freeroll_id=${ticketID}&in_stage=3&in_target_percent=100&in_accounts=${username}`,
        "_blank");
    }
    //converting ticket to cash if applicable
    if (ticketID != "" && username != "" && comment != "" && getSettlementAccount(ticketID) == "cash") {
        console.log(`ID: ${ticketID}, convert to cash from: ${username}, with comment: ${comment}`);
        let q = "https://preports-new.iglobalmedia.com/pls/ppoker/p_r_fr_bulk_refund_stage1";
        window.open(q + `?in_remarks=${comment}&in_target_account_name=${username}&in_freeroll_id=${ticketID}&in_stage=2&in_target_percent=100`, 
        '_blank',
        "toolbar=no,scrollbars=no,resizable=no,width=400,height=400");
    }
}

function getFrontEnd(username) {
    if (username.startsWith('bb_')) { return 'BWINBE'; } else 
    if (username.startsWith('bd_')) { return 'BWINDK'; } else 
    if (username.startsWith('be_')) { return 'BWINES'; } else 
    if (username.startsWith('bf_')) { return 'BWINFR'; } else 
    if (username.startsWith('bi_')) { return 'BWINIT'; } else 
    if (username.startsWith('br_')) { return 'BWINGR'; } else 
    if (username.startsWith('bz_')) { return 'BWINCOM'; } else 
    if (username.startsWith('cp_')) { return 'PPCZECH'; } else 
    if (username.startsWith('dk_')) { return 'PARTYDK'; } else 
    if (username.startsWith('ds_')) { return 'DANSKESPIL'; } else 
    if (username.startsWith('fr_')) { return 'PARTYFR'; } else 
    if (username.startsWith('gd_')) { return 'GIOCOD'; } else 
    if (username.startsWith('ii_')) { return 'INTRALOTIT'; } else 
    if (username.startsWith('pa_')) { return 'PRTYPREM'; } else 
    if (username.startsWith('pe_')) { return 'PARTYES'; } else 
    if (username.startsWith('pi_')) { return 'PARTYIT'; } else 
    if (username.startsWith('pm_')) { return 'PMU'; } else 
    if (username.startsWith('pp_')) { return 'PARTYPOKER'; } else 
    if (username.startsWith('pr_')) { return 'PREMIUM'; } else 
    if (username.startsWith('ps_')) { return 'PARTYSE'; } else 
    if (username.startsWith('sb_')) { return 'SBCOM'; } else 
    if (username.startsWith('sg_')) { return 'SBGREECE'; } else 
    if (username.startsWith('sh_')) { return 'BWINSH'; } else 
    if (username.startsWith('vb_')) { return 'VISTABET'; } else 
    {
        return "undefined";
    }
}

function filterTickets(e) {
    var text = e.target.value.toLowerCase();
    var listItems = document.querySelectorAll(".ticket-list-item");
    Array.from(listItems).forEach(item => {
        let ticketName = item.children[0].textContent;
        if (ticketName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
}


tickets.forEach(el => {

    let block = document.createElement("div");
    block.classList = "row mb-2 alert alert-dark ticket-list-item";

    let elTicketName = document.createElement("p")
    elTicketName.classList = "col-12 text-bold ticket-list-item-name h5";
    elTicketName.appendChild(document.createTextNode(el.name));
    block.appendChild(elTicketName);

    let elUsername = document.createElement("input")
    elUsername.setAttribute("type", "text");
    elUsername.classList = "col-12 col-sm-4 form-control username";
    elUsername.setAttribute("placeholder", "username");
    block.appendChild(elUsername);

    let elComment = document.createElement("input")
    elComment.setAttribute("type", "text");
    elComment.classList = "col-12 col-sm-8 form-control comment";
    elComment.setAttribute("placeholder", "Reason for actions");
    block.appendChild(elComment);

    let elTicketID = document.createElement("div")
    elTicketID.classList = "text-center bg-warning p-2 ticket-ID";
    elTicketID.appendChild(document.createTextNode(el.id));
    block.appendChild(elTicketID);

    let btn1 = document.createElement("button");
    btn1.classList = "btn btn-warning getList";
    btn1.appendChild(document.createTextNode("Ticket List"));
    block.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.classList = "btn btn-success issue";
    btn2.appendChild(document.createTextNode("Issue"));
    block.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.classList = "btn btn-danger encash";
    btn3.appendChild(document.createTextNode("Encash"));
    block.appendChild(btn3);

    list.appendChild(block);
})

