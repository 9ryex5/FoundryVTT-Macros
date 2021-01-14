function tokenUpdate(data) {
  canvas.tokens.controlled.map(token => token.update(data));
}

let torchAnimation = {"type": "torch", "speed": 1, "intensity": 1};

let dialogEditor = new Dialog({
  title: `Token Light Picker`,
  content: `Pick the light source the selected token is holding.`,
  buttons: {
    none: {
      label: `None`,
      callback: () => {
        tokenUpdate({"dimLight": 0, "brightLight": 0, "lightAngle": 360,});
        dialogEditor.render(true);
      }
    },
    torch: {
      label: `Torch`,
      callback: () => {
        tokenUpdate({"dimLight": 40, "brightLight": 20, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    light: {
      label: `Light Cantrip`,
      callback: () => {
        tokenUpdate({"dimLight": 40, "brightLight": 20, "lightAngle": 360, "lightAnimation": {"type": "none"}});
        dialogEditor.render(true);
      }
    },
candle: {
      label: `Candle`,
      callback: () => {
        tokenUpdate({"dimLight": 10, "brightLight": 5, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    lamp: {
      label: `Lamp`,
      callback: () => {
        tokenUpdate({"dimLight": 45, "brightLight": 15, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    bullseye: {
      label: `Bullseye Lantern`,
      callback: () => {
        tokenUpdate({"dimLight": 120, "brightLight": 60, "lightAngle": 60, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    hoodedOpen: {
      label: `Hooded Lantern (Open)`,
      callback: () => {
        tokenUpdate({"dimLight": 60, "brightLight": 30, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    hoodedClosed: {
      label: `Hooded Lantern (Closed)`,
      callback: () => {
        tokenUpdate({"dimLight": 5, "brightLight": 0, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
moonTouchedSword: {
      label: `Moon-Touched Sword`,
      callback: () => {
        tokenUpdate({"dimLight": 30, "brightLight": 15, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
faerieFire: {
      label: `Faerie Fire`,
      callback: () => {
        tokenUpdate({"dimLight": 10, "brightLight": 0, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
produceFlame: {
      label: `Produce Flame`,
      callback: () => {
        tokenUpdate({"dimLight": 20, "brightLight": 10, "lightAngle": 360, "lightAnimation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Close`
    },
  },
  default: "close",
  close: () => {}
});

dialogEditor.render(true)