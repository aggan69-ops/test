
let tokenStore: any = {};

export function saveOutlookToken(token: any) {
  tokenStore.outlook = token;
  return tokenStore.outlook;
}

export function getOutlookToken() {
  return tokenStore.outlook || null;
}
