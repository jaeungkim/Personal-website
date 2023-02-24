import * as THREE from "three";
import Experience from "../Experience.js";

const CIRCLE_COUNT = 3;
const CIRCLE_RADIUS = 5;
const CIRCLE_SEGMENTS = 64;
const CIRCLE_COLORS = [0xfe5f55, 0x8395cd, 0x7ad0ac];
const CIRCLE_POSITIONS = [
  { x: 0, y: -0.29 },
  { x: 2, y: -0.28 },
  { x: 0, y: -0.27 },
];

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setFloor();
    this.setCircles();
  }

  setFloor() {
    const geometry = new THREE.PlaneGeometry(100, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      side: THREE.BackSide,
    });
    this.plane = new THREE.Mesh(geometry, material);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.position.y = -0.3;
    this.plane.receiveShadow = true;
    this.scene.add(this.plane);
  }

  setCircles() {
    const geometry = new THREE.CircleGeometry(CIRCLE_RADIUS, CIRCLE_SEGMENTS);
    const circles = [];

    for (let i = 0; i < CIRCLE_COUNT; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: CIRCLE_COLORS[i],
      });
      const circle = new THREE.Mesh(geometry, material);
      circle.position.set(CIRCLE_POSITIONS[i].x, CIRCLE_POSITIONS[i].y, 0);
      circle.scale.set(0, 0, 0);
      circle.rotation.x = -Math.PI / 2;
      circle.receiveShadow = true;
      this.scene.add(circle);
      circles.push(circle);
    }

    [this.circleFirst, this.circleSecond, this.circleThird] = circles;
  }

  resize() {}

  update() {}
}
