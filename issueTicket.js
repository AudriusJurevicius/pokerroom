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

{id: 1064380, name: 'FootyAccums Poker £5.50 Ticket*', settl: 'pp_event1201'},
{id: 1054366, name: 'FootyAccums Poker £5.50 Ticket#', settl: 'pp_event1201'},
{id: 1052427, name: 'FootyAccums Poker £5.50 Ticket', settl: 'pp_event1201'},
{id: 1052429, name: 'FootyAccums Poker £22 Champions Cup Ticket', settl: 'pp_event1201'},
{id: 1052428, name: 'FootyAccums Poker £22 Champions Cup Ticket#', settl: 'pp_event1201'},

{id: 1089906, name: 'WPT WOC 2021 $4.40 Phase 1 Ticket', settl: 'pp_event1201'},
{id: 1092146, name: 'WPT WOC 2021 $4.40 Pro Hunt Satellite Ticket [A]', settl: 'pp_event1201'},
{id: 1092147, name: 'WPT WOC 2021 $4.40 Pro Hunt Satellite Ticket [B]', settl: 'pp_event1201'},
{id: 1089908, name: 'WPT WOC 2021 $4.40 Satellite Ticket', settl: 'pp_event1201'},
{id: 1089911, name: 'WPT WOC 2021 $4.40 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1089907, name: 'WPT WOC 2021 $4.40 Ticket', settl: 'pp_event1201'},
{id: 1089909, name: 'WPT WOC 2021 $4.40 Ticket#', settl: 'pp_event1201'},
{id: 1089910, name: 'WPT WOC 2021 $4.40 Ticket*', settl: 'pp_event1201'},
{id: 1092084, name: 'WPT WOC 2021 $5.50 #05 Super5 Ticket', settl: 'pp_event1201'},
{id: 1092164, name: 'WPT WOC 2021 $5.50 #05 Super5 Ticket *', settl: 'pp_event1201'},
{id: 1092085, name: 'WPT WOC 2021 $5.50 #05 Super5 Ticket#', settl: 'pp_event1201'},
{id: 1092177, name: 'WPT WOC 2021 $5.50 #11 Super5 KO Ticket', settl: 'pp_event1201'},
{id: 1092086, name: 'WPT WOC 2021 $5.50 #11 Super5 KO Ticket', settl: 'pp_event1201'},
{id: 1092087, name: 'WPT WOC 2021 $5.50 #11 Super5 KO Ticket#', settl: 'pp_event1201'},
{id: 1092148, name: 'WPT WOC 2021 $5.50 Pro Hunt Satellite Ticket [A]', settl: 'pp_event1201'},
{id: 1092149, name: 'WPT WOC 2021 $5.50 Pro Hunt Satellite Ticket [B]', settl: 'pp_event1201'},
{id: 1092020, name: 'WPT WOC 2021 $5.50 Satellite Ticket', settl: 'pp_event1201'},
{id: 1092023, name: 'WPT WOC 2021 $5.50 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1092019, name: 'WPT WOC 2021 $5.50 Ticket', settl: 'pp_event1201'},
{id: 1092021, name: 'WPT WOC 2021 $5.50 Ticket#', settl: 'pp_event1201'},
{id: 1092022, name: 'WPT WOC 2021 $5.50 Ticket*', settl: 'pp_event1201'},
{id: 1092134, name: 'WPT WOC 2021 $7.70 Ticket', settl: 'pp_event1201'},
{id: 1092135, name: 'WPT WOC 2021 $7.70 Ticket#', settl: 'pp_event1201'},
{id: 1092136, name: 'WPT WOC 2021 $7.70 Ticket*', settl: 'pp_event1201'},
{id: 1092137, name: 'WPT WOC 2021 $11 #14 Mini Closer Day 1 Seat', settl: 'pp_event1201'},
{id: 1092188, name: 'WPT WOC 2021 $11 #14 Mini Closer Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092190, name: 'WPT WOC 2021 $11 #14 Mini Closer Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092141, name: 'WPT WOC 2021 $11 Ticket', settl: 'pp_event1201'},
{id: 1092139, name: 'WPT WOC 2021 $11 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1092140, name: 'WPT WOC 2021 $11 Ticket#', settl: 'pp_event1201'},
{id: 1092138, name: 'WPT WOC 2021 $11 Ticket*', settl: 'pp_event1201'},
{id: 1092051, name: 'WPT WOC 2021 $22 #01 Mini Opener Day 1 Seat', settl: 'pp_event1201'},
{id: 1092151, name: 'WPT WOC 2021 $22 #01 Mini Opener Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092150, name: 'WPT WOC 2021 $22 #01 Mini Opener Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092064, name: 'WPT WOC 2021 $22 #02 Micro Omaha Championship 1 Turbo Ticket', settl: 'pp_event1201'},
{id: 1092061, name: 'WPT WOC 2021 $22 #02 Micro Omaha Championship 1A Ticket', settl: 'pp_event1201'},
{id: 1092062, name: 'WPT WOC 2021 $22 #02 Micro Omaha Championship 1B Ticket', settl: 'pp_event1201'},
{id: 1092063, name: 'WPT WOC 2021 $22 #02 Micro Omaha Championship 1C Ticket', settl: 'pp_event1201'},
{id: 1092154, name: 'WPT WOC 2021 $22 #02 Micro Omaha Championship Day 1 Ticket', settl: 'pp_event1201'},
{id: 1092160, name: 'WPT WOC 2021 $22 #02 Micro Omaha Championship Day 1 Ticket #', settl: 'pp_event1201'},
{id: 1092157, name: 'WPT WOC 2021 $22 #02 Micro Omaha Championship Day 1 Ticket *', settl: 'pp_event1201'},
{id: 1092077, name: 'WPT WOC 2021 $22 #06 Micro 7-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092078, name: 'WPT WOC 2021 $22 #06 Micro 7-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092079, name: 'WPT WOC 2021 $22 #06 Micro 7-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092167, name: 'WPT WOC 2021 $22 #06 Micro 7-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092170, name: 'WPT WOC 2021 $22 #06 Micro 7-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092173, name: 'WPT WOC 2021 $22 #06 Micro 7-Max Championship Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092080, name: 'WPT WOC 2021 $22 #06 Micro 7-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092099, name: 'WPT WOC 2021 $22 #12 Micro 6-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092100, name: 'WPT WOC 2021 $22 #12 Micro 6-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092101, name: 'WPT WOC 2021 $22 #12 Micro 6-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092186, name: 'WPT WOC 2021 $22 #12 Micro 6-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092180, name: 'WPT WOC 2021 $22 #12 Micro 6-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092183, name: 'WPT WOC 2021 $22 #12 Micro 6-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092102, name: 'WPT WOC 2021 $22 #12 Micro 6-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092125, name: 'WPT WOC 2021 $22 #15 Micro Mix-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092126, name: 'WPT WOC 2021 $22 #15 Micro Mix-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092127, name: 'WPT WOC 2021 $22 #15 Micro Mix-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092193, name: 'WPT WOC 2021 $22 #15 Micro Mix-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092196, name: 'WPT WOC 2021 $22 #15 Micro Mix-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092199, name: 'WPT WOC 2021 $22 #15 Micro Mix-Max Championship Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092128, name: 'WPT WOC 2021 $22 #15 Micro Mix-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092110, name: 'WPT WOC 2021 $22 #16 Micro Turbo Championship Seat', settl: 'pp_event1201'},
{id: 1092202, name: 'WPT WOC 2021 $22 #16 Micro Turbo Championship Seat #', settl: 'pp_event1201'},
{id: 1092205, name: 'WPT WOC 2021 $22 #16 Micro Turbo Championship Seat *', settl: 'pp_event1201'},
{id: 1089913, name: 'WPT WOC 2021 $22 Satellite Ticket', settl: 'pp_event1201'},
{id: 1089915, name: 'WPT WOC 2021 $22 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1089912, name: 'WPT WOC 2021 $22 Ticket', settl: 'pp_event1201'},
{id: 1089914, name: 'WPT WOC 2021 $22 Ticket#', settl: 'pp_event1201'},
{id: 1089916, name: 'WPT WOC 2021 $22 Ticket*', settl: 'pp_event1201'},
{id: 1092104, name: 'WPT WOC 2021 $27.50 #01 Opener Satellite Ticket [A]', settl: 'pp_event1201'},
{id: 1092105, name: 'WPT WOC 2021 $27.50 #01 Opener Satellite Ticket [B]', settl: 'pp_event1201'},
{id: 1091958, name: 'WPT WOC 2021 $33 Pro Hunt Seat', settl: 'pp_event1201'},
{id: 1091959, name: 'WPT WOC 2021 $33 Pro Hunt Seat#', settl: 'pp_event1201'},
{id: 1091960, name: 'WPT WOC 2021 $33 Pro Hunt Seat*', settl: 'pp_event1201'},
{id: 1091961, name: 'WPT WOC 2021 $33 Ticket', settl: 'pp_event1201'},
{id: 1091964, name: 'WPT WOC 2021 $33 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1091963, name: 'WPT WOC 2021 $33 Ticket#', settl: 'pp_event1201'},
{id: 1091962, name: 'WPT WOC 2021 $33 Ticket*', settl: 'pp_event1201'},
{id: 1092106, name: 'WPT WOC 2021 $44 #01 Opener Satellite Ticket [A]', settl: 'pp_event1201'},
{id: 1092107, name: 'WPT WOC 2021 $44 #01 Opener Satellite Ticket [B]', settl: 'pp_event1201'},
{id: 1092133, name: 'WPT WOC 2021 $44 Satellite Ticket', settl: 'pp_event1201'},
{id: 1092129, name: 'WPT WOC 2021 $44 Ticket', settl: 'pp_event1201'},
{id: 1092131, name: 'WPT WOC 2021 $44 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1092130, name: 'WPT WOC 2021 $44 Ticket#', settl: 'pp_event1201'},
{id: 1092132, name: 'WPT WOC 2021 $44 Ticket*', settl: 'pp_event1201'},
{id: 1092081, name: 'WPT WOC 2021 $55 #04 Super50 Ticket', settl: 'pp_event1201'},
{id: 1092163, name: 'WPT WOC 2021 $55 #04 Super50 Ticket *', settl: 'pp_event1201'},
{id: 1092082, name: 'WPT WOC 2021 $55 #04 Super50 Ticket#', settl: 'pp_event1201'},
{id: 1092176, name: 'WPT WOC 2021 $55 #10 Super50 KO Ticket', settl: 'pp_event1201'},
{id: 1092088, name: 'WPT WOC 2021 $55 #10 Super50 KO Ticket', settl: 'pp_event1201'},
{id: 1092089, name: 'WPT WOC 2021 $55 #10 Super50 KO Ticket#', settl: 'pp_event1201'},
{id: 1089923, name: 'WPT WOC 2021 $55 Satellite Ticket', settl: 'pp_event1201'},
{id: 1089925, name: 'WPT WOC 2021 $55 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1089922, name: 'WPT WOC 2021 $55 Ticket', settl: 'pp_event1201'},
{id: 1089926, name: 'WPT WOC 2021 $55 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1089924, name: 'WPT WOC 2021 $55 Ticket#', settl: 'pp_event1201'},
{id: 1089927, name: 'WPT WOC 2021 $55 Ticket*', settl: 'pp_event1201'},
{id: 1092052, name: 'WPT WOC 2021 $109 #14 Closer Day 1 Seat', settl: 'pp_event1201'},
{id: 1092187, name: 'WPT WOC 2021 $109 #14 Closer Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092189, name: 'WPT WOC 2021 $109 #14 Closer Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092210, name: 'WPT WOC 2021 $109 Micro Main Event Day 1 Seat', settl: 'pp_event1201'},
{id: 1092212, name: 'WPT WOC 2021 $109 Micro Main Event Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092211, name: 'WPT WOC 2021 $109 Micro Main Event Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092145, name: 'WPT WOC 2021 $109 Micro Main Event Day 1A Seat', settl: 'pp_event1201'},
{id: 1092144, name: 'WPT WOC 2021 $109 Micro Main Event Day 1B Seat', settl: 'pp_event1201'},
{id: 1092143, name: 'WPT WOC 2021 $109 Micro Main Event Day 1C Seat', settl: 'pp_event1201'},
{id: 1092142, name: 'WPT WOC 2021 $109 Micro Main Event Day Turbo Seat', settl: 'pp_event1201'},
{id: 1089901, name: 'WPT WOC 2021 $109 Satellite Ticket', settl: 'pp_event1201'},
{id: 1089903, name: 'WPT WOC 2021 $109 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1089900, name: 'WPT WOC 2021 $109 Ticket', settl: 'pp_event1201'},
{id: 1089904, name: 'WPT WOC 2021 $109 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1089902, name: 'WPT WOC 2021 $109 Ticket#', settl: 'pp_event1201'},
{id: 1089905, name: 'WPT WOC 2021 $109 Ticket*', settl: 'pp_event1201'},
{id: 1091778, name: 'WPT WOC 2021 $215 #01 Opener Day 1 Seat', settl: 'pp_event1201'},
{id: 1091779, name: 'WPT WOC 2021 $215 #01 Opener Day 1 Seat#', settl: 'pp_event1201'},
{id: 1091955, name: 'WPT WOC 2021 $215 #01 Opener Day 1 Seat*', settl: 'pp_event1201'},
{id: 1092060, name: 'WPT WOC 2021 $215 #02 Mini Omaha Championship 1 Turbo Ticket', settl: 'pp_event1201'},
{id: 1092057, name: 'WPT WOC 2021 $215 #02 Mini Omaha Championship 1A Ticket', settl: 'pp_event1201'},
{id: 1092058, name: 'WPT WOC 2021 $215 #02 Mini Omaha Championship 1B Ticket', settl: 'pp_event1201'},
{id: 1092059, name: 'WPT WOC 2021 $215 #02 Mini Omaha Championship 1C Ticket', settl: 'pp_event1201'},
{id: 1092153, name: 'WPT WOC 2021 $215 #02 Mini Omaha Championship Day 1 Ticket', settl: 'pp_event1201'},
{id: 1092159, name: 'WPT WOC 2021 $215 #02 Mini Omaha Championship Day 1 Ticket #', settl: 'pp_event1201'},
{id: 1092156, name: 'WPT WOC 2021 $215 #02 Mini Omaha Championship Day 1 Ticket *', settl: 'pp_event1201'},
{id: 1092073, name: 'WPT WOC 2021 $215 #06 Mini 7-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092074, name: 'WPT WOC 2021 $215 #06 Mini 7-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092075, name: 'WPT WOC 2021 $215 #06 Mini 7-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092166, name: 'WPT WOC 2021 $215 #06 Mini 7-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092169, name: 'WPT WOC 2021 $215 #06 Mini 7-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092172, name: 'WPT WOC 2021 $215 #06 Mini 7-Max Championship Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092076, name: 'WPT WOC 2021 $215 #06 Mini 7-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092095, name: 'WPT WOC 2021 $215 #12 Mini 6-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092096, name: 'WPT WOC 2021 $215 #12 Mini 6-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092097, name: 'WPT WOC 2021 $215 #12 Mini 6-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092185, name: 'WPT WOC 2021 $215 #12 Mini 6-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092179, name: 'WPT WOC 2021 $215 #12 Mini 6-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092182, name: 'WPT WOC 2021 $215 #12 Mini 6-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092098, name: 'WPT WOC 2021 $215 #12 Mini 6-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092121, name: 'WPT WOC 2021 $215 #15 Mini Mix-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092122, name: 'WPT WOC 2021 $215 #15 Mini Mix-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092123, name: 'WPT WOC 2021 $215 #15 Mini Mix-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092192, name: 'WPT WOC 2021 $215 #15 Mini Mix-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092195, name: 'WPT WOC 2021 $215 #15 Mini Mix-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092198, name: 'WPT WOC 2021 $215 #15 Mini Mix-Max Championship Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092124, name: 'WPT WOC 2021 $215 #15 Mini Mix-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092109, name: 'WPT WOC 2021 $215 #16 Mini Turbo Championship Seat', settl: 'pp_event1201'},
{id: 1092201, name: 'WPT WOC 2021 $215 #16 Mini Turbo Championship Seat #', settl: 'pp_event1201'},
{id: 1092204, name: 'WPT WOC 2021 $215 #16 Mini Turbo Championship Seat *', settl: 'pp_event1201'},
{id: 1091954, name: 'WPT WOC 2021 $215 Ticket', settl: 'pp_event1201'},
{id: 1091780, name: 'WPT WOC 2021 $215 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1091957, name: 'WPT WOC 2021 $215 Ticket#', settl: 'pp_event1201'},
{id: 1091956, name: 'WPT WOC 2021 $215 Ticket*', settl: 'pp_event1201'},
{id: 1089929, name: 'WPT WOC 2021 $320 Satellite Ticket', settl: 'pp_event1201'},
{id: 1089931, name: 'WPT WOC 2021 $320 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1089928, name: 'WPT WOC 2021 $320 Ticket', settl: 'pp_event1201'},
{id: 1089932, name: 'WPT WOC 2021 $320 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1089930, name: 'WPT WOC 2021 $320 Ticket#', settl: 'pp_event1201'},
{id: 1092050, name: 'WPT WOC 2021 $530 #03 WPT500 Day 1 Seat', settl: 'pp_event1201'},
{id: 1092161, name: 'WPT WOC 2021 $530 #03 WPT500 Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092162, name: 'WPT WOC 2021 $530 #03 WPT500 Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092049, name: 'WPT WOC 2021 $530 #09 WPT500 Knockout Day 1 Seat', settl: 'pp_event1201'},
{id: 1092174, name: 'WPT WOC 2021 $530 #09 WPT500 Knockout Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092175, name: 'WPT WOC 2021 $530 #09 WPT500 Knockout Day 1 Seat *', settl: 'pp_event1201'},
{id: 1089895, name: 'WPT WOC 2021 $530 Satellite Ticket', settl: 'pp_event1201'},
{id: 1089897, name: 'WPT WOC 2021 $530 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1089894, name: 'WPT WOC 2021 $530 Ticket', settl: 'pp_event1201'},
{id: 1089898, name: 'WPT WOC 2021 $530 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1089896, name: 'WPT WOC 2021 $530 Ticket#', settl: 'pp_event1201'},
{id: 1089899, name: 'WPT WOC 2021 $530 Ticket*', settl: 'pp_event1201'},
{id: 1092024, name: 'WPT WOC 2021 $1,050 Mini Main Event Day 1 Seat', settl: 'pp_event1201'},
{id: 1092206, name: 'WPT WOC 2021 $1,050 Mini Main Event Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092209, name: 'WPT WOC 2021 $1,050 Mini Main Event Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092025, name: 'WPT WOC 2021 $1,050 Mini Main Event Day 1A Seat', settl: 'pp_event1201'},
{id: 1092026, name: 'WPT WOC 2021 $1,050 Mini Main Event Day 1B Seat', settl: 'pp_event1201'},
{id: 1092027, name: 'WPT WOC 2021 $1,050 Mini Main Event Day 1C Seat', settl: 'pp_event1201'},
{id: 1092028, name: 'WPT WOC 2021 $1,050 Mini Main Event Day Turbo Seat', settl: 'pp_event1201'},
{id: 1089918, name: 'WPT WOC 2021 $1,050 Satellite Ticket', settl: 'pp_event1201'},
{id: 1089921, name: 'WPT WOC 2021 $1,050 Satellite Ticket [PPL]', settl: 'pp_event1201'},
{id: 1089920, name: 'WPT WOC 2021 $1,050 Satellite Ticket#', settl: 'pp_event1201'},
{id: 1089917, name: 'WPT WOC 2021 $1,050 Ticket', settl: 'pp_event1201'},
{id: 1092030, name: 'WPT WOC 2021 $1,050 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1089919, name: 'WPT WOC 2021 $1,050 Ticket#', settl: 'pp_event1201'},
{id: 1092029, name: 'WPT WOC 2021 $1,050 Ticket*', settl: 'pp_event1201'},
{id: 1092056, name: 'WPT WOC 2021 $2,100 #02 Omaha Championship 1 Turbo Ticket', settl: 'pp_event1201'},
{id: 1092053, name: 'WPT WOC 2021 $2,100 #02 Omaha Championship 1A Ticket', settl: 'pp_event1201'},
{id: 1092054, name: 'WPT WOC 2021 $2,100 #02 Omaha Championship 1B Ticket', settl: 'pp_event1201'},
{id: 1092055, name: 'WPT WOC 2021 $2,100 #02 Omaha Championship 1C Ticket', settl: 'pp_event1201'},
{id: 1092152, name: 'WPT WOC 2021 $2,100 #02 Omaha Championship Day 1 Ticket', settl: 'pp_event1201'},
{id: 1092158, name: 'WPT WOC 2021 $2,100 #02 Omaha Championship Day 1 Ticket #', settl: 'pp_event1201'},
{id: 1092155, name: 'WPT WOC 2021 $2,100 #02 Omaha Championship Day 1 Ticket *', settl: 'pp_event1201'},
{id: 1092069, name: 'WPT WOC 2021 $2,100 #06 7-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092070, name: 'WPT WOC 2021 $2,100 #06 7-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092071, name: 'WPT WOC 2021 $2,100 #06 7-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092165, name: 'WPT WOC 2021 $2,100 #06 7-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092168, name: 'WPT WOC 2021 $2,100 #06 7-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092171, name: 'WPT WOC 2021 $2,100 #06 7-Max Championship Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092072, name: 'WPT WOC 2021 $2,100 #06 7-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092091, name: 'WPT WOC 2021 $2,100 #12 6-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092092, name: 'WPT WOC 2021 $2,100 #12 6-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092093, name: 'WPT WOC 2021 $2,100 #12 6-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092184, name: 'WPT WOC 2021 $2,100 #12 6-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092178, name: 'WPT WOC 2021 $2,100 #12 6-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092181, name: 'WPT WOC 2021 $2,100 #12 6-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092094, name: 'WPT WOC 2021 $2,100 #12 6-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092117, name: 'WPT WOC 2021 $2,100 #15 Mix-Max Championship 1A Seat', settl: 'pp_event1201'},
{id: 1092118, name: 'WPT WOC 2021 $2,100 #15 Mix-Max Championship 1B Seat', settl: 'pp_event1201'},
{id: 1092119, name: 'WPT WOC 2021 $2,100 #15 Mix-Max Championship 1C Seat', settl: 'pp_event1201'},
{id: 1092191, name: 'WPT WOC 2021 $2,100 #15 Mix-Max Championship Day 1 Seat', settl: 'pp_event1201'},
{id: 1092194, name: 'WPT WOC 2021 $2,100 #15 Mix-Max Championship Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092197, name: 'WPT WOC 2021 $2,100 #15 Mix-Max Championship Day 1 Seat *', settl: 'pp_event1201'},
{id: 1092120, name: 'WPT WOC 2021 $2,100 #15 Mix-Max Championship Turbo Seat', settl: 'pp_event1201'},
{id: 1092108, name: 'WPT WOC 2021 $2,100 #16 Turbo Championship Seat', settl: 'pp_event1201'},
{id: 1092200, name: 'WPT WOC 2021 $2,100 #16 Turbo Championship Seat #', settl: 'pp_event1201'},
{id: 1092203, name: 'WPT WOC 2021 $2,100 #16 Turbo Championship Seat *', settl: 'pp_event1201'},
{id: 1092015, name: 'WPT WOC 2021 $2,100 Ticket', settl: 'pp_event1201'},
{id: 1092018, name: 'WPT WOC 2021 $2,100 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1092016, name: 'WPT WOC 2021 $2,100 Ticket#', settl: 'pp_event1201'},
{id: 1092017, name: 'WPT WOC 2021 $2,100 Ticket*', settl: 'pp_event1201'},
{id: 1089891, name: 'WPT WOC 2021 $5,300 Main Event Day 1 Seat', settl: 'pp_event1201'},
{id: 1092207, name: 'WPT WOC 2021 $5,300 Main Event Day 1 Seat #', settl: 'pp_event1201'},
{id: 1092208, name: 'WPT WOC 2021 $5,300 Main Event Day 1 Seat *', settl: 'pp_event1201'},
{id: 1089888, name: 'WPT WOC 2021 $5,300 Main Event Day 1A Seat', settl: 'pp_event1201'},
{id: 1089889, name: 'WPT WOC 2021 $5,300 Main Event Day 1B Seat', settl: 'pp_event1201'},
{id: 1089890, name: 'WPT WOC 2021 $5,300 Main Event Day 1C Seat', settl: 'pp_event1201'},
{id: 1089892, name: 'WPT WOC 2021 $5,300 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1089893, name: 'WPT WOC 2021 $5,300 Ticket#', settl: 'pp_event1201'},
{id: 1092090, name: 'WPT WOC 2021 $10,300 #08 High Roller Championship Seat', settl: 'pp_event1201'},
{id: 1092010, name: 'WPT WOC 2021 $10,300 Ticket', settl: 'pp_event1201'},
{id: 1092014, name: 'WPT WOC 2021 $10,300 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1092011, name: 'WPT WOC 2021 $10,300 Ticket#', settl: 'pp_event1201'},
{id: 1092012, name: 'WPT WOC 2021 $10,300 Ticket*', settl: 'pp_event1201'},
{id: 1092103, name: 'WPT WOC 2021 $25,500 #13 Super High Roller Championship Seat', settl: 'pp_event1201'},
{id: 1092007, name: 'WPT WOC 2021 $25,500 Ticket', settl: 'pp_event1201'},
{id: 1092013, name: 'WPT WOC 2021 $25,500 Ticket [PPL]', settl: 'pp_event1201'},
{id: 1092008, name: 'WPT WOC 2021 $25,500 Ticket#', settl: 'pp_event1201'},
{id: 1092009, name: 'WPT WOC 2021 $25,500 Ticket*', settl: 'pp_event1201'},

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
	if (username.startsWith('ov_')) { return 'OPTIBETLV'; } else 
	if (username.startsWith('oe_')) { return 'OPTIBETEE'; } else 
	if (username.startsWith('ee_')) { return 'EUROBETBE'; } else 
    {
        return "missing frontend, message Jose!";
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

