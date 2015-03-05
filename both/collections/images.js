Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {path: '~/uploads/images'})]
});

// Images.allow({
//   download: function () {
//     return true;
//   },
//   fetch: null
// });