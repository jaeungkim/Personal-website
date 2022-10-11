import * as THREE from 'three';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  hideVideoAfterPlay = false;
  aiclinictextappear = false;
  displayAfterVideo = false;
  private points: any[] = [];
  private colors: any[] = [];
  private sizes: any[] = [];
  PARTICLE_SIZE: any = 7;
  private height: number = 10;
  color = new THREE.Color();
  private positions: any[] = [];
  private segmentPoints: any[] = [];
  private radius: number = 215;
  private dots: any;
  private dotsStrokes: any;
  private dotsMaterial: any;
  //Lines Variables
  private segments: any;
  private strokes: any;
  private strokesMaterial: any;
  private particlesMesh: any;
  //RayCasting
  private INTERSECTED: any;
  hoveredObjects: any = [];
  vector: any = {
    x: Number,
    y: Number,
    z: Number,
    amount: Number,
  };
  raycaster: any = new THREE.Raycaster();
  mouse: any = new THREE.Vector2();
  vertexShader = `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;
  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( 300.0 / -mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
  }
  `;
  fratmentShader = `
  uniform vec3 color;
  uniform sampler2D pointTexture;
  uniform float alphaTest;
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4( color * vColor, 1.0 );
    gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
    if ( gl_FragColor.a < alphaTest ) discard;
  }
  `;
  constructor(private router: Router) {}
  public ngOnInit(): void {
    setTimeout(() => {
      this.hideVideoAfterPlay = true;
    }, 13000);

    setTimeout(() => {
      if (this.router.url === '/') {
        this.createScene();
        this.render();
      }
    }, 10000);

    setTimeout(() => {
      this.aiclinictextappear = true;
    }, 9750);
  }

  public createScene(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.rendererCanvas.nativeElement,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x151217);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 375);
    this.createStrokes();

    window.addEventListener('resize', () => {
      this.resize();
    });

    window.addEventListener('pointermove', (event) => {
      this.onMouseMove(event);
    });
  }
  public createStrokes() {
    // =====================OUT GALAXY PARTICLES===============================
    const loader = new THREE.TextureLoader();
    const cross = loader.load('./assets/images/home/cross3.png');
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 2000;

    const posArray = new Float32Array(particlesCnt * 3);
    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 500;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 5,
      map: cross,
      depthTest: false,
      transparent: true,
    });

    this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particlesMesh);
    // =====================OUT GALAXY PARTICLES===============================
    type posObject = {
      [key: string]: any;
    };
    //DOT MATERIAL DECLARATIONS
    this.dots = new THREE.BufferGeometry();
    for (var i = 0; i < 2500; i++) {
      let pos: posObject = {
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        lat: 2 * Math.PI * Math.random(),
        long: Math.acos(2 * Math.random() - 1),
      };
      pos.u = Math.cos(pos.long);
      pos.sqrt = Math.sqrt(1 - pos.u * pos.u);
      this.positions.push(pos);

      let newPos = {
        x:
          (this.positions[i].x * this.height + this.radius) *
          this.positions[i].sqrt *
          Math.cos(this.positions[i].lat),
        y:
          (this.positions[i].y * this.height + this.radius) *
          this.positions[i].sqrt *
          Math.sin(this.positions[i].lat),
        z:
          (this.positions[i].z * this.height + this.radius) *
          this.positions[i].u,
      };

      this.vector = new THREE.Vector3(newPos.x, newPos.y, newPos.z);
      this.vector.amount = 0;
      this.points.push(this.vector);
      this.dots.setFromPoints(this.points);

      //COLORS
      let remainder = i % 4;
      if (remainder === 0) {
        this.color.setHex(0xded8fa);
      } else if (remainder === 1) {
        this.color.setHex(0x8074c6);
      } else if (remainder === 2) {
        this.color.setHex(0x261d8f);
      } else {
        this.color.setHex(0x322696);
      }
      this.color.toArray(this.colors, i * 3);
      this.sizes[i] = this.PARTICLE_SIZE;
    }
    this.segments = new THREE.BufferGeometry();
    this.strokesMaterial = new THREE.LineBasicMaterial({
      color: '#f7eda4',
      transparent: true,
      opacity: 0.2,
    });
    this.strokes = new THREE.LineSegments(this.segments, this.strokesMaterial);

    for (var i = this.points.length - 1; i >= 0; i--) {
      this.vector = this.points[i];
      for (var j = this.points.length - 1; j >= 0; j--) {
        if (
          this.vector.amount < 3 &&
          i !== j &&
          this.vector.distanceTo(this.points[j]) < 25
        ) {
          this.segmentPoints.push(this.vector);
          this.segmentPoints.push(this.points[j]);
          this.vector.amount++;
          this.points[j].amount++;
          this.segments.setFromPoints(this.segmentPoints);
        }
      }
    }

    this.dots.setAttribute(
      'customColor',
      new THREE.Float32BufferAttribute(this.colors, 3)
    );
    this.dots.setAttribute(
      'size',
      new THREE.Float32BufferAttribute(this.sizes, 1)
    );

    this.dotsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
        pointTexture: {
          value: new THREE.TextureLoader().load(
            'assets/images/home/dotTexture.png'
          ),
        },
        alphaTest: { value: 0.5 },
      },
      vertexShader: this.vertexShader,
      fragmentShader: this.fratmentShader,
    });

    this.dotsStrokes = new THREE.Points(this.dots, this.dotsMaterial);

    this.dotsStrokes.geometry = this.dots;
    this.strokes.geometry = this.segments;

    // this.scene.add(this.strokes);
    this.scene.add(this.strokes, this.dotsStrokes);
  }

  public animate(): void {
    let count = this.segments.attributes.position.count;
    this.particlesMesh.rotation.x += 0.0001;
    this.particlesMesh.rotation.y += 0.0001;
    let now = Date.now() / 3000;
    for (let i = 0; i < count; i++) {
      // const x = this.segments.attributes.position.getX(i);
      const y = this.segments.attributes.position.getY(i);
      // const x2 = this.dots.attributes.position.getX(i);
      const y2 = this.dots.attributes.position.getY(i);
      // const xsin = Math.sin(x + now);
      const ycos = Math.cos(y + now);
      // const xsin2 = Math.sin(x2 + now);
      const ycos2 = Math.cos(y2 + now);
      // this.segments.attributes.position.setZ(i, xsin + ycos * 25);
      // this.dots.attributes.position.setZ(i, xsin2 + ycos2 * 25);
      this.segments.attributes.position.setZ(i, ycos * 25);
      this.dots.attributes.position.setZ(i, ycos2 * 25);
    }
    this.segments.computeVertexNormals();
    this.segments.attributes.position.needsUpdate = true;

    this.dots.computeVertexNormals();
    this.dots.attributes.position.needsUpdate = true;
  }

  public render(): void {
    this.animate();
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);
  }

  public onMouseMove(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    const geometry = this.dotsStrokes.geometry;
    const attributes = geometry.attributes;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.raycaster.params.Points.threshold = 5;
    const intersects = this.raycaster.intersectObject(this.dotsStrokes);
    if (intersects.length > 0) {
      for (let i = 0; i < intersects.length; i++) {
        this.INTERSECTED = intersects[i].index;
        attributes.size.array[this.INTERSECTED] = this.PARTICLE_SIZE * 3;
        attributes.size.needsUpdate = true;
        let notIncludesD = !this.hoveredObjects.includes(this.INTERSECTED);
        if (notIncludesD) {
          this.hoveredObjects.push(this.INTERSECTED);
        }
      }
    } else if (this.INTERSECTED !== null) {
      this.hoveredObjects.forEach((element) => {
        setTimeout(() => {
          attributes.size.array[element] = this.PARTICLE_SIZE;
          attributes.size.needsUpdate = true;
        }, 100);
      });
      this.INTERSECTED = null;
    }
  }

  public resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
