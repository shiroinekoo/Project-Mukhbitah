"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { motion } from "framer-motion";

/**
 * 3D Product Viewer Component
 * 
 * Komponen ini siap untuk integrasi model 3D hijab.
 * Untuk menggunakannya:
 * 
 * 1. Siapkan model 3D dalam format .glb atau .gltf
 * 2. Letakkan di folder /public/models/
 * 3. Uncomment kode di bawah dan sesuaikan path model
 * 
 * Contoh struktur:
 * /public/models/
 *   - pashmina.glb
 *   - segi-empat.glb
 *   - instan.glb
 */

// Uncomment untuk menggunakan model 3D
// import { useGLTF } from "@react-three/drei";
// 
// function HijabModel({ modelPath }: { modelPath: string }) {
//   const { scene } = useGLTF(modelPath);
//   return <primitive object={scene} scale={1.5} />;
// }

// Placeholder 3D Object
function PlaceholderMesh() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 0.1]} />
      <meshStandardMaterial 
        color="#E8DFD0" 
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

interface Product3DViewerProps {
  modelPath?: string;
  productName?: string;
}

export default function Product3DViewer({ 
  modelPath, 
  productName = "Hijab" 
}: Product3DViewerProps) {
  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-primary-50 to-softPink rounded-2xl overflow-hidden">
      {/* 3D Canvas */}
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Environment for realistic reflections */}
        <Environment preset="studio" />
        
        {/* 3D Model */}
        <Suspense fallback={null}>
          {/* Ganti PlaceholderMesh dengan HijabModel saat model sudah siap */}
          <PlaceholderMesh />
          {/* <HijabModel modelPath={modelPath || "/models/default.glb"} /> */}
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
      
      {/* Instructions Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 rounded-full"
      >
        <p className="text-sm text-primary-700 font-medium">
          🖱️ Drag to rotate • Scroll to zoom
        </p>
      </motion.div>
      
      {/* Loading Indicator */}
      <div className="absolute top-4 right-4 glass-card px-3 py-2 rounded-lg">
        <p className="text-xs text-primary-600">3D Preview</p>
      </div>
    </div>
  );
}

/**
 * CARA INTEGRASI MODEL 3D:
 * 
 * 1. Dapatkan model 3D hijab (bisa dari Blender, SketchFab, dll)
 * 2. Export ke format .glb (recommended) atau .gltf
 * 3. Optimize model (reduce polygon count jika terlalu berat)
 * 4. Letakkan di /public/models/
 * 5. Uncomment kode HijabModel di atas
 * 6. Gunakan komponen:
 * 
 *    <Product3DViewer 
 *      modelPath="/models/pashmina.glb"
 *      productName="Pashmina Silk Premium"
 *    />
 * 
 * TIPS OPTIMASI:
 * - Gunakan Draco compression untuk file .glb
 * - Target polygon count: 10k-50k untuk web
 * - Texture size: max 2048x2048px
 * - Use texture atlases untuk multiple materials
 * 
 * TOOLS YANG BERGUNA:
 * - Blender: Untuk modeling & export
 * - gltf-pipeline: Untuk optimasi
 * - glTF Viewer: Untuk preview sebelum integrasi
 */
