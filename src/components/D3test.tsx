import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box3 } from './Box3';
import { useState } from "react";

const D3test = () => {

  const [animationName, setAnimationName] = useState(null);
  const [loop, setLoop] = useState(true);

  const handlePlay = (actionName: string ) => {

    setAnimationName(null); // 애니메이션 초기화 (재생 중인 애니메이션이 있다면 멈추게 함)

    setTimeout(() => {
      setAnimationName(actionName); // 애니메이션 이름 플레이하기 
    }, 0);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>

      <div style={{ position: "absolute", zIndex: 1, top: 20, left: 20, display: "flex", gap: "10px" }}>
          {/* Blender에서 설정한 실제 애니메이션 이름을 넣으세요 (예: 'Action', 'Run' 등) */}
          <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handlePlay("lowAction")}> lowAction 재생하기 </button>
          <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" 
          onClick={() => setAnimationName(null)}>정지</button>
          
          <button onClick={() => setLoop(!loop)} style={{ backgroundColor: loop ? "green" : "gray" }}>
            루프 상태: {loop ? "반복 재생 중" : "한번만 재생"}
          </button>
        </div>

      {/* 1. Canvas 컴포넌트에 그림자 활성화 및 카메라 설정, 배경색 추가 */}
      <Canvas
        shadows // 1. 그림자 활성화
        camera={{ position: [3, 3, 10], fov: 45 }} // 2. 카메라 위치와 화각 조정
        style={{ background: '#1a1a1a' }} // 어두운 배경에서 빛이 더 잘 보입니다
      >
        {/* 3. 조명 세팅 (3점 조명 방식) */}
        <ambientLight intensity={0.3} /> 
        
        {/* 메인 조명 (그림자 생성) */}
        <directionalLight
          position={[-5, 7, 5]}
          intensity={3}
          castShadow
          shadow-mapSize={[2048, 2048]} // 그림자 해상도 향상
          shadow-bias={-0.0001}
        />
        
        {/* 은은한 반사광 (입체감 보완) */}
        <pointLight position={[-5, -2, -5]} intensity={0.5} color="#edf2f7" />

        {/* 4. 오브젝트 및 그림자를 받는 바닥 */}
        <Box3 currentAction={animationName} isLooping={loop} />

        {/* 그림자가 맺힐 바닥 공간 */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.4} />
        </mesh>

        <OrbitControls 
          enableDamping // 부드러운 카메라 회전 애니메이션
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
    </div>
  )
}

export default D3test