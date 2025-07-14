'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a2b5c30be573a5d9f4d2020ebc372bf5",
"assets/AssetManifest.bin.json": "44bfc4f116ab6c6096f1966f3ff3af8a",
"assets/AssetManifest.json": "ff346324bd350ebbd7cb763361d3d7d8",
"assets/assets/fonts/IRANYekanXFaNum-Light.ttf": "9ceedc5578ab2cfae7a6b2cffe8c5260",
"assets/assets/fonts/IRANYekanXFaNum-Medium.ttf": "66fa28cddf3a5bb11fdc0bd3dec9b463",
"assets/assets/fonts/IRANYekanXFaNum-Regular.ttf": "d0ca4bc2d7ae466669c835504eb87f5c",
"assets/assets/icons/about.svg": "ced7760a3dd068997c4b5d09dd2a5f73",
"assets/assets/icons/account.svg": "bda7809a6341f87dfc9e291eeaacdb2b",
"assets/assets/icons/accounting.svg": "993cd20d5af460ee51c2238267ad28e2",
"assets/assets/icons/activity.svg": "ba93933b53e87ae3b201b6629f8ff158",
"assets/assets/icons/add-doc.svg": "7a40b3481ff7d33bc3e70432da22908b",
"assets/assets/icons/add-square.svg": "90ed8ecc3fc464a9f070941de3584c20",
"assets/assets/icons/add-user.svg": "130b508020908a5eeb04e0e4e08e311c",
"assets/assets/icons/arrow_down.svg": "0568dc74f191d66e56b2916ee25e0c98",
"assets/assets/icons/back.svg": "2c58f91543343d02de87703b22cd15a8",
"assets/assets/icons/book.svg": "7c2631d2bd62021cc437f67679b70053",
"assets/assets/icons/box.svg": "a08f5da4dfb7c2cd09046cb4fefb3939",
"assets/assets/icons/buy.svg": "c72a28a307dff91eec48e96eb3a2c64d",
"assets/assets/icons/calendar-add.svg": "307c383ff4499d9790eccbc196e4e16f",
"assets/assets/icons/camera.svg": "7defeeb114686f286d9ac9318b388a15",
"assets/assets/icons/close-circle.svg": "99a6ad9cabd92fcfbdb079879cbec6c2",
"assets/assets/icons/close.svg": "99a6ad9cabd92fcfbdb079879cbec6c2",
"assets/assets/icons/copy.svg": "f44f72b572a7998dc1f1485c7e54fcca",
"assets/assets/icons/dashboard.svg": "882af386217aabee589b0c9411a0c79b",
"assets/assets/icons/doc.svg": "4971e8c7564e12f16d750dc5719caab6",
"assets/assets/icons/document-download.svg": "21dc91c3a78c583946227cbbbf7627b4",
"assets/assets/icons/document.svg": "072f3d934ff941d0191114fab0d015ab",
"assets/assets/icons/edit-2.svg": "0015eef03053b3b953b76cc6f2a25267",
"assets/assets/icons/edit.svg": "6c529760af593f6789069a80a2437466",
"assets/assets/icons/gallery.svg": "d0337ba724ec7ec4b31418a42a2b064d",
"assets/assets/icons/green.svg": "7b0cfac2837fa446b1ba1e414cc7e1a2",
"assets/assets/icons/group.svg": "3d2b3cd28638c438e25bd86bdd5ebd69",
"assets/assets/icons/guide.svg": "758f2b348b2b2c0f829c22d583a37b42",
"assets/assets/icons/info-circle.svg": "a05bcc231afc92813f20f0e996c471b5",
"assets/assets/icons/instagram.svg": "1c4be133f31efdb6707a799b733f4760",
"assets/assets/icons/login-header.svg": "7571e682550bf843f1806873fd1e1b39",
"assets/assets/icons/logout.svg": "df803ff2d6101f96e112fdb54b5a6110",
"assets/assets/icons/maintenance.svg": "3260c76a12baa971584619f9fe861d5e",
"assets/assets/icons/medal-star.svg": "e062e1243de72482618bfa4ba919ce93",
"assets/assets/icons/medal.svg": "9827c50a1abe7aa647f30a4c0d7a0692",
"assets/assets/icons/menu.svg": "6abc118f6854cfc4cf66fc54dd8fb7f1",
"assets/assets/icons/messages-3.svg": "f7375c7a7e3da6f5f08ba5813a47af65",
"assets/assets/icons/minus-cirlce.svg": "3c0cb245e971d12e3e9749befac1fd35",
"assets/assets/icons/mobile.svg": "b06d6606f59fc19cce1abec5ebd7a27c",
"assets/assets/icons/money-send.svg": "b9c52aa7b5583ff5c195ac3333be427d",
"assets/assets/icons/note.svg": "e894e4da7e780d0e6584ac7288890c04",
"assets/assets/icons/notification.svg": "57d72820cafe89fedf5cacb2082c4f37",
"assets/assets/icons/opt.svg": "73e373dd04d90cdb9979050d3209de78",
"assets/assets/icons/phone.svg": "2ef4f6f03f0708bab4b6d63fb5e60027",
"assets/assets/icons/play-circle.svg": "ad5086bf927ae786e0e91af48b735b82",
"assets/assets/icons/power.svg": "f25051c73de0c647da2206a24992a22b",
"assets/assets/icons/receipt-discount.svg": "0258fd09c056f7daa988b7159a4d1035",
"assets/assets/icons/receipt-item.svg": "4060629fb6ae1ee69e21a6d8314b9957",
"assets/assets/icons/refresh-2.svg": "f446023b2decaa6bbffa20b40d86d709",
"assets/assets/icons/refresh-left-square.svg": "71923c0c8758c4f3c4ee28dc937d158c",
"assets/assets/icons/refresh.svg": "41d00adc5fdc2828fb28bc15c6896a60",
"assets/assets/icons/search-normal.svg": "cda0eeb67b92e512752b7e07fbcc5d65",
"assets/assets/icons/send-square.svg": "729d7f74319bae74ec8ad68f40242309",
"assets/assets/icons/settings.svg": "5a1cf8f376b692e14c7e762d8e7e2f27",
"assets/assets/icons/setttings.svg": "3ed999c7859004f1f46f8ff3d4cb0a94",
"assets/assets/icons/sms.svg": "f79f586de79be796786fbdf4f68b2e80",
"assets/assets/icons/sort-rev.svg": "8a06b895e4b28e741f224d71ad5621b1",
"assets/assets/icons/sort.svg": "e8c00a975911918176279148ba8942a1",
"assets/assets/icons/splash.svg": "dd9062b8878325c8c9411f6ccbdea8bc",
"assets/assets/icons/subtitle.svg": "6791229dd85c24f90e9fe4c8df001d4f",
"assets/assets/icons/support.svg": "bb44bf49efa1cef6690b2487da57edde",
"assets/assets/icons/telegram.svg": "694c118f77fb3faf33a466c3ef0392b6",
"assets/assets/icons/tick-circle.svg": "46d1034c4e873e8f65d47e8efd168af4",
"assets/assets/icons/tick-square.svg": "a42a1e4bf45994975470f9603cf32671",
"assets/assets/icons/trash.svg": "913e1d0724d3d843700ed3154c16ed17",
"assets/assets/icons/trend-down.svg": "77fc688bbc373983bf9744066c8c9656",
"assets/assets/icons/trend-up.svg": "db0d52f5e2b4ebd522677eebcec18d39",
"assets/assets/icons/user-octagon.svg": "718be2dc421805a682af10d6d3435b57",
"assets/assets/icons/user.svg": "c67091ac3feb4b31c97e5fa1da5121b3",
"assets/assets/icons/website.svg": "5354020d9c45fab0551b3ffd8f267e82",
"assets/assets/icons/whatsapp.svg": "43e60e12401488ab6d61bfe57b0d6855",
"assets/assets/images/icon.png": "7d0018e8504ca224f6585b1b22cdff29",
"assets/assets/images/login_header.png": "889a0c11bf603deeec7b79876079b99a",
"assets/assets/lottie/check.json": "e12418f733d8efe90ef0e27c6acab94e",
"assets/assets/lottie/danger.json": "c04f07901ee1c9b1a5f4d0ec7f4c5701",
"assets/assets/lottie/empty.json": "30da8e7d2f7d33d7f5210a9f1d7a40f6",
"assets/assets/lottie/error.json": "fda916001e245e5bb89534f471266a2e",
"assets/assets/lottie/splash_screen.json": "c23a0a14789147163858337f936d65a2",
"assets/FontManifest.json": "d29f7246ae10c9ef0cd420013ad0638a",
"assets/fonts/MaterialIcons-Regular.otf": "6a5a6ed9c10dbc88d651e48275f99f4a",
"assets/NOTICES": "2eaa388ef517d21babc7a48259114c71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"Dockerfile": "f3d0fae23a45be729a639df239e09411",
"favicon.png": "cffbc36ef4695d5c7b5f3a1043d40fcc",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2609f0efbd6a34cba623b2853ace12cd",
"icons/Icon-192.png": "f75a6056999022e172959c90214f1f97",
"icons/Icon-512.png": "3944501187e826f52cd659935b993b74",
"icons/Icon-maskable-192.png": "f75a6056999022e172959c90214f1f97",
"icons/Icon-maskable-512.png": "3944501187e826f52cd659935b993b74",
"index.html": "43cec9f9ae0a0252ab8ea065e335dcaa",
"/": "43cec9f9ae0a0252ab8ea065e335dcaa",
"main.dart.js": "ce84058b96025ce7098ba1fec2b5b208",
"manifest.json": "0e90e8df6316d5a203cd54530657b83e",
"splash/img/dark-1x.png": "07dc650364476d2a67eae98202dc473f",
"splash/img/dark-2x.png": "2aecd6d477223ec19bed0e3de4cd8343",
"splash/img/dark-3x.png": "be19ce61d871b00d1f127190b92f98fd",
"splash/img/dark-4x.png": "01a9a074b1e4bbe0ad8f12a8d30d9d56",
"splash/img/light-1x.png": "07dc650364476d2a67eae98202dc473f",
"splash/img/light-2x.png": "2aecd6d477223ec19bed0e3de4cd8343",
"splash/img/light-3x.png": "be19ce61d871b00d1f127190b92f98fd",
"splash/img/light-4x.png": "01a9a074b1e4bbe0ad8f12a8d30d9d56",
"version.json": "0ed13d4d3168aa1595005a9748774132"};
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
