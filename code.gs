function doPost(e) {
  if (typeof e !== 'undefined') { 
    var ss = SpreadsheetApp.getActiveSpreadsheet(); 
    var sheet = ss.getSheetByName('Sheet1');
    var lastRow = sheet.getLastRow();


    // extract the relevant data
    var parameter = e.parameter;
    var teamDomain = parameter.team_domain;
    var channelName = parameter.channel_name;
    var userName = parameter.user_name;
    var bookName = parameter.text;
    var date = new Date();
    var slackDetails = [date,teamDomain,channelName,userName,bookName];

    // paste the slack details to the sheet
    sheet.getRange(lastRow + 1,1,1,5).setValues([slackDetails]);
  }
  return ContentService.createTextOutput('Thank You! Your contribution keeps AMT sustainable. :tada:');
}
