import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { robot } from '../assets';

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref} scale={clicked ? 1.5 : 2} onClick={(event) => click(!clicked)} onPointerOver={(event) => hover(true)} onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "blue" : "#0061FF"} />
    </mesh>
  )
}

function Content() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))
  return (
    <group ref={ref}>
      <Box position={[-3, 0, 0]} />
      <Box position={[0, -3, -4]} />
      <Box position={[3, 0, 0]} />
    </group>
  )
}

const HeroAnimation = () => {
    return (
        <div className="hero-animation">
            <div className="canvas">
                <Canvas camera={{ position: [0, 0, 7.5] }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Content />
                </Canvas>
            </div>
            
            <div className="robot-container">
                <img src={robot} alt="robot" className="w-[100%] h-[100%] max-w-[500px] relative z-[5]" />
                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>
        </div>
    )
}

export default HeroAnimation;