import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor(sizes, canvas, scene) {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.perspectiveCamera.position.set(29, 14, 12);
    this.scene.add(this.perspectiveCamera);
  }

  createOrthographicCamera() {
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -50,
      50
    );
    this.orthographicCamera.position.set(0, 5.65, 10);
    this.orthographicCamera.rotation.set(-Math.PI / 6, 0, 0);
    this.scene.add(this.orthographicCamera);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
  }

  resize() {
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    const frustrumHeight = this.sizes.frustrum;
    const frustrumWidth = frustrumHeight * this.sizes.aspect;
    this.orthographicCamera.left = -frustrumWidth / 2;
    this.orthographicCamera.right = frustrumWidth / 2;
    this.orthographicCamera.top = frustrumHeight / 2;
    this.orthographicCamera.bottom = -frustrumHeight / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
