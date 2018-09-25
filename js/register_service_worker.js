 'use strict';

 if ('serviceWorker' in navigator) {
     navigator.serviceWorker
         .register('/service_worker.js')
         .then(() => {
             console.info('service worker registered')
         });
 }