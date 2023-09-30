import React, { useEffect, useRef } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three'; // Import THREE from 'three'
extend({ OrbitControls })

const createGlassMaterial = () => {
    return new THREE.MeshPhysicalMaterial({
      color: 'white',
      roughness: 0.4,
      metalness: 0.3,
      transparent: true,
      transmission: 0.7,
      opacity: 1,
      envMapIntensity: 1,
    });
};

const RotatingObj = ({ objFilePath, scale }) => {
    const groupRef = useRef();
    const { camera, gl } = useThree();

    useEffect(() => {
        const loader = new OBJLoader();
        loader.load(
            objFilePath,
                (object) => {
                    object.scale.set(scale, scale, scale);
                    object.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            child.material = createGlassMaterial();
                        }
                      });
                      groupRef.current.add(object);
                    groupRef.current.add(object);
                },
                undefined,
                (error) => {
                    console.error('Error loading .obj file', error);
                }
        )}, [objFilePath])

    useFrame(() => {
        groupRef.current.rotation.y += 0.005; // Rotate the object slowly
    })

    return (
        <group ref={groupRef}>
            <orbitControls args={[camera, gl.domElement]} enableZoom={false}  />
        </group>
    )
}




const StageObject = () => {
    return (
        <Canvas style={{ width: '100%', height: '100vh' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <RotatingObj objFilePath="/object.obj" scale={8} />
        </Canvas>
    )
}

export default StageObject