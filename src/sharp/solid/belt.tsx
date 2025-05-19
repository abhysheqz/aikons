import React from "react";
const Belt: React.FC<
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
        d="M6 6a1 1 0 0 1 1-1h3a7 7 0 1 1 0 14H7a1 1 0 0 1-1-1zm2 1v10h2a5 5 0 0 0 0-10z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 13H7v-2h4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 6.75h6.5V11H4v2h3.75v4.25h-6.5zm12 0h9.5v10.5h-9.5l3-5.25zM21.009 11H19v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Belt;
