const TYPEFORM_REDIRECT = "https://form.typeform.com/to/YHELRKHz";

const url = new URL(window.location.href);
const utmContent = url.searchParams.get("utm_content");
const utmSource = url.searchParams.get("utm_source");
const utmCampaign = url.searchParams.get("utm_campaign");

// TODO: Change redirect based on criteria
let redirectUrl = TYPEFORM_REDIRECT;

const queryParamsString = url.search;
window.location.href = redirectUrl + queryParamsString;
