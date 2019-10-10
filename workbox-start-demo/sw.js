importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// JS 请求: 网络优先
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst()
);