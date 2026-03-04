var categories = ['Software','Network','Hardware','Database','Security'];
var subcategories = ['Email','VPN','Printer','Access','Connectivity','Performance','Backup','License'];
var callers = ['abel.tuter','aileen.mottern','abraham.lincoln','adela.cervantsz'];
var groups = ['Service Desk','Network Support','Hardware Support','Software Support','Database Admin','Security Team'];
var shortDescs = [
'Email server is down','VPN connection failing','Printer not responding',
'Database performance degraded','Network switch failure','Software license expired',
'Backup job failed','User cannot access shared drive','Server CPU at 100 percent',
'Application crashing on startup','SSL certificate expired','Password reset required',
'Firewall blocking traffic','Memory error on server','Disk space critically low'
];

for(var i = 1; i <= 200; i++){
    var inc = new GlideRecord('incident');
    inc.initialize();
    inc.short_description = shortDescs[i % shortDescs.length] + ' - ticket ' + i;
    inc.category = categories[i % categories.length];
    inc.subcategory = subcategories[i % subcategories.length];
    inc.urgency = (i % 3) + 1;
    inc.impact = (i % 3) + 1;
    inc.priority = (i % 4) + 1;
    inc.state = [1,2,6][i % 3];
    inc.description = 'This is a sample incident record number ' + i + ' created for testing and dashboard purposes.';
    inc.insert();
}
gs.print('Done! 200 incidents created.');