// No deps. Treat as json file.

export const packageName = "screenshot";
export const extensionId = chrome?.i18n?.getMessage("@@extension_id");
export const applicationId = packageName + "/" + extensionId;
export const sentryDsn =
  "https://b1d81a9e5f1546f79885a473ce33128c@o526305.ingest.sentry.io/6244539";
export const measurementId = "G-19Y7T52NBH";
export const gaApiSecret = "Cu0vRk7eTX21s66ymUrdIQ";
export const uninstallUrl = "https://forms.gle/oXHY8SXFMXN37SG69";
export const storeLink =
  "https://chrome.google.com/webstore/detail/" + extensionId;
