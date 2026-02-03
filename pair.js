// const PastebinAPI = require('pastebin-js');
// const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
// const { makeid } = require('./id');
// const express = require('express');
// const fs = require('fs');
// let router = express.Router();
// const pino = require('pino');
// const {
//     default: Mbuvi_Tech,
//     useMultiFileAuthState,
//     delay,
//     makeCacheableSignalKeyStore,
//     Browsers
// } = require('@whiskeysockets/baileys');

// function removeFile(FilePath) {
//     if (!fs.existsSync(FilePath)) return false;
//     fs.rmSync(FilePath, { recursive: true, force: true });
// }

// router.get('/', async (req, res) => {
//     const id = makeid();
//     let num = req.query.number;

//     async function Mbuvi_MD_PAIR_CODE() {
//         const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
//         try {
//             let Pair_Code_By_Mbuvi_Tech = Mbuvi_Tech({
//                 auth: {
//                     creds: state.creds,
//                     keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
//                 },
//                 // FIXED VERSION ONLY
//                 version: [2, 3001, 7],
//                 printQRInTerminal: false,
//                 logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
//                 browser: Browsers.macOS('Chrome')
//             });

//             if (!Pair_Code_By_Mbuvi_Tech.authState.creds.registered) {
//                 await delay(1500);
//                 num = num.replace(/[^0-9]/g, '');
//                 const code = await Pair_Code_By_Mbuvi_Tech.requestPairingCode(num);
//                 if (!res.headersSent) {
//                     await res.send({ code });
//                 }
//             }

//             Pair_Code_By_Mbuvi_Tech.ev.on('creds.update', saveCreds);
//             Pair_Code_By_Mbuvi_Tech.ev.on('connection.update', async (s) => {
//                 const { connection, lastDisconnect } = s;

//                 if (connection === 'open') {
//                     await Pair_Code_By_Mbuvi_Tech.newsletterFollow("120363424199376597@newsletter");
//                     await Pair_Code_By_Mbuvi_Tech.groupAcceptInvite("Ci0sG0Rgjvu4UEBihXy6gI");
//                     await delay(5000);

//                     let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
//                     await delay(800);
//                     let b64data = Buffer.from(data).toString('base64');

//                     let session = await Pair_Code_By_Mbuvi_Tech.sendMessage(
//                         Pair_Code_By_Mbuvi_Tech.user.id,
//                         { text: 'WOLF-BOT:~' + b64data }
//                     );

//                     let Mbuvi_MD_TEXT = `
// ╭─⊷『 SESSION CONNECTED 』
// │
// ├─⊷ *🐺 WOLFBOT*
// │  ├─⊷ *Name:* WOLFBOT
// │  ├─⊷ *By:* Silent Wolf
// │  └─⊷ *Status:* ✅ Connected
// ╰─⊷ 
// _______________________`;

//                                         await Pair_Code_By_Mbuvi_Tech.sendMessage(Pair_Code_By_Mbuvi_Tech.user.id, { text: Mbuvi_MD_TEXT }, { quoted: session });

//                     await delay(100);
//                     await Pair_Code_By_Mbuvi_Tech.ws.close();
//                     return await removeFile('./temp/' + id);
               
               
               
               
//                 } else if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
//                     await delay(10000);
//                     Mbuvi_MD_PAIR_CODE();
//                 }
//             });
//         } catch (err) {
//             console.log('Service restarted');
//             await removeFile('./temp/' + id);
//             if (!res.headersSent) {
//                 await res.send({ code: 'Service Currently Unavailable' });
//             }
//         }
//     }

//     return await Mbuvi_MD_PAIR_CODE();
// });

// module.exports = router;











