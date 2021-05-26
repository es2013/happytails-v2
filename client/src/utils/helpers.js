//   export function idbPromise(storeName, method, object) {
//     return new Promise((resolve, reject) => {
//       // open connection to the database `shop-shop` with the version of 1
//       const request = window.indexedDB.open("shop-shop", 1);

//       // create variables to hold reference to the database, transaction (tx), and object store
//       let db, tx, store;

//       // if version has changed (or if this is the first time using the database), run this method and create the three object stores
//       request.onupgradeneeded = function (e) {
//         const db = request.result;
//         // create object store for each type of data and set "primary" key index to be the `_id` of the data
//         db.createObjectStore("products", { keyPath: "_id" });
//         db.createObjectStore("categories", { keyPath: "_id" });
//         db.createObjectStore("cart", { keyPath: "_id" });
//       };

//       // handle any errors with connecting
//       request.onerror = function (e) {
//         console.log("There was an error");
//       };

//       // on database open success
//       request.onsuccess = function (e) {
//         // save a reference of the database to the `db` variable
//         db = request.result;
//         // open a transaction do whatever we pass into `storeName` (must match one of the object store names)
//         tx = db.transaction(storeName, "readwrite");
//         // save a reference to that object store
//         store = tx.objectStore(storeName);

//         // if there's any errors, let us know
//         db.onerror = function (e) {
//           console.log("error", e);
//         };

//         switch (method) {
//           case 'put':
//             store.put(object);
//             resolve(object);
//             break;
//           case 'get':
//             const all = store.getAll();
//             all.onsuccess = function() {
//               resolve(all.result);
//             };
//             break;
//           case 'delete':
//             store.delete(object._id);
//             break;
//           default:
//             console.log('No valid method');
//             break;
//         }

//         // when the transaction is complete, close the connection
//         tx.oncomplete = function () {
//           db.close();
//         };
//       };
//     });
//   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let allHelpers = {
  isToday: (date) => {
    const today = new Date();
    const dateIsToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    return dateIsToday;
  },

  isPM: (date) => {
    const hours = date.getHours();
    return hours >= 12;
  },

  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  happyTail: () => {
    
    // pass dog data to check if potty and / or walk activity in AM has been recorded

    // if (potty && !isPM) { has_potty_am: true }

    // if (walk && !isPM) { has_walk_am: true }


    // if (has_potty_am && has_walk_am) { return true }

  }
};

module.exports = allHelpers;
