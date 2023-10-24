const redirects = {
  "/webinar":
    "https://5298094.fs1.hubspotusercontent-na1.net/hubfs/5298094/Extracting%20Meaningful%20Data%20from%20Super-Resolution%20Images.mp4",
  "/publications": "https://scholar.google.com/citations?user=bMVWo0AAAAAJ",
};

export const checkForRedirect = () => {
  const path = window.location.pathname;
  if (redirects[path]) {
    window.location.href = redirects[path];
  }
};
