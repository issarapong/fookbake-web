import { createPortal } from "react-dom";

export default function Modal({ title, children, width = 27, open, onClose }) {
  return createPortal(
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
          <div className="fixed inset-0 z-30" onMouseUp={onclose}>
            <div className="flex justify-center items-center min-h-full">
              <div
                style={{ maxWidth: `${width}rem` }}
                className="bg-white rounded-md shadow-[0_0_15px_rbg(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between p-4 border-b text-xl">
                  <div className="invisible">&#10005;</div>
                  <div className="font-bold">{title}</div>
                  <div
                    className="text-gray-500 font-semibold hover:text-gray-600"
                    role="button"
                    onClick={onClose}
                  >
                    &#10005;
                  </div>
                </div>
                <div className="p-4 overflow-auto">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal")
  );
}