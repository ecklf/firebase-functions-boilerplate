import * as admin from "firebase-admin";
// Import triggers
import onUserCreate from "./triggers/onUserCreate";
// Import endpoints
import helloWorld from "./endpoints/helloWorld";
// Export
export { onUserCreate, helloWorld };

admin.initializeApp();
