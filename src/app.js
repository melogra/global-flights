import { scene, renderer, group } from '@/scene/scene'
import { camera, controls } from '@/scene/camera'
import stats from '@/scene/stats'
import gui from '@/scene/dat.gui'
import earth from '@/objects/earth'

class App {
  constructor() {
    this.stats = stats
    this.gui = gui
    this.camera = camera
    this.controls = controls
    this.renderer = renderer
    this.renderer = renderer
    this.group = group
    this.scene = scene

    this.init()
    this.initScene()
    this.render()
  }
  init() {
    document.getElementById('app').appendChild(this.renderer.domElement)
    document.getElementById('app').appendChild(this.stats.domElement)

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }, false)
  }
  initScene() {
    this.earth = earth
    this.group.add(this.earth.mesh)

    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
  }
  render() {
    requestAnimationFrame(this.render.bind(this))
    group.rotation.y -= 0.005
    this.stats.update()
    this.renderer.render(this.scene, this.camera)
  }
}

export default App