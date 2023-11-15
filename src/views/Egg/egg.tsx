import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";

export default function egg() {
  const videoRef = useRef(null);
  const [modal, contextHolder] = Modal.useModal();
  const [flag, setFlag] = useState(false);

  const config = {
    title: "是否启动原神？",
    content: null,
    centered: true,
    okText: "启动",
    cancelText: "不启动，打个胶先",
    onOk: () => {
      window.location.href =
        "https://ys.mihoyo.com/cloud/m/?utm_source=default#/";
    },
    onCancel: () => setFlag(true),
  };

  useEffect(() => {
    openModal();
  }, []);

  async function openModal() {
    await modal.confirm(config);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {contextHolder}
      {flag ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <video
            ref={videoRef}
            controls
            autoPlay
            style={{ width: "100vw", margin: "0 auto" }}
          >
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
