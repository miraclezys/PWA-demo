importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
   console.log(`Yay! Workbox is loaded 🎉`);
} else {
   console.log(`Boo! Workbox didn't load 😬`);
}

// JS 请求: 网络优先
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst({
      cacheName: 'workbox:js',
    })
);

// CSS 请求：缓存优先
workbox.routing.registerRoute(
    /.*\.css/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'workbox:css',
    })
);

// Image 请求：缓存优先
workbox.routing.registerRoute(
	/.*\.(?:png|jpg|jpeg|svg|gif)/,
	new workbox.strategies.CacheFirst({
	  cacheName: 'workbox:image',
	})
);
