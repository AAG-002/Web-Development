import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(4.5, 2.6, 6)

const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement)

//Box Class(THREE.Mesh Extend)
class Box extends THREE.Mesh{
      constructor({width, height, depth, color = '#0000', velocity={ x:0, y:0, z:0}, position = {x:0, y:0, z:0}}, zAcceleration = false){
            super(new THREE.BoxGeometry(width,height,depth),new THREE.MeshStandardMaterial({color}))
            this.width = width
            this.height = height
            this.depth = depth

            this.position.set(position.x, position.y, position.z)

            this.bottom = this.position.y - this.height/2
            this.top = this.position.y + this.height/2

            this.right = this.position.x + this.width/2
            this.left = this.position.x - this.width/2

            this.front = this.position.z + this.depth/2
            this.back = this.position.z - this.depth/2

            this.velocity = velocity

            this.gravity = -0.002

            this.zAcceleration = zAcceleration
      }

      updateSides(){
            this.bottom = this.position.y - this.height/2
            this.top = this.position.y + this.height/2
            
            this.right = this.position.x + this.width/2
            this.left = this.position.x - this.width/2

            this.front = this.position.z + this.depth/2
            this.back = this.position.z - this.depth/2
      }


      update(ground){         
            this.updateSides()   

            if(this.zAcceleration){
                  this.velocity.z += 0.0003
            }

            this.position.x += this.velocity.x
            this.position.z += this.velocity.z

            this.applyGravity(ground)
      }

      applyGravity(ground){
            this.velocity.y += this.gravity

            //Ground Hitting
            if (boxCollision({ box1: this,  box2: ground}))
            {     
                  const bouncy = 0.7
                  this.velocity.y *= bouncy
                  this.velocity.y = -this.velocity.y
            }               
            else
                  this.position.y += this.velocity.y
      }
}

      // Collison
      function boxCollision({box1, box2}){
             const xCollison = box1.right >= box2.left && box1.left <= box2.right
             const yCollison = box1.top >= box2.bottom && box1.bottom + box1.velocity.y <= box2.top
             const zCollison = box1.front >= box2.back && box1.back <= box2.front

            return xCollison && yCollison && zCollison 
      }

// Enemies
      const Enemies = []

//Cube
// const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
// const cube = new THREE.Mesh(geometry, material);
const cube = new Box({width:1,height:1,depth:1,color: 0x00ff00,velocity:{x:0,y:-0.01,z:0}, position:{x:0, y:0, z:2}})
cube.castShadow = true
scene.add(cube);

//Ground
// const geometry2 = new THREE.BoxGeometry(5,0.5,10);
// const material2 = new THREE.MeshStandardMaterial({color: 0x00ff});
const ground = new Box({width:10, height:0.5, depth:40, color: '#FF8700', position:{x:0, y:-2, z:-10}})
ground.receiveShadow = true
ground.position.y = -2;
scene.add(ground);

//Light
const light = new THREE.DirectionalLight(0xffffff,2);
light.castShadow = true
light.position.z = 1
light.position.y = 3
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff, 1))

//Camera
camera.position.z = 5;

// Keys
const keys ={ a:{pressed: false}, d:{pressed: false}, w:{pressed: false}, s:{pressed: false} }

// Buttons
window.addEventListener('keydown',(event)=>{
      switch(event.code){
            case "ArrowLeft":
                  keys.a.pressed = true
                  break
            case "ArrowRight":
                  keys.d.pressed = true
                  break
            case "ArrowUp":
                  keys.w.pressed = true
                  break
            case "ArrowDown":
                  keys.s.pressed = true
                  break
             case "Space":
                  cube.velocity.y = 0.1
                  break       
      }
            
})

window.addEventListener('keyup',(event)=>{
      switch(event.code){
            case "ArrowLeft":
                  keys.a.pressed = false
                  break
            case "ArrowRight":
                  keys.d.pressed = false
                  break
            case "ArrowUp":
                  keys.w.pressed = false
                  break
            case "ArrowDown":
                  keys.s.pressed = false
                  break    
      }
            
})


let frames = 0
let spawnRate = 600
function animate() {
	const animationID = requestAnimationFrame( animate );
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01; 
	renderer.render( scene, camera );
      cube.update(ground);

      Enemies.forEach((enemy) => {
            enemy.update(ground)
            if(boxCollision({box1:cube , box2:enemy})){
                  cancelAnimationFrame(animationID)
            }
      })
      // Eniemes
      if(frames % spawnRate == 0){
            if(spawnRate > 20){
                  spawnRate -= 20
            }
            const enemy = new Box({width:1,height:1,depth:1,position:{x:(Math.random()*10) - 5, y:0, z:-15}, color: '#01C3EE', velocity:{x:0,y:-0.01,z:0.007}, zAcceleration: true})
            enemy.castShadow = true
            scene.add(enemy)
            Enemies.push(enemy)
      }

      frames++

      // Movement
            cube.velocity.x = 0
            cube.velocity.z = 0
            
            
            if(keys.a.pressed){
                  cube.velocity.x = -0.02
            }
            else if(keys.d.pressed){
                  cube.velocity.x = 0.02
            }
            
            
            if(keys.w.pressed){
                  cube.velocity.z = -0.02
            }
            else if(keys.s.pressed){
                  cube.velocity.z = 0.02
            }


}

window.onload = animate;