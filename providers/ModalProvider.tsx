"use client";

import { useState, useEffect } from "react";

import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This is a workaround to prevent the modal from rendering on the server
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
