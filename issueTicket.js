const list = document.querySelector("#ticket-list");
const filter = document.querySelector("#filter");

const btnGetList = document.querySelector("#btn-ticket-list");
const btnIssueTicket = document.querySelector("#btn-ticket-issue");
const btnEncashTicket = document.querySelector("#btn-ticket-encash");

const tickets = [
{id: 761473, name: 'DTD MTT Online £11 Ticket#', settl: 'pp_event2101'},
{id: 995362, name: 'DTD MTT Online £11 Ticket [PPL#]', settl: 'pp_event2101'},
{id: 1033430, name: 'DTD MTT Online £22 Ticket#', settl: 'pp_event2101'},
{id: 1033429, name: 'DTD MTT Online £22 Ticket [PPL#]', settl: 'pp_event2101'},
{id: 962387, name: 'DTD MTT Online £55 Ticket#', settl: 'pp_event2101'},
{id: 965360, name: 'DTD MTT Online £55 Ticket [PPL#]', settl: 'pp_event2101'},

{id: 1073472, name: 'Irish Open Online 2021 €5,200 Seat#', settl: 'pp_event1202'},
{id: 1073471, name: 'Irish Open Online 2021 €5,200 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073473, name: 'Irish Open Online 2021 €2,100 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073474, name: 'Irish Open Online 2021 €2,100 Seat#', settl: 'pp_event1202'},
{id: 1073475, name: 'Irish Open Online 2021 €1,100 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073476, name: 'Irish Open Online 2021 €1,100 Seat#', settl: 'pp_event1202'},
{id: 1067373, name: 'Irish Open Online 2021 €1,100 Main Event 1A Seat', settl: 'pp_event1202'},
{id: 1065527, name: 'Irish Open Online 2021 €1,100 Main Event Seat#', settl: 'pp_event1202'},
{id: 1067374, name: 'Irish Open Online 2021 €1,100 Main Event 1B Seat', settl: 'pp_event1202'},
{id: 1065526, name: 'Irish Open Online 2021 €1,100 Main Event Seat', settl: 'pp_event1202'},
{id: 1073469, name: 'Irish Open Online 2021 €1,100 Main Event 1C Seat', settl: 'pp_event1202'},
{id: 1073478, name: 'Irish Open Online 2021 €1,050 Seat#', settl: 'pp_event1202'},
{id: 1073477, name: 'Irish Open Online 2021 €1,050 Seat [PPL]', settl: 'pp_event1202'},
{id: 1078449, name: 'Irish Open Online 2021 #01 Opener 1A €530 Seat', settl: 'pp_event1202'},
{id: 1077505, name: 'Irish Open Online 2021 €530 Seat', settl: 'pp_event1202'},
{id: 1078450, name: 'Irish Open Online 2021 #01 Opener 1B €530 Seat', settl: 'pp_event1202'},
{id: 1078460, name: 'Irish Open Online 2021 #05 Omaha HR €530 Seat', settl: 'pp_event1202'},
{id: 1078452, name: 'Irish Open Online 2021 #01 Opener 1C €530 Seat', settl: 'pp_event1202'},
{id: 1078455, name: 'Irish Open Online 2021 #01 Opener €530 Seat', settl: 'pp_event1202'},
{id: 1073480, name: 'Irish Open Online 2021 €530 Seat#', settl: 'pp_event1202'},
{id: 1073479, name: 'Irish Open Online 2021 €530 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073481, name: 'Irish Open Online 2021 €320 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073482, name: 'Irish Open Online 2021 €320 Seat#', settl: 'pp_event1202'},
{id: 1073484, name: 'Irish Open Online 2021 €275 Seat#', settl: 'pp_event1202'},
{id: 1073483, name: 'Irish Open Online 2021 €275 Seat [PPL]', settl: 'pp_event1202'},
{id: 1078458, name: 'Irish Open Online 2021 #07 6-Max Hyper €265 Seat', settl: 'pp_event1202'},
{id: 1073485, name: 'Irish Open Online 2021 €265 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073486, name: 'Irish Open Online 2021 €265 Seat#', settl: 'pp_event1202'},
{id: 1073487, name: 'Irish Open Online 2021 €215 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073488, name: 'Irish Open Online 2021 €215 Seat#', settl: 'pp_event1202'},
{id: 1073490, name: 'Irish Open Online 2021 €162 Seat#', settl: 'pp_event1202'},
{id: 1073489, name: 'Irish Open Online 2021 €162 Seat [PPL]', settl: 'pp_event1202'},
{id: 1078457, name: 'Irish Open Online 2021 #03 6-Max Turbo €162 Seat', settl: 'pp_event1202'},
{id: 1078456, name: 'Irish Open Online 2021 #02 7-Max Turbo KO €162 Seat', settl: 'pp_event1202'},
{id: 1073492, name: 'Irish Open Online 2021 €109 Seat#', settl: 'pp_event1202'},
{id: 1073501, name: 'Irish Open Online 2021 €109 Mini Main Event 1A Seat', settl: 'pp_event1202'},
{id: 1073491, name: 'Irish Open Online 2021 €109 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073502, name: 'Irish Open Online 2021 €109 Mini Main Event 1B Seat', settl: 'pp_event1202'},
{id: 1078453, name: 'Irish Open Online 2021 €66 Seat#', settl: 'pp_event1202'},
{id: 1078454, name: 'Irish Open Online 2021 €66 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073494, name: 'Irish Open Online 2021 €55 Seat#', settl: 'pp_event1202'},
{id: 1073493, name: 'Irish Open Online 2021 €55 Seat [PPL]', settl: 'pp_event1202'},
{id: 1078461, name: 'Irish Open Online 2021 #05 Mini Omaha HR €55 Seat', settl: 'pp_event1202'},
{id: 1077473, name: 'Irish Open Online 2021 €55 Grand Prix Seat [DTD]', settl: 'pp_event1202'},
{id: 1078462, name: 'Irish Open Online 2021 #06 GP Ireland €55 Seat', settl: 'pp_event1202'},
{id: 1073495, name: 'Irish Open Online 2021 €33 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073496, name: 'Irish Open Online 2021 €33 Seat#', settl: 'pp_event1202'},
{id: 1073497, name: 'Irish Open Online 2021 €27 Seat [PPL]', settl: 'pp_event1202'},
{id: 1073498, name: 'Irish Open Online 2021 €27 Seat#', settl: 'pp_event1202'},
{id: 1073500, name: 'Irish Open Online 2021 €22 Seat#', settl: 'pp_event1202'},
{id: 1073499, name: 'Irish Open Online 2021 €22 Seat [PPL]', settl: 'pp_event1202'},
{id: 1067375, name: 'Irish Open Online 2021 €11 Ticket', settl: 'pp_event1202'},
{id: 1067378, name: 'Irish Open Online 2021 €11 Ticket#', settl: 'pp_event1202'},
{id: 1067379, name: 'Irish Open Online 2021 €11 Ticket*', settl: 'pp_event1202'},
{id: 1078483, name: 'Irish Open Online 2021 €8.80 Ticket#', settl: 'pp_event1202'},
{id: 1078482, name: 'Irish Open Online 2021 €8.80 Ticket', settl: 'pp_event1202'},
{id: 1078481, name: 'Irish Open Online 2021 €8.80 Ticket*', settl: 'pp_event1202'},
{id: 1078478, name: 'Irish Open Online 2021 €7.70 Ticket*', settl: 'pp_event1202'},
{id: 1078479, name: 'Irish Open Online 2021 €7.70 Ticket', settl: 'pp_event1202'},
{id: 1078480, name: 'Irish Open Online 2021 €7.70 Ticket#', settl: 'pp_event1202'},
{id: 1078476, name: 'Irish Open Online 2021 €6.60 Ticket', settl: 'pp_event1202'},
{id: 1078477, name: 'Irish Open Online 2021 €6.60 Ticket#', settl: 'pp_event1202'},
{id: 1078475, name: 'Irish Open Online 2021 €6.60 Ticket*', settl: 'pp_event1202'},
{id: 1078472, name: 'Irish Open Online 2021 €5.50 Ticket*', settl: 'pp_event1202'},
{id: 1078473, name: 'Irish Open Online 2021 €5.50 Ticket', settl: 'pp_event1202'},
{id: 1078474, name: 'Irish Open Online 2021 €5.50 Ticket#', settl: 'pp_event1202'},
{id: 1078484, name: 'Irish Open Online 2021 €4.40 Ticket#', settl: 'pp_event1202'},
{id: 1078469, name: 'Irish Open Online 2021 €4.40 Ticket*', settl: 'pp_event1202'},
{id: 1078470, name: 'Irish Open Online 2021 €4.40 Ticket', settl: 'pp_event1202'},
{id: 1078466, name: 'Irish Open Online 2021 €3.30 Ticket*', settl: 'pp_event1202'},
{id: 1078471, name: 'Irish Open Online 2021 €3.30 Ticket#', settl: 'pp_event1202'},
{id: 1078467, name: 'Irish Open Online 2021 €3.30 Ticket', settl: 'pp_event1202'},
{id: 1078465, name: 'Irish Open Online 2021 €2.20 Ticket#', settl: 'pp_event1202'},
{id: 1078464, name: 'Irish Open Online 2021 €2.20 Ticket', settl: 'pp_event1202'},
{id: 1078463, name: 'Irish Open Online 2021 €2.20 Ticket*', settl: 'pp_event1202'},
{id: 1067380, name: 'Irish Open Online 2021 €1.10 Ticket', settl: 'pp_event1202'},
{id: 1067381, name: 'Irish Open Online 2021 €1.10 Ticket#', settl: 'pp_event1202'},
{id: 1067382, name: 'Irish Open Online 2021 €1.10 Ticket*', settl: 'pp_event1202'},


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
    if (ticketID != "" && username != "" && comment != "") {
        console.log(`ID: ${ticketID}, encash from: ${username}, with comment: ${comment}, to: ${getSettlementAccount(ticketID)}`);
        let q = `https://preports-new.iglobalmedia.com/pls/ppoker/p_r_fr_bulk_refund_stage1`
        window.open(`${q}?in_remarks=${comment}&in_target_account_name=${getSettlementAccount(ticketID)}&in_freeroll_id=${ticketID}&in_stage=3&in_target_percent=100&in_accounts=${username}`,
        "_blank");
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
    if (username.startsWith('cl_')) { return 'CORAL'; } else 
    if (username.startsWith('cr_')) { return 'CRYSTALBET'; } else 
    if (username.startsWith('ld_')) { return 'LADBROKEUK'; } else 
    if (username.startsWith('sp_')) { return 'PPSOCHI'; } else 
    if (username.startsWith('by_')) { return 'BWINDE'; } else 
    if (username.startsWith('pd_')) { return 'PPDE'; } else 
    if (username.startsWith('ry_')) { return 'PREMIUMDE'; } else 
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

