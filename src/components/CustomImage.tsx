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

  const handleMouseEnter = (
    e: React.SyntheticEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.currentTarget.style.cursor = "pointer";
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={handleShow}
        className={className}
        onMouseEnter={handleMouseEnter}
      />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <img src={src} alt={alt} style={{ maxWidth: "100%" }} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;
