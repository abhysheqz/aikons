import React from "react";
const AiSheets: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 21H2V3h20v9.5M2 9h20M2 15h10M8 3v18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.8 13h.4l.88 2.92 2.92.88v.4l-2.92.88L18.2 21h-.4l-.88-2.92L14 17.2v-.4l2.92-.88z"
      />
    </svg>
  );
};
export default AiSheets;
