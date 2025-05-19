import React from "react";
const GoForwardSec_10: React.FC<
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
        d="M12.194 3.207 12 3.205a8.795 8.795 0 1 0 5.277 1.758L18.45 3.4A10.74 10.74 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c.735 0 1.454.074 2.149.215a.977.977 0 0 1 .6 1.526l-1.954 2.736-1.59-1.136z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.446 8.106A1 1 0 0 1 9.998 9v8h-2v-6l-.4.3-1.2-1.6 2-1.5a1 1 0 0 1 1.048-.094M12.998 10v5h1.5v-5zm-1-2h3.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoForwardSec_10;
