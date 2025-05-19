import React from "react";
const Sad_02: React.FC<
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
        d="m4.271 14-2.16 2.083a2.835 2.835 0 0 0 .02 4.088c1.18 1.118 3.08 1.099 4.241-.02a2.82 2.82 0 0 0 0-4.088z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 .975.13 1.919.373 2.816l2.657-2.56 2.964 2.912a4.07 4.07 0 0 1-.004 5.883 4 4 0 0 1-.432.364c1.539.85 3.309 1.335 5.192 1.335 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25M6.75 8.442c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 0 1 0 2.5H8c-.69 0-1.25-.56-1.25-1.25m7.991 0c0-.69.56-1.25 1.25-1.25H16a1.25 1.25 0 1 1 0 2.5h-.009c-.69 0-1.25-.56-1.25-1.25m-2.742 5.808c-1.046 0-2.03.28-2.876.77l.751 1.298A4.2 4.2 0 0 1 12 15.75c.957 0 1.839.316 2.55.85l.9-1.2A5.73 5.73 0 0 0 12 14.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sad_02;
