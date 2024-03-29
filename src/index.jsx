import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import { Leva } from 'leva'
import { KeyboardControls } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))
// console.log(root)
root.render(
    <>
        <Leva />
        <KeyboardControls map={[
            { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
            { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
            { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
            { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
            { name: 'upward', keys: [ 'ArrowRight', 'KeyQ' ]  },
            { name: 'downward', keys: [ 'ArrowRight', 'KeyE' ]  },
        ]}>
            <Canvas shadows camera={{fov: 50, position: [0, 1.5, -15]}} >
                {/* <OrbitControls makeDefault
                    maxDistance={30}
                    minDistance={5}
                    maxPolarAngle={Math.PI * 0.45}
                /> */}
                <Experience />
            </Canvas>
        </KeyboardControls>
    </>
)