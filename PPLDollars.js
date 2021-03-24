const list = document.getElementById("element-list");

function encash(a, b, c) {
    let q = "https://preports-new.iglobalmedia.com/pls/ppoker/p_r_fr_bulk_refund_stage1";

    //console.log(q + `?in_remarks=${c}&in_target_account_name=${b}&in_freeroll_id=${a}&in_stage=2&in_target_percent=100`);
    window.open(q + `?in_remarks=${c}&in_target_account_name=${b}&in_freeroll_id=${a}&in_stage=2&in_target_percent=100`, 
        '_blank',
        "toolbar=no,scrollbars=no,resizable=no,width=1200,height=800");
}

function getTickets(a) {
    let p = "https://preports-new.iglobalmedia.com/pls/ppoker/P_R_Freeroll_Player_Info";
    window.open(p + `?In_Choice=2&In_Freeroll_Id=${a}&in_status=1`, 
    '_blank');
}