// @ts-nocheck

import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import Lights from "@components/model/lights";
import Mesh from "@components/model/mesh";
import { PhoneModel } from "@types/index";
import Loader from "@components/loader";

interface Props {
  index: number;
  groupRef: any;
  gsapType: string;
  controlRef: any;
  setRotationState: any;
  item: PhoneModel;
  size: string;
}

const ModelView: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const {
    index,
    groupRef,
    gsapType,
    controlRef,
    setRotationState,
    item,
    size,
  } = props;
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Mesh
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
