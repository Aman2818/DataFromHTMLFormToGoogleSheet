let sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1V-IcpiSrncugMDtVjcaoOzKS92yudIQYScxEMA38pcs/edit#gid=0');
// sheet variable is made to store the which spreadsheet we are using
// "SpreadsheetApp" it is a fixed objext which allow us to select in which spreadsheet we are trying to get the data

let sheetName=sheet.getSheetByName('Sheet2');
//Since we can make multiple sheets inside a google spreadsheer page So Now we have tell which sheet in the given spreadsheet page we are using.
//here I am using 'Sheet1' so i have mentioned it there.

function doPost(e){ // here this function should have same name as "doPost"
  let data = e.parameter; // this 'data' variable here will receive all the parameter that we have created like in my scenario -'name' and 'college' 
  sheetName.appendRow([data.name,data.college]); // here we are appending name and college parameter in the sheet1
  return ContentService.createTextOutput("Data Saved Successfully") //This pass out a info that 'data is saved Succesfully'
}