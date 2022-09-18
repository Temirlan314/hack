export default function formatDate(date, format) {
    var moment = require('moment');
  
    if (!date) {
      return "No date";
    }
    let momentDate = moment(date, format);
    momentDate.locale("en");
    let result = momentDate.format("MMMM DD, YYYY");
    // if (result == "Invalid date") {
    //   console.log(date);
    // }
    return result;
  }