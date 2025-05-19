import React from "react";
const Mouse_15: React.FC<
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
        d="M6 1.25a.75.75 0 0 1 .75.75v.5c0 .138.112.25.25.25h4c.966 0 1.75.784 1.75 1.75V6a.75.75 0 0 1-1.5 0V4.5a.25.25 0 0 0-.25-.25H7A1.75 1.75 0 0 1 5.25 2.5V2A.75.75 0 0 1 6 1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.25c-2.797 0-4.681.986-5.823 2.685C5.077 9.574 4.75 11.758 4.75 14s.326 4.426 1.427 6.065C7.32 21.764 9.203 22.75 12 22.75s4.681-.986 5.823-2.685c1.1-1.639 1.427-3.823 1.427-6.065s-.326-4.426-1.427-6.065C16.68 6.236 14.797 5.25 12 5.25m1 3.25a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_15;
