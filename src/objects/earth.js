import earthConf from '../confs/earch-conf'
import {
  SphereGeometry,
  TextureLoader,
  MeshBasicMaterial,
  Mesh,
} from 'three'

class Earth {
  constructor(opts = earthConf) {
    this.opts = Object.assign({}, earthConf, opts)
    const {
      radius,
      horFragment,
      verFragment,
    } = this.opts
    const geo = new SphereGeometry(
      radius,
      horFragment,
      verFragment,
    )
    const loader = new TextureLoader()
    let material = null
    let mesh = null

    if (this.opts.texture) {
      loader.load(this.opts.textureUrl, (texture) => {
        material = new MeshBasicMaterial({ map: texture, overdraw: 0.5 })
        mesh = new Mesh(geo, material)
      })
    } else {
      material = new MeshBasicMaterial({ color: 0xffffff })
      mesh = new Mesh(geo, material)
    }

    this.mesh = mesh
  }
}

export default Earth