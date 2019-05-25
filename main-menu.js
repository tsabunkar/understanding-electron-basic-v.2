module.exports = [
  {
    label: "Electron",
    submenu: [
      // Menu Templates
      {
        label: "Item 1"
      },
      {
        label: "Item 2"
      }
    ]
  },
  {
    label: "Action",
    submenu: [
      // Menu Templates
      {
        label: "Greet [Action 1]",
        click: () => {
          console.log("Hellow from main-menu Item");
        },
        accelerator: "Shift+Alt+R"
      },
      {
        label: "Action 2"
      },
      {
        label: "Action 2"
      }
    ]
  },
  {
    label: "Hero",
    submenu: [
      {
        label: "Details",
        submenu: [
          {
            label: "Want to know fights",
            click: () => {
              console.log("fights clicked");
            }
          },
          {
            label: "Want to know SuperPowers",
            click: () => {
              console.log("Super Powers clicked");
            }
          },
          {
            label: "Want to know Strength",
            click: () => {
              console.log("Super Powers clicked");
            },
            enabled: false
          }
        ]
      }
    ]
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { role: "copy" },
      { role: "paste" }
    ]
  },
  {
    label: "DevTools bro",
    submenu: [
      {
        label: "Toggle Developer Tools",
        role: "toggledevtools"
      },
      {
        role: "togglefullscreen"
      }
    ]
  }
];
