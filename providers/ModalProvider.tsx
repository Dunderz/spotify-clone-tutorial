"use client";
import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This is a workaround to prevent the modal from rendering on the server
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>Modals!</>;
};

export default ModalProvider;
