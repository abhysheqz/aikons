import React from "react";
const Honey_02: React.FC<
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
        d="M9.5.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V1A.75.75 0 0 1 9.5.25m-2.052 1a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.698V2a.75.75 0 0 1 .75-.75m4.052 0a.75.75 0 0 1 .75.75v.75H20a.75.75 0 0 1 0 1.5h-7.75V5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.25 9A.75.75 0 0 1 4 8.25h12a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 8.25a.75.75 0 0 0-.64.358l-2.5 4.084a.75.75 0 0 0-.11.391V21A2.75 2.75 0 0 0 6 23.75h8A2.75 2.75 0 0 0 16.75 21v-7.917a.75.75 0 0 0-.11-.391l-2.5-4.084a.75.75 0 0 0-.64-.358zm-1.75 5.045L6.92 9.75h6.16l2.17 3.545v.955h-6.5V18a.75.75 0 0 1-1.5 0v-3.75h-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Honey_02;
