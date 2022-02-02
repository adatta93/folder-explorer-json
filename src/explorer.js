let explorer = {
  name: "root",
  isFolder: true,
  isRoot: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Item.js",
              isFolder: false
            }
          ]
        },
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "index.js",
          isFolder: false
        },
        {
          name: "styles.css",
          isFolder: false
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false
    }
  ]
};

export default explorer;
