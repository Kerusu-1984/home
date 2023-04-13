import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { ImgHTMLAttributes } from "react";

const ImageModal = ({
  src,
  alt,
  className,
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 画面幅が768px以上ならtrueを返す
  const isDesktop = () => {
    return window.innerWidth >= 768;
  };

  return (
    <>
      <img src={src} alt={alt} onClick={handleShow} className={className} />

      <Modal show={show} onHide={handleClose} centered={!isDesktop()}>
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <img src={src} alt={alt} style={{ maxWidth: "100%" }} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;
