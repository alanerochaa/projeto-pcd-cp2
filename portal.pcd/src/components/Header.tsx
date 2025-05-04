'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="bg-[#B3DCE5] p-4 text-[#3A3A3A] flex justify-between items-center">
      <h1 className="text-xl font-bold text-center flex-1">Bem‑vindo ao Portal-PCD</h1>
      <button
        onClick={handleGoBack}
        className="text-[#3A3A3A] text-sm px-3 py-1 rounded-full hover:bg-[#A1CED9] focus:outline-none focus:ring-2 focus:ring-[#A1CED9]"
      >
        Voltar
      </button>
    </header>
  );
}
