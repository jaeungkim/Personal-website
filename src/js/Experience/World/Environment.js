import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Environment {
  constructor() {
    const experience = new Experience();
    this.scene = experience.scene;
    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.setSunlight();
  }

  setSunlight() {
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(-1.5, 7, 3);
    this.scene.add(this.sunLight);
    this.scene.add(this.ambientLight);
  }

  switchTheme(theme) {
    const darkColor = {
      r: 0.17254901960784313,
      g: 0.23137254901960785,
      b: 0.6862745098039216,
    };
    const lightColor = { r: 255 / 255, g: 255 / 255, b: 255 / 255 };
    const intensity = { dark: 0.78, light: { sun: 3, ambient: 1 } };
    const sunColor = theme === "dark" ? darkColor : lightColor;
    const sunIntensity =
      theme === "dark" ? intensity.dark : intensity.light.sun;
    const ambientIntensity =
      theme === "dark" ? intensity.dark : intensity.light.ambient;
    GSAP.to(this.sunLight.color, sunColor);
    GSAP.to(this.ambientLight.color, sunColor);
    GSAP.to(this.sunLight, { intensity: sunIntensity });
    GSAP.to(this.ambientLight, { intensity: ambientIntensity });
  }

  resize() {}

  update() {}
}
