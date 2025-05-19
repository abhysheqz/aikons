import React from "react";
const AiEditing: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.8 2h.4l.88 2.92L11 5.8v.4l-2.92.88L7.2 10h-.4l-.88-2.92L3 6.2v-.4l2.92-.88z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m13.904 9.642 1.483 1.483M5.5 22.001h3.955L21 10.455l-3.955-3.954L5.5 18.046z"
      />
    </svg>
  );
};
export default AiEditing;
