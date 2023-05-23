import { useState } from "react";

const CaptchaImage = (prop: { img_src: string; className?: string }) => {
  const { img_src, className } = prop;
  return (
    <img
      src={img_src}
      alt="captcha-image"
      height="150px"
      className={`w-100 ${className}`}
    />
  );
};

const Pokecaptcha = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <div
        style={{ width: "300px", height: "75px", backgroundColor: "#f5f5f5" }}
        className="border shadow-sm px-3 pt-3"
      >
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            style={{ transform: "scale(2.5)" }}
            className="w-10"
            onClick={() => setShow(true)}
          />
          <p className="my-0 mx-2 lh-sm" style={{ fontSize: "14px" }}>
            私はロボットではあり
            <br />
            ません
          </p>
          <div className="text-center ">
            <span className="material-symbols-outlined">cycle</span>
            <p style={{ fontSize: "10px" }} className="m-0 text-muted">
              pokeCAPTCHA
            </p>
          </div>
        </div>

        <div style={{ fontSize: "10px" }} className="text-end text-muted">
          プライバシー - 利用規約
        </div>
      </div>
      {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="p-2 text-white">
          <div className="bg-primary w-100 d-flex  p-2">
            <Modal.Title className="mx-3 my-1 lh-sm">
              <div className="fs-3 fw-bold">モクロー</div>
              <div style={{ fontSize: "16px" }}>
                の画像を全て選択してください
              </div>
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="p-2">
          <div className="d-flex justify-content-between">
            <CaptchaImage img_src="/img/rowlet.jpg" />
            <CaptchaImage img_src="/img/rowlet.jpg" className="mx-1" />
            <CaptchaImage img_src="/img/rowlet.jpg" />
          </div>
          <div className="d-flex justify-content-between my-1">
            <CaptchaImage img_src="/img/rowlet.jpg" />
            <CaptchaImage img_src="/img/rowlet.jpg" className="mx-1" />
            <CaptchaImage img_src="/img/rowlet.jpg" />
          </div>
          <div className="d-flex justify-content-between">
            <CaptchaImage img_src="/img/rowlet.jpg" />
            <CaptchaImage img_src="/img/rowlet.jpg" className="mx-1" />
            <CaptchaImage img_src="/img/rowlet.jpg" />
          </div>
          <div className="d-flex flex-wrap"></div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary">確認</button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Pokecaptcha;
