import React from "react";
const WebValidation: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v6a1 1 0 1 1-2 0V8.75H3v9.249a1 1 0 0 0 1 1L9.126 19a1 1 0 1 1 0 2L4 20.999a3 3 0 0 1-3-3zm3.992 1a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1m5-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.576 4.73a.75.75 0 0 0-1.152-.96l-1.974 2.369-.92-.92a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 0 0 1.106-.05z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebValidation;
