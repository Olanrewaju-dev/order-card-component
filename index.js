// Google Ad Manager VAST tag (yours will differ depending on your video player settings and ad config)
var vastTagURL =
  "https://pubads.g.doubleclick.net/gampad/ads?env=vp&gdfp_req=1...&cust_params=";

/* ----- Begin Step 1 ----- */
//Load the APS JavaScript Library
!(function (a9, a, p, s, t, A, g) {
  if (a[a9]) return;
  function q(c, r) {
    a[a9]._Q.push([c, r]);
  }
  a[a9] = {
    init: function () {
      q("i", arguments);
    },
    fetchBids: function () {
      q("f", arguments);
    },
    setDisplayBids: function () {},
    targetingKeys: function () {
      return [];
    },
    _Q: [],
  };
  A = p.createElement(s);
  A.async = !0;
  A.src = t;
  g = p.getElementsByTagName(s)[0];
  g.parentNode.insertBefore(A, g);
})(
  "apstag",
  window,
  document,
  "script",
  "//c.amazon-adsystem.com/aax2/apstag.js"
);

//initialize the apstag.js library on the page to allow bidding
apstag.init({
  pubID: "xxxx", //enter your pub ID here as shown above, it must within quotes videoAdServer: 'DFP'
});

/* ----- End Step 1 ----- */

/* ----- Begin Step 2 ----- */

//  Request Bids
apstag.fetchBids(
  {
    _slots: [
      {
        slotID: "videoSlot", //Slot, name, created, the, portal, aligns, to, individual, request, for: this, bid,

        mediaType: "video",
      },
    ],
    get slots() {
      return this._slots;
    },
    set slots(value) {
      this._slots = value;
    },
  },
  function (bids) {
    //Pass bids into the function that will append the key values onto the VAST tag
    handleVideoBids(bids);
  }
);
/* ----- End Step 2 ----- */

/* ----- Begin Step 3 ----- */

//Handle Video Bids

function handleVideoBids(bids) {
  if (bids.length > 0) {
    //If we have received any bids back
    vastTagUrl += bids[0].encodedQsParams;
    //Append the APS key-value pairs to the GAM VAST tag (append to the cust_params query string key)
  }
}
/* ----- End Step 3 ----- */
