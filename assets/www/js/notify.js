var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyAPNI6bfVjElDR0hVK8aco9Am_An5pmmO4');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and Farms Central \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bFjgTzyJ-l_3R2AORf3w_AW7LemEhAdC20mpMVPwT0GAPfVtnlZDA2zJMzw904QoHsbPVYJEVZ8BgcDUvbMjQN9OW6Wj3Se7onuvaFb64z7w2B8JxZwkDo3MVEX7PGtb_TDlYmNgFbDjK9PxVEcgzw10XEl_A');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});






// var sender = new gcm.Sender('AIzaSyAPNI6bfVjElDR0hVK8aco9Am_An5pmmO4');
// // var message = new gcm.Message();
// // message.addData('key1','testdarinodegcm');
// var registrationIds = [];
// message.addData('message',"\u270C Peace, Love \u2764 and Farms Central \u2706!");
// message.addData('title','Push Notification Sample' );
// message.addData('msgcnt','3'); // Shows up in the notification in the status bar
// message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
// message.timeToLive = 3000;
// registrationIds.push('APA91bE_UmbdedhJpo-uK-PLDDd-AZMz6mm_Fstcm0xF64U-HWDoJIroiBqi5Leq99pxFY9QabiclkhrC1LRDkOqv2C8iT3zu4Auj9zIPLORSwyS7Sc6hCqANEq9C663fqsWiMZZbAcA8DZP71s_3k6DCLPAE5KSA');
// sender.send(message, registrationIds, 4, function (err, result) {
// console.log(result);
// });