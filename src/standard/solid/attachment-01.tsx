import React from "react";
const Attachment_01: React.FC<
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
        d="M9.749 4.986A3.368 3.368 0 1 0 4.986 9.75l1.544 1.544a1 1 0 1 1-1.414 1.414l-1.544-1.544a5.368 5.368 0 0 1 7.591-7.59l9.265 9.264a5.368 5.368 0 0 1-7.591 7.59l-3.474-3.474a3.73 3.73 0 0 1 5.274-5.274l1.93 1.93a1 1 0 0 1-1.414 1.414l-1.93-1.93a1.73 1.73 0 0 0-2.446 2.446l3.474 3.475a3.368 3.368 0 0 0 4.763-4.763z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Attachment_01;
