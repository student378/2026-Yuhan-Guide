// 홈 화면 앱(PWA)용 서비스워커
// · 같은 사이트의 화면 파일만 저장하고, 항상 "새 버전 먼저" 받아옵니다(인터넷이 끊기면 저장본 사용).
// · 구글 서버(script.google.com) 등 외부 요청은 건드리지 않으므로 실시간 현황·공지·로그는 그대로 동작합니다.
const CACHE = 'yuhan-guide-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(['./', './index.html', './manifest.json', './logo.png']))
    .catch(() => {})
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.endsWith('/admin.html')) return;   // 관리자 화면은 저장하지 않음
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});
