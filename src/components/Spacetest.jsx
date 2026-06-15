import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  KeyboardControls,
  useKeyboardControls,
} from "@react-three/drei";
import * as THREE from "three";

// 1. 키보드 매핑 설정
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
];

// 2. 조종 및 카메라 추적이 가능한 박스 컴포넌트
function PlayerBox({ isGameMode }) {
  const boxRef = useRef();
  const [, getKeys] = useKeyboardControls();
  const speed = 0.1;

  useFrame((state) => {
    if (!boxRef.current) return;

    if (isGameMode) {
      // --- A. 게임 모드: WASD 이동 로직 ---
      const { forward, backward, left, right } = getKeys();

      // 전진/후진 (박스의 로컬 앞방향 기준)
      if (forward) boxRef.current.translateZ(-speed);
      if (backward) boxRef.current.translateZ(speed);

      // 좌/우 회전 (박스 자체를 회전)
      if (left) boxRef.current.rotation.y += 0.05;
      if (right) boxRef.current.rotation.y -= 0.05;

      // --- B. 카메라 뒤따라오기 (Third Person Camera) ---
      // 박스의 현재 위치와 회전값을 기반으로 카메라가 위치할 '뒤쪽 상단' 좌표 계산
      const relativeCameraOffset = new THREE.Vector3(0, 3, 7); // x=0, y=3(위쪽), z=7(뒤쪽)
      const cameraOffset = relativeCameraOffset.applyMatrix4(
        boxRef.current.matrixWorld,
      );

      // 카메라 위치를 부드럽게 보간(Lerp)하며 이동
      state.camera.position.lerp(cameraOffset, 0.1);

      // 카메라가 항상 박스를 바라보게 설정
      state.camera.lookAt(boxRef.current.position);
    } else {
      // --- C. 일반 모드: 그냥 스스로 빙글빙글 회전 ---
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={boxRef} position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isGameMode ? "crimson" : "dodgerblue"} />
    </mesh>
  );
}

// 3. 메인 앱 컴포넌트
export default function Spacetest() {
  const [isGameMode, setIsGameMode] = useState(false);

  // ESC 키 누르면 게임 모드 탈출
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsGameMode(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* UI 버튼 */}
      <button
        onClick={() => setIsGameMode(!isGameMode)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {isGameMode ? "일반 모드 보기 (ESC)" : "게임 모드 진입 (WASD)"}
      </button>

      {/* 키보드 컨트롤러 랩퍼 */}
      <KeyboardControls map={keyboardMap}>
        <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          {/* 바닥 (위치 감각을 위해 필요) */}
          <gridHelper args={[50, 50]} />

          {/* 주인공 박스 */}
          <PlayerBox isGameMode={isGameMode} />

          {/* 일반 모드일 때만 마우스 드래그 조작(OrbitControls) 활성화 */}
          {!isGameMode && <OrbitControls makeDefault />}
        </Canvas>
      </KeyboardControls>
    </div>
  );
}
