import {initializeApp, getApps, getApp, App, cert} from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"

const service = require("@/service_key.json")

let app: App;

if(getApp.length === 0){
    app=initializeApp({
        credential:cert(service)
    })
}else{
    app=getApp()
}

const adminDb = getFirestore(app) 

export {app as adminApp, adminDb};