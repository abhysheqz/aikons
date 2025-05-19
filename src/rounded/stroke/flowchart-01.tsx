import React from "react";
const Flowchart_01: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.028 13.375c.648-.648.972-.972.972-1.375s-.324-.727-.972-1.375l-.653-.653C12.727 9.324 12.403 9 12 9s-.727.324-1.375.972l-.653.653C9.324 11.273 9 11.597 9 12s.324.727.972 1.375l.653.653c.648.648.972.972 1.375.972s.727-.324 1.375-.972zM8 4c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2ZM8 20c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 12H8c-1.886 0-2.828 0-3.414-.586S4 9.886 4 8s0-2.828.586-3.414S6.114 4 8 4M15.5 12h.5c1.886 0 2.828 0 3.414.586S20 14.114 20 16s0 2.828-.586 3.414S17.886 20 16 20M12 8.5V6m0 9.5V18"
      />
    </svg>
  );
};
export default Flowchart_01;
