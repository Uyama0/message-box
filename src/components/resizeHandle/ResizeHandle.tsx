import { PanelResizeHandle } from "react-resizable-panels";

import styles from "./resizeHandle.module.css";

export default function ResizeHandle({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      className={[styles.ResizeHandleOuter, className].join(" ")}
      id={id}
    >
      <div>
        <svg
          className={styles.ResizeHandleInner}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12h6" />
          <path d="M22 12h-6" />
          <path d="M12 2v2" />
          <path d="M12 8v2" />
          <path d="M12 14v2" />
          <path d="M12 20v2" />
          <path d="m19 9-3 3 3 3" />
          <path d="m5 15 3-3-3-3" />
        </svg>
      </div>
    </PanelResizeHandle>
  );
}
