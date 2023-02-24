import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
  constructor() {
    super();
    this.updateSizes();
    window.addEventListener("resize", () => this.updateSizes());
  }

  updateSizes() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.frustrum = 5;

    const newDevice = this.width < 968 ? "mobile" : "desktop";
    if (newDevice !== this.device) {
      this.device = newDevice;
      this.emit("switchdevice", this.device);
    }

    this.emit("resize");
  }
}
