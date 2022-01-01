import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({show, onClose, children })
{
    const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() =>
    {
        setIsBrowser(true);
    }, []);


    const closeModal = (e) =>
    {
        e.preventDefault();
        onclose();
    }

    const modalContent = show ? (
        <>
            <div>
                <a href="#" onClick={closeModal}>X</a>
                <h5>Hello from the opened the Modal</h5>
                <div>
                    {children}
                </div>
            </div>
        </>
    ) : null;
    if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      }
}

export default Modal;