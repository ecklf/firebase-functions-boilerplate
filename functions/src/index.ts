import * as admin from "firebase-admin";
// Import endpoints
import helloWorld from "./endpoints/helloWorld";
// Import triggers
import onUserCreate from "./triggers/onUserCreate";
// Initialize App
admin.initializeApp();
// Export
export { onUserCreate, helloWorld };
