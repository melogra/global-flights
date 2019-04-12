import { scene } from './scene'
import { PerspectiveCamera } from 'three'
import sceneConf from '../confs/scene-conf'

const { x, y, z } = sceneConf.camera.position

const camera = new PerspectiveCamera(
  45,
  window.innerWidth,
  window.innerHeight,
  0.1,
  1000
)

camera.position.x = x
camera.position.y = y
camera.position.z = z

camera.lookAt(scene.position)

export default camera
