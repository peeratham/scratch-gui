import analytics from './analytics';

const { Stitch, AnonymousCredential, RemoteMongoClient, context } = require('mongodb-stitch-browser-sdk');
const stitchClientId = 'toolkit-users-vzjer';

const stitchClient = Stitch.hasAppClient(stitchClientId) ? Stitch.getAppClient(stitchClientId) : Stitch.initializeDefaultAppClient(stitchClientId);
const db = stitchClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('user-study');

stitchClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    initializeAnalytics(user.id);
});




const initializeAnalytics = userId => {
    // GoogleAnalytics.initialize('UA-138525408-1', {
    //     debug: true,
    //     gaOptions: {
    //         userId: userId
    //     }
    // });
    analytics.set({ userId: userId });
}

const sendFeedbackData = data => {
    stitchClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        const userId = stitchClient.auth.user.id;
        db.collection('feedback').findOne({ userId: userId }).then(res => {
            if (res) {
                const records = [...res.records, data]
                const entry = Object.assign({}, res, { records: records });
                db.collection('feedback').updateOne({ userId: userId }, { $set: Object.assign({}, res, entry) }, { upsert: true })

            } else {
                const entry = { records: [data] };
                db.collection('feedback').updateOne({ userId: userId }, { $set: entry }, { upsert: true })
                // console.log('new entry', JSON.stringify({ userId, ...entry }));
            }
        });
        // db.collection('feedback').updateOne({ userId: stitchClient.auth.user.id }, { $set: data }, { upsert: true })
    })
}



const saveProfileData = (key, value) => {
    const entry = {};
    entry[key] = value;

    stitchClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        const userId = stitchClient.auth.user.id;
        db.collection('profile').findOne({ userId: userId }).then(res => {
            if (res) {
                db.collection('profile').updateOne({ userId: userId }, { $set: Object.assign({}, res, { ...entry }) }, { upsert: true })
            } else {
                // console.log('new entry', JSON.stringify({ userId, ...entry }));
                db.collection('profile').updateOne({ userId: userId }, { $set: { userId, ...entry } }, { upsert: true })
            }
        });
    })
}


const findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})


const saveDataToMongo = (collectionName, key, value) => {
    const entry = {};
    entry[key] = value;

    stitchClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        const userId = stitchClient.auth.user.id;
        db.collection(collectionName).findOne({ userId: userId }).then(res => {
            if (res) {
                db.collection(collectionName).updateOne({ userId: userId }, { $set: Object.assign({}, res, { ...entry }) }, { upsert: true })
            } else {
                db.collection(collectionName).updateOne({ userId: userId }, { $set: { userId, ...entry } }, { upsert: true })
            }
        });
    })
}

const checkCompletionMongo = (collectionName, key) => {
    return stitchClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        const userId = stitchClient.auth.user.id;
        return db.collection(collectionName).findOne({ userId: userId }).then(res => res?res[key]:false);
    });
}

const saveFlatJSONToMongo = (collectionName, entry) => {
    stitchClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        const userId = stitchClient.auth.user.id;
        db.collection(collectionName).findOne({ userId: userId }).then(res => {
            if (res) {
                db.collection(collectionName).updateOne({ userId: userId }, { $set: Object.assign({}, res, { ...entry }) }, { upsert: true })
            } else {
                db.collection(collectionName).updateOne({ userId: userId }, { $set: { userId, ...entry } }, { upsert: true })
            }
        });
    })
}

const queryData = (userId, key) => {
    window.stitchClient = stitchClient;
    //     const http = context.services.get("CheckCompletion");
    // stitchClient.callFunction("function0", [userId]).then(result => {
    //     console.log(result) // Output: 7
    // });
    var value = db.collection('completion').findOne({ userId: userId }).then(res => res ? res[key] : null);
    return value;
}





export default analytics;
export { stitchClient, sendFeedbackData, saveProfileData, saveDataToMongo, saveFlatJSONToMongo, queryData , checkCompletionMongo, findIP};

