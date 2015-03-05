Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: '~/uploads'})]
});

// Images.allow({
//   download: function () {
//     return true;
//   },
//   fetch: null
// });