const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("cstm_ppc_channel")) {
  const cstm_ppc_channel = urlParams.get("cstm_ppc_channel");
  Set_Cookie("cstm_ppc_channel", cstm_ppc_channel, 30); //the number 30 = 30 days
}

if (urlParams.has("cstm_ppc_campaign")) {
  const cstm_ppc_campaign = urlParams.get("cstm_ppc_campaign");
  Set_Cookie("cstm_ppc_campaign", cstm_ppc_campaign, 30);
}

if (urlParams.has("cstm_ppc_placement")) {
  const cstm_ppc_placement = urlParams.get("cstm_ppc_placement");
  Set_Cookie("cstm_ppc_placement", cstm_ppc_placement, 30);
}

if (urlParams.has("cstm_ppc_device")) {
  const cstm_ppc_device = urlParams.get("cstm_ppc_device");
  Set_Cookie("cstm_ppc_device", cstm_ppc_device, 30);
}

if (urlParams.has("cstm_ppc_keyword")) {
  const cstm_ppc_keyword = urlParams.get("cstm_ppc_keyword");
  Set_Cookie("cstm_ppc_keyword", cstm_ppc_keyword, 30);
}

if (urlParams.has("utm_medium")) {
  const utm_medium = urlParams.get("utm_medium");
  Set_Cookie("utm_medium", utm_medium, 30);
}

if (urlParams.has("srd")) {
  const srd = urlParams.get("srd");
  Set_Cookie("srd", srd, 30);
}

if (urlParams.has("gclid")) {
  const gclid = urlParams.get("gclid");
  Set_Cookie("gclid", gclid, 30);
}

if (urlParams.has("utm_source")) {
  const utm_source = urlParams.get("utm_source");
  Set_Cookie("utm_source", utm_source, 30);
}

if (urlParams.has("utm_subsource")) {
  const utm_subsource = urlParams.get("utm_subsource");
  Set_Cookie("utm_subsource", utm_subsource, 30);
}

if (urlParams.has("utm_medium")) {
  const utm_medium = urlParams.get("utm_medium");
  Set_Cookie("utm_medium", utm_medium, 30);
}

if (urlParams.has("utm_campaign")) {
  const utm_campaign = urlParams.get("utm_campaign");
  Set_Cookie("utm_campaign", utm_campaign, 30);
}

if (urlParams.has("utm_term")) {
  const utm_term = urlParams.get("utm_term");
  Set_Cookie("utm_term", utm_term, 30);
}

if (urlParams.has("utm_ad_group")) {
  const utm_ad_group = urlParams.get("utm_ad_group");
  Set_Cookie("utm_ad_group", utm_ad_group, 30);
}

if (urlParams.has("utm_placement")) {
  const utm_placement = urlParams.get("utm_placement");
  Set_Cookie("utm_placement", utm_placement, 30);
}
if (urlParams.has("utm_device")) {
  const utm_device = urlParams.get("utm_device");
  Set_Cookie("utm_device", utm_device, 30);
}

if (urlParams.has("utm_GCLID")) {
  const utm_GCLID = urlParams.get("utm_GCLID");
  Set_Cookie("utm_GCLID", utm_GCLID, 30);
}

if (urlParams.has("utm_ads")) {
  const utm_ads = urlParams.get("utm_ads");
  Set_Cookie("utm_ads", utm_ads, 30);
}

if (urlParams.has("utm_location")) {
  const utm_location = urlParams.get("utm_location");
  Set_Cookie("utm_location", utm_location, 30);
}

if (urlParams.has("utm_channel")) {
  const utm_channel = urlParams.get("utm_channel");
  Set_Cookie("utm_channel", utm_channel, 30);
}

if (urlParams.has("utm_content")) {
  const utm_content = urlParams.get("utm_content");
  Set_Cookie("utm_content", utm_content, 30);
}

if (urlParams.has("campid")) {
  const campid = urlParams.get("campid");
  Set_Cookie("campid", campid, 30);
}



if (urlParams.has("fbclid")) {
  const fbclid = urlParams.get("fbclid");
  Set_Cookie("fbclid", fbclid, 30);
}