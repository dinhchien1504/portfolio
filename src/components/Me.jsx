/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import sensce from "../public/models/me.glb"
import boxing from "../public/models/animations/Boxing.fbx"
import laughing from "../public/models/animations/Laughing.fbx"
import flair from "../public/models/animations/Flair.fbx"
import punching from "../public/models/animations/PunchingBag.fbx"
import idle from "../public/models/Us/idle.fbx"
import salute from "../public/models/Us/salute.fbx"
import clapping from "../public/models/Us/clapping.fbx"
import victory from "../public/models/Us/idle.fbx"



const Me = ({ animationName = 'idle', ...props }) => {
    const group = useRef()

    const { nodes, materials } = useGLTF(sensce)
//   const {animations: boxingAnimation } = useFBX(boxing)
//   const {animations: laughingAnimation } = useFBX(laughing)
//   const {animations: flairAnimation } = useFBX(flair)
//   const {animations: punchingAnimation } = useFBX(punching)
//   const {animations: idleAnimation } = useFBX(idle)
const { animations: idleAnimation } = useFBX(idle);
const { animations: saluteAnimation } = useFBX(salute);
const { animations: clappingAnimation } = useFBX(clapping);
const { animations: victoryAnimation } = useFBX(victory);



idleAnimation[0].name = 'idle';
saluteAnimation[0].name = 'salute';
clappingAnimation[0].name = 'clapping';
victoryAnimation[0].name = 'victory';


//   boxingAnimation[0].name ='boxing'
//   laughingAnimation[0].name ='laughing'
//   flairAnimation[0].name ='idle'
//   punchingAnimation[0].name ='punching'

const { actions } = useAnimations(
    [idleAnimation[0],clappingAnimation[0],victoryAnimation[0], saluteAnimation[0],  ],
    group,
  );
  useEffect(() => {
    const currentAction = actions[animationName];
    if (currentAction) {
      currentAction.reset().fadeIn(0.5).play();
      return () => currentAction.fadeOut(0.5);
    } else {
      console.warn(`Animation '${animationName}' not found in actions.`);
    }
  }, [animationName]);
  


//   const {actions} = useAnimations(
//     [boxingAnimation[0] ,laughingAnimation[0] , flairAnimation[0] ,  punchingAnimation[0]],
//     group ,
//   );

    
  return (
    <group {...props} dispose={null} ref={group}>

      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  )
}

useGLTF.preload(sensce)

export default Me 
