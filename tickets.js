const list = document.getElementById("element-list");

function encash(tickedID, eventAccount, comment) {
    let q = "https://preports-new.iglobalmedia.com/pls/ppoker/p_r_fr_bulk_refund_stage1";
    window.open(`${q}?in_remarks=${comment}&in_target_account_name=${eventAccount}&in_freeroll_id=${tickedID}&in_stage=2&in_target_percent=100`, 
        '_blank',
        "toolbar=no,scrollbars=no,resizable=no,width=1200,height=800");
}

function getTickets(tickedID) {
    let q = "https://preports-new.iglobalmedia.com/pls/ppoker/P_R_Freeroll_Player_Info";
    window.open(`${q}?In_Choice=2&In_Freeroll_Id=${tickedID}&in_status=0`);
}

function releaseTickets(tickedID, comment) {
    let q = "https://preports-new.iglobalmedia.com/pls/ppoker/p_r_convert_fr_to_td_n_cash";
    window.open(`${q}?in_freeroll_id=${tickedID}&in_remarks=${comment}&in_stage=2&in_convert_to=4`,
    '_blank',
    "toolbar=no,scrollbars=no,resizable=no,width=1200,height=800");
}

list.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("getTicketList")) {
        let element = event.target.parentElement.parentElement.children;
        getTickets(element[0].textContent);
    }
    if (event.target.classList.contains("encashTickets")) {
        let element = event.target.parentElement.parentElement.children;
        encash(element[0].textContent, element[1].textContent, element[4].textContent);
    }
    if (event.target.classList.contains("releaseTickets")) {
        let element = event.target.parentElement.parentElement.children;
        releaseTickets(element[0].textContent, element[4].textContent);
    }
});