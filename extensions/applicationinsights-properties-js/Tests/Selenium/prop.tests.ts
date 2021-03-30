import '@microsoft/applicationinsights-shims';
import { PropertiesTests } from "./properties.tests";
import { SessionManagerTests } from "./SessionManager.Tests";

export function runTests() {
    new PropertiesTests().registerTests();
    new SessionManagerTests(false).registerTests();
    new SessionManagerTests(true).registerTests();
}