import Experience from "../Experience.js";
import Room from "./Room.js";
import Floor from "./Floor.js";
import Environment from "./Environment.js";
import { EventEmitter } from "events";

export default class World extends EventEmitter {
  constructor() {
    super();
    const experience = new Experience();
    this.sizes = experience.sizes;
    this.scene = experience.scene;
    this.canvas = experience.canvas;
    this.camera = experience.camera;
    this.resources = experience.resources;
    this.theme = experience.theme;

    this.resources.once("ready", () => {
      this.environment = new Environment();
      this.floor = new Floor();
      this.room = new Room();
      this.emit("worldready");
    });

    this.theme.on("switch", (theme) => {
      if (this.environment) {
        this.environment.switchTheme(theme);
      }
    });

    this.updateRoom = this.updateRoom.bind(this);
    this.updateControls = this.updateControls.bind(this);
  }

  updateRoom() {
    if (this.room) {
      this.room.update();
    }
  }

  updateControls() {
    if (this.controls) {
      this.controls.update();
    }
  }

  update() {
    this.updateRoom();
    this.updateControls();
  }
}
