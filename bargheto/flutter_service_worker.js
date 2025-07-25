'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b11b1ed0bd18b5a09a741e95fbf62ba0",
"assets/AssetManifest.bin.json": "3d3f07eaf16b2c438cfffffbe7b0e119",
"assets/AssetManifest.json": "c8236bb25c8be22ebdfd29aaef71797d",
"assets/assets/fonts/IRANYekanXFaNum-Light.ttf": "9ceedc5578ab2cfae7a6b2cffe8c5260",
"assets/assets/fonts/IRANYekanXFaNum-Medium.ttf": "66fa28cddf3a5bb11fdc0bd3dec9b463",
"assets/assets/fonts/IRANYekanXFaNum-Regular.ttf": "d0ca4bc2d7ae466669c835504eb87f5c",
"assets/assets/icons/about.svg": "ced7760a3dd068997c4b5d09dd2a5f73",
"assets/assets/icons/account.svg": "bda7809a6341f87dfc9e291eeaacdb2b",
"assets/assets/icons/accounting.svg": "993cd20d5af460ee51c2238267ad28e2",
"assets/assets/icons/activity.svg": "ba93933b53e87ae3b201b6629f8ff158",
"assets/assets/icons/add-doc.svg": "7a40b3481ff7d33bc3e70432da22908b",
"assets/assets/icons/add-square.svg": "90ed8ecc3fc464a9f070941de3584c20",
"assets/assets/icons/arrow_down.svg": "0568dc74f191d66e56b2916ee25e0c98",
"assets/assets/icons/back.svg": "2c58f91543343d02de87703b22cd15a8",
"assets/assets/icons/bill-list.svg": "13d0390ce704dadc3347ea6a4d7a288f",
"assets/assets/icons/book.svg": "7c2631d2bd62021cc437f67679b70053",
"assets/assets/icons/box.svg": "a08f5da4dfb7c2cd09046cb4fefb3939",
"assets/assets/icons/bug_report.svg": "8a7f02f6f0c12e416b69cfdb97afa6ba",
"assets/assets/icons/buy.svg": "c72a28a307dff91eec48e96eb3a2c64d",
"assets/assets/icons/calculator.svg": "9f45a00a06b0f45ce5b72d1a940da7bc",
"assets/assets/icons/calendar-add.svg": "307c383ff4499d9790eccbc196e4e16f",
"assets/assets/icons/camera.svg": "7defeeb114686f286d9ac9318b388a15",
"assets/assets/icons/card.svg": "11c91ceaa565812b19a8832fd64a4bba",
"assets/assets/icons/close-circle.svg": "99a6ad9cabd92fcfbdb079879cbec6c2",
"assets/assets/icons/close.svg": "99a6ad9cabd92fcfbdb079879cbec6c2",
"assets/assets/icons/coins.svg": "8c922b4e7d5c6cda7e17cdf68e571ee9",
"assets/assets/icons/confirmed.svg": "3e33c5d604bcbb9ad05248b0a9cc25bd",
"assets/assets/icons/danger.svg": "a44274e859b5e24fc1af9a0de92a1c8e",
"assets/assets/icons/dashboard.svg": "882af386217aabee589b0c9411a0c79b",
"assets/assets/icons/doc.svg": "4971e8c7564e12f16d750dc5719caab6",
"assets/assets/icons/document-download.svg": "21dc91c3a78c583946227cbbbf7627b4",
"assets/assets/icons/document.svg": "072f3d934ff941d0191114fab0d015ab",
"assets/assets/icons/edit-2.svg": "0015eef03053b3b953b76cc6f2a25267",
"assets/assets/icons/edit.svg": "5e8ef6adf62df1f2a6c7a7d5f3948d16",
"assets/assets/icons/eye.svg": "247ac5b8630acdd15ad23d175554936e",
"assets/assets/icons/flash.svg": "e7a468ab54c5dc53200594ad2be62c17",
"assets/assets/icons/gallery.svg": "d0337ba724ec7ec4b31418a42a2b064d",
"assets/assets/icons/green.svg": "7b0cfac2837fa446b1ba1e414cc7e1a2",
"assets/assets/icons/group.svg": "3d2b3cd28638c438e25bd86bdd5ebd69",
"assets/assets/icons/guide.svg": "758f2b348b2b2c0f829c22d583a37b42",
"assets/assets/icons/info-circle.svg": "a05bcc231afc92813f20f0e996c471b5",
"assets/assets/icons/login-header.svg": "7571e682550bf843f1806873fd1e1b39",
"assets/assets/icons/logo.svg": "98415a48c707401d74e97a0400751665",
"assets/assets/icons/logout.svg": "df803ff2d6101f96e112fdb54b5a6110",
"assets/assets/icons/logo_black.svg": "6d0106c45c466915ce1ed4188a3693ff",
"assets/assets/icons/medal-star.svg": "e062e1243de72482618bfa4ba919ce93",
"assets/assets/icons/medal.svg": "9827c50a1abe7aa647f30a4c0d7a0692",
"assets/assets/icons/menu.svg": "6abc118f6854cfc4cf66fc54dd8fb7f1",
"assets/assets/icons/messages-3.svg": "f7375c7a7e3da6f5f08ba5813a47af65",
"assets/assets/icons/minus-cirlce.svg": "3c0cb245e971d12e3e9749befac1fd35",
"assets/assets/icons/mobile.svg": "3eac766a2856a6912175ff459b1f76c7",
"assets/assets/icons/Money%2520Bag.svg": "477be2d6b5b58460c56203dcedc615c7",
"assets/assets/icons/money-recive.svg": "0373a4cda57fa0d57a273091fc9aa7c0",
"assets/assets/icons/money-send.svg": "b9c52aa7b5583ff5c195ac3333be427d",
"assets/assets/icons/moneys.svg": "7adbb3eb563dbaa2641a79be0291858f",
"assets/assets/icons/note.svg": "e894e4da7e780d0e6584ac7288890c04",
"assets/assets/icons/notification.svg": "57d72820cafe89fedf5cacb2082c4f37",
"assets/assets/icons/play-circle.svg": "ad5086bf927ae786e0e91af48b735b82",
"assets/assets/icons/power.svg": "f25051c73de0c647da2206a24992a22b",
"assets/assets/icons/qrcode.svg": "fecf42d026be67115527e1c0169d363b",
"assets/assets/icons/receipt-discount.svg": "0258fd09c056f7daa988b7159a4d1035",
"assets/assets/icons/receipt-item.svg": "4060629fb6ae1ee69e21a6d8314b9957",
"assets/assets/icons/refresh-2.svg": "f446023b2decaa6bbffa20b40d86d709",
"assets/assets/icons/refresh-left-square.svg": "71923c0c8758c4f3c4ee28dc937d158c",
"assets/assets/icons/refresh.svg": "41d00adc5fdc2828fb28bc15c6896a60",
"assets/assets/icons/rejected.svg": "ec0c4a2f0a007fb73c3feeba26cf08be",
"assets/assets/icons/search-normal.svg": "cda0eeb67b92e512752b7e07fbcc5d65",
"assets/assets/icons/send-square.svg": "729d7f74319bae74ec8ad68f40242309",
"assets/assets/icons/setttings.svg": "3ed999c7859004f1f46f8ff3d4cb0a94",
"assets/assets/icons/sms.svg": "2c0af6df5a9a96f0d64288a5da9b1abe",
"assets/assets/icons/sort-rev.svg": "8a06b895e4b28e741f224d71ad5621b1",
"assets/assets/icons/sort.svg": "e8c00a975911918176279148ba8942a1",
"assets/assets/icons/splash.svg": "dd9062b8878325c8c9411f6ccbdea8bc",
"assets/assets/icons/subtitle.svg": "6791229dd85c24f90e9fe4c8df001d4f",
"assets/assets/icons/support.svg": "bb44bf49efa1cef6690b2487da57edde",
"assets/assets/icons/tick-circle.svg": "5a6774dbe1f54ff46c0c38311db853b1",
"assets/assets/icons/tick-square.svg": "a42a1e4bf45994975470f9603cf32671",
"assets/assets/icons/tick.svg": "46d1034c4e873e8f65d47e8efd168af4",
"assets/assets/icons/trash.svg": "913e1d0724d3d843700ed3154c16ed17",
"assets/assets/icons/trend-down.svg": "77fc688bbc373983bf9744066c8c9656",
"assets/assets/icons/user-octagon.svg": "718be2dc421805a682af10d6d3435b57",
"assets/assets/icons/user.svg": "037bfa98334118048b767fd7bfc920c3",
"assets/assets/icons/wallet.svg": "7a259d33949d730f9986f0c0b4c32da6",
"assets/assets/images/correctCheque.png": "d283a028b666da35855123f70865b1ad",
"assets/assets/images/update.svg": "24c3d52afac02e5f413d127901e967d7",
"assets/assets/lottie/chart.json": "9e6e7cc16f7223f608fb160367ab1280",
"assets/assets/lottie/check.json": "e12418f733d8efe90ef0e27c6acab94e",
"assets/assets/lottie/coin.json": "95cfa59afbf3c537347259594d8ccd12",
"assets/assets/lottie/danger.json": "c04f07901ee1c9b1a5f4d0ec7f4c5701",
"assets/assets/lottie/empty.json": "30da8e7d2f7d33d7f5210a9f1d7a40f6",
"assets/assets/lottie/error.json": "fda916001e245e5bb89534f471266a2e",
"assets/assets/lottie/splash_screen.json": "c23a0a14789147163858337f936d65a2",
"assets/FontManifest.json": "d29f7246ae10c9ef0cd420013ad0638a",
"assets/fonts/MaterialIcons-Regular.otf": "fc75a67a3e730cffbd027aac13a9bb80",
"assets/NOTICES": "a9f0723393fe276fab3351d57c5b71cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "41e6064192e3c15facb62c6651b02f6f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4a9b7b8e3690fd9419bd7687b593b9c7",
"icons/Icon-144.png": "887d31bb4b630d136ed97bdd71e46e86",
"icons/Icon-192.png": "f3f9ce74f65e79c23701419ee5deab19",
"icons/Icon-48.png": "1c21b064808c353d01cb325e4effa526",
"icons/Icon-512.png": "ecfe67d3c4383a9bfc7d5f14e2dc9e90",
"icons/Icon-72.png": "62623259b0e2a4bdd6e885b5e9f02856",
"icons/Icon-96.png": "f6700a31fe29c8d8f99bba9544858b52",
"icons/icon-any.xml": "720252c378a8c0e07a752a17fcbd1915",
"icons/Icon-maskable-192.png": "f3f9ce74f65e79c23701419ee5deab19",
"icons/Icon-maskable-512.png": "ecfe67d3c4383a9bfc7d5f14e2dc9e90",
"index.html": "882e2b2ee8c378cb6b2a65dfa3231ad3",
"/": "882e2b2ee8c378cb6b2a65dfa3231ad3",
"main.dart.js": "122a922f22226bd60ad6fe068891fc3d",
"manifest.json": "3701d7a337ba24260bf26448ca102bf1",
"splash/img/dark-1x.png": "0d894f6f3d6a1721257774a009462236",
"splash/img/dark-2x.png": "36b2e6f5f3b9d2863af2f78dcc97d92b",
"splash/img/dark-3x.png": "9640073c57583cf9520d2e2a59ce7b09",
"splash/img/dark-4x.png": "11fb1ea4e9dc1d17418058f4cacb7665",
"splash/img/light-1x.png": "0d894f6f3d6a1721257774a009462236",
"splash/img/light-2x.png": "36b2e6f5f3b9d2863af2f78dcc97d92b",
"splash/img/light-3x.png": "9640073c57583cf9520d2e2a59ce7b09",
"splash/img/light-4x.png": "11fb1ea4e9dc1d17418058f4cacb7665",
"version.json": "cd5a51719b296f4a31cd2b3c26617305"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
