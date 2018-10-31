function doGet(e) {

  var id = e && e.parameter && e.parameter.id ? e.parameter.id : "id missing";
  var mode = e && e.parameter && e.parameter.mode ? e.parameter.mode : "details";
  var file = getWebContentLink(id);
  
  if (mode === "image") {
    return HtmlService
    .createHtmlOutput('<img src="' + file.webContentLink + '">')
  }
  else {
    return ContentService
    .createTextOutput(JSON.stringify(file))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
function getWebContentLink(id) {
  // Drive.Files.get(fileId)
  return Drive.Files.get(id, {
    fields:"id,title,webContentLink"
  });
  
}
