import React from "react";
const MessageUpload_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.924 12.5h.009m3.959 0h.008m-7.943 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.901 5 2.979-3 2.979 3m-2.979 5V2.633M21.912 12.28c.114 5.314-3.034 7.389-4.996 8.456-2.155 1.173-8.196 1.282-10.49-.207L2.06 21.992c-.075.03-.066.006-.037-.069l1.603-3.872C.321 13.447 1.57 4.277 9.337 2.995h4.721"
      />
    </svg>
  );
};
export default MessageUpload_02;