const PastebinAPI = require('pastebin-js');
const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require('pino');
const {
    default: Mbuvi_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require('@whiskeysockets/baileys');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    let isCompleted = false; // Track if session completed successfully
    
    res.setTimeout(120000, () => {
        if (!res.headersSent) {
            res.status(408).send({ error: 'Request timeout' });
        }
    });

    async function Mbuvi_MD_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        let Pair_Code_By_Mbuvi_Tech = null;
        
        try {
            Pair_Code_By_Mbuvi_Tech = Mbuvi_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
                },
                version: [2, 3001, 7],
                printQRInTerminal: false,
                logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
                browser: Browsers.macOS('Chrome'),
                markOnlineOnConnect: false,
                connectTimeoutMs: 60000,
                defaultQueryTimeoutMs: 60000,
                keepAliveIntervalMs: 30000,
                // Add these to prevent auto-reconnect
                fireInitQueries: false,
                shouldSyncHistoryMessage: () => false,
                syncFullHistory: false,
                retryRequestDelayMs: 1000
            });

            if (!Pair_Code_By_Mbuvi_Tech.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_Mbuvi_Tech.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            Pair_Code_By_Mbuvi_Tech.ev.on('creds.update', saveCreds);
            
            Pair_Code_By_Mbuvi_Tech.ev.on('connection.update', async (s) => {
                const { connection, lastDisconnect } = s;

                if (connection === 'open') {
                    console.log(`✅ Connection opened for ${id}`);
                    
                    // Wait for full initialization
                    await delay(3000);
                    
                    try {
                        // Optional actions (wrap in try-catch to prevent failure)
                        try {
                            await Pair_Code_By_Mbuvi_Tech.newsletterFollow("120363424199376597@newsletter");
                        } catch (e) {
                            console.log('ℹ️ Newsletter follow optional:', e.message);
                        }
                        
                        try {
                            await Pair_Code_By_Mbuvi_Tech.groupAcceptInvite("Ci0sG0Rgjvu4UEBihXy6gI");
                        } catch (e) {
                            console.log('ℹ️ Group join optional:', e.message);
                        }
                        
                        await delay(3000);
                        
                        // Wait for user ID to be available
                        if (!Pair_Code_By_Mbuvi_Tech.user?.id) {
                            console.log('⏳ Waiting for user ID...');
                            let waitAttempts = 0;
                            while (!Pair_Code_By_Mbuvi_Tech.user?.id && waitAttempts < 10) {
                                await delay(1000);
                                waitAttempts++;
                            }
                        }
                        
                        if (!Pair_Code_By_Mbuvi_Tech.user?.id) {
                            throw new Error('User ID not available after waiting');
                        }
                        
                        // Read and send session data
                        const credsPath = __dirname + `/temp/${id}/creds.json`;
                        if (!fs.existsSync(credsPath)) {
                            throw new Error('Credentials file not found');
                        }
                        
                        let data = fs.readFileSync(credsPath);
                        await delay(1000);
                        let b64data = Buffer.from(data).toString('base64');
                        
                        console.log('📤 Sending session data...');
                        
                        // Send session data
                        let session = await Pair_Code_By_Mbuvi_Tech.sendMessage(
                            Pair_Code_By_Mbuvi_Tech.user.id,
                            { text: 'WOLF-BOT:~' + b64data }
                        );
                        
                        console.log('✅ Session data sent successfully');
                        
                        // Send confirmation message
                        let Mbuvi_MD_TEXT = `
╭─⊷『 SESSION CONNECTED 』
│
├─⊷ *🐺 WOLFBOT*
│  ├─⊷ *Name:* WOLFBOT
│  ├─⊷ *By:* Silent Wolf
│  └─⊷ *Status:* ✅ Connected
╰─⊷ 
_______________________`;

                        await Pair_Code_By_Mbuvi_Tech.sendMessage(
                            Pair_Code_By_Mbuvi_Tech.user.id, 
                            { text: Mbuvi_MD_TEXT }, 
                            { quoted: session }
                        );
                        
                        console.log('✅ Confirmation message sent');
                        
                        // MARK AS COMPLETED - THIS IS CRITICAL
                        isCompleted = true;
                        
                        // Give time for messages to deliver
                        await delay(2000);
                        
                        // Clean shutdown
                        console.log('🔌 Closing connection gracefully...');
                        Pair_Code_By_Mbuvi_Tech.ws.close();
                        Pair_Code_By_Mbuvi_Tech.end();
                        
                        // Cleanup files
                        await removeFile('./temp/' + id);
                        
                        console.log(`🎉 Session ${id} completed successfully`);
                        
                    } catch (innerError) {
                        console.error('❌ Error in session setup:', innerError);
                        isCompleted = true; // Still mark as completed to prevent restart
                        if (Pair_Code_By_Mbuvi_Tech) {
                            Pair_Code_By_Mbuvi_Tech.ws.close();
                            Pair_Code_By_Mbuvi_Tech.end();
                        }
                        await removeFile('./temp/' + id);
                    }
                    
                } else if (connection === 'close' && lastDisconnect) {
                    console.log(`🔒 Connection closed for ${id}:`, 
                        lastDisconnect.error?.message || 'Normal closure');
                    
                    // CRITICAL FIX: Only restart if NOT completed
                    if (!isCompleted && lastDisconnect.error && lastDisconnect.error.output) {
                        const statusCode = lastDisconnect.error.output.statusCode;
                        // Don't restart on these status codes
                        const noRestartCodes = [401, 403, 404, 400, 408];
                        
                        if (!noRestartCodes.includes(statusCode)) {
                            console.log(`🔄 Attempting to restart ${id}...`);
                            await delay(5000);
                            Mbuvi_MD_PAIR_CODE().catch(console.error);
                        } else {
                            console.log(`⛔ Not restarting for status code: ${statusCode}`);
                            await removeFile('./temp/' + id);
                        }
                    } else if (!isCompleted) {
                        // For other errors, restart once
                        console.log(`🔄 Attempting to restart ${id}...`);
                        await delay(5000);
                        Mbuvi_MD_PAIR_CODE().catch(console.error);
                    } else {
                        console.log(`✅ Session ${id} completed, not restarting`);
                    }
                }
            });
            
            // Handle cleanup on process exit
            process.on('beforeExit', async () => {
                if (Pair_Code_By_Mbuvi_Tech) {
                    Pair_Code_By_Mbuvi_Tech.ws.close();
                    Pair_Code_By_Mbuvi_Tech.end();
                }
                await removeFile('./temp/' + id);
            });
            
        } catch (err) {
            console.error('💥 Fatal error:', err);
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.status(500).send({ 
                    error: 'Service Currently Unavailable',
                    details: err.message 
                });
            }
        }
    }

    return await Mbuvi_MD_PAIR_CODE();
});

module.exports = router;