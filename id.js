// function makeid(num = 4) {
//   let result = "";
//   let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   var characters9 = characters.length;
//   for (var i = 0; i < num; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters9));
//   }
//   return result;
// }
// module.exports = {makeid};







// public/id.js

/**
 * Generates unique session IDs for WOLFBOT
 * Format: WOLF-[timestamp]-[random]
 */
function makeid() {
    const prefix = "WOLF-";
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return prefix + timestamp + "-" + random;
}

/**
 * Generates display pairing code (8 characters)
 * Format: WOLF-XXXX
 */
function makePairingCode() {
    const prefix = "WOLF-";
    let code = '';
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed similar chars
    
    for (let i = 0; i < 4; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix + code;
}

// Export functions
module.exports = { 
    makeid,
    makePairingCode 
};