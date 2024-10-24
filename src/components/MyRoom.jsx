import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame,useThree } from '@react-three/fiber'
import Room from '../public/models/hacker-room.glb'
import monitor  from "../public/textures/desk/monitor.png"
import screen  from "../public/textures/desk/screen.png"
import tableTexture from "../public/textures/desk/table.png"


const MyRoom = (props) => {
 
  const monitorTexture = useTexture(monitor)
  const screenTexture = useTexture(screen)


  // const { nodes, materials } = useGLTF('/asset/model/hacker-room.glb');
  const { nodes, materials } = useGLTF(Room);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
        >
        <meshMatcapMaterial  map={screenTexture}/>

        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
        >
        <meshLambertMaterial map={monitorTexture} />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_2.geometry}
        material={materials.computer_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_8.geometry}
        material={materials.tv_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
};

// Preload the model so it's ready before rendering
useGLTF.preload(Room);

export default MyRoom;
