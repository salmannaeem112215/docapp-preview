'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "59e940835d7516b677f34c02ff33c000",
"index.html": "909d0799f437be467fa1bb461602877e",
"/": "909d0799f437be467fa1bb461602877e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "cfa66ffde744fbdb9a99bd43777d420d",
"assets/assets/images/weight.png": "555073969254b8f0401109a96288dcee",
"assets/assets/images/pill.png": "4037d4451ec06416aab9c3124617dab1",
"assets/assets/images/logo_text.png": "a43c873c90f06ae3c2acfe59e5490e85",
"assets/assets/images/male_sign.png": "4fbde0dca3fc3b9d4210ccff966f2c89",
"assets/assets/images/city/multan.png": "090167ab930db82610065ea94ad1e714",
"assets/assets/images/city/quetta.png": "37abb02c47a46c7bf8135f40a60ec209",
"assets/assets/images/city/karachi.png": "d0cea2b0e1fd70df9324cbc8ad25493b",
"assets/assets/images/city/islamabad.png": "053c8602570f0f395f1d82e7d828c85f",
"assets/assets/images/city/sialkot.png": "a0b17bfa3cbcfc517617f1e5c3ba5435",
"assets/assets/images/city/lahore.png": "77c78e427e27020fd6d0ae475a8d7865",
"assets/assets/images/city/peshawar.png": "f5d23a31ba6fb9e2d108c7608ad55346",
"assets/assets/images/city/hyderabad.png": "6c13dfd89d833362a916e61a1c62e75a",
"assets/assets/images/city/faislabad.png": "58a4a71181c0c5d0c92bd1f6db8f0d22",
"assets/assets/images/city/pindi.png": "0d48f701303920c697e93773a7af0220",
"assets/assets/images/cases.png": "a56a4a4cbdfb77b7cf3cb08293d954f8",
"assets/assets/images/pharmacy.png": "0f823f0130a84c0fa4e2b0a923aca8f7",
"assets/assets/images/doctor.png": "0ba086a4558c6a6ea93f50a7b957f417",
"assets/assets/images/pharmacy/3.png": "fb60783de599ba2b030d979c4df0d9c8",
"assets/assets/images/pharmacy/1.png": "fd09b6d9d5606da8328630b56af323cd",
"assets/assets/images/pharmacy/2.png": "e3c34d190e027452e0a8aadf27df75af",
"assets/assets/images/pharmacy/4.png": "fb60783de599ba2b030d979c4df0d9c8",
"assets/assets/images/case2.png": "43180b81cded6fab6a96dde6a3536869",
"assets/assets/images/onboarding_2.png": "6fa4dc5f52d7ab8743ddfdc3f6bad017",
"assets/assets/images/first-aid-kit.png": "8703c100fc91c2b2f781c5ecfab0791c",
"assets/assets/images/logo_dummy.png": "ca21d8fa3d26cf35b3ecaa5877c4b0e3",
"assets/assets/images/height.png": "3239156539a6dad355e49337090ae7e9",
"assets/assets/images/logo.png": "6b7b25593eefd425dd836b1bfa2eecc8",
"assets/assets/images/no_notifications.png": "67f2ff74c1ac549f804ecd0e477657d8",
"assets/assets/images/onboarding_1.png": "3ab4d1c03057a0ccd13f6604e2607ca2",
"assets/assets/images/medicine.png": "db760e520066fb5133ea375ea43a6b7e",
"assets/assets/images/case1.png": "e24bef69c89a7f983763ac33d6519bdc",
"assets/assets/images/female_sign.png": "127fc73738210e7924e3a13fb80a8f47",
"assets/assets/images/onboarding_3.png": "638f5e548ffc3624144ecb4f23ed785f",
"assets/assets/images/logo_dummy_simp.png": "57658b1b290346070ebfe63b220771f3",
"assets/assets/images/doctors/stomach.png": "b51048365268ea907907751c72221c6a",
"assets/assets/images/doctors/heartbeat.png": "5512eb54717dd73fad0dd80836507254",
"assets/assets/images/doctors/brain.png": "ff9699d704f028748e149ec16ce95441",
"assets/assets/images/doctors/pediatrician.png": "693005b73d52497c20815bef806f10d4",
"assets/assets/images/doctors/cancer.png": "51d5d0a0d84be10c40dbc997f15b95ec",
"assets/assets/images/doctors/genral.png": "2ebc9b2d64f5110fd6150ea6c4377f57",
"assets/assets/images/doctors/patient.png": "2f56b0f5a362f701b64f4d13fd2723f0",
"assets/assets/images/doctors/homeopathy.png": "5a85c1c02d1f62612b2ad85540b745e6",
"assets/assets/images/doctors/kidney.png": "436eca545ff153362926b3878493c969",
"assets/assets/images/doctors/teeth.png": "0245644a5270636fb3b9267fb9de22cf",
"assets/assets/images/docdp.png": "43d2faac7ca3c5001c6bfb722dcbd24f",
"assets/fonts/MaterialIcons-Regular.otf": "76037278a90b2fd475a265c83e82ecab",
"assets/NOTICES": "31bc76a73748c265c8c37d3e3091f625",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "1a5e71a7d78db93282e975b7fd3a432d",
"assets/AssetManifest.json": "2a3f3aec3b47b6d98d84ca498ddfc394",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44",
"flutter_bootstrap.js": "d2fe37af87b8658d12a772f1d9ea9855",
"version.json": "e45eb1afe450ad6e3af9c2efbc91f84b",
"main.dart.js": "a9b736c8d5cc30cca82dbd82bcdf7ecb"};
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
