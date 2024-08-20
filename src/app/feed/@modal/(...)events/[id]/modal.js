'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import './modal.css';

export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  //console.log("render modal")

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [mounted])

  function onDismiss() {
    console.log("close")
    //dialogRef.current.close();
    router.back();
  }

  if (!mounted) return null;

  return createPortal(
    <div className="modal-backdrop">
        <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
              {children}
              <button onClick={onDismiss} className="close-button btn btn-dark btn-outline-dark">×</button>
        </dialog>
  </div>,
  document.getElementById('modal-root')
  );
}