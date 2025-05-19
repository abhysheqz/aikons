import React from "react";
const CheckUnread_04: React.FC<
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
        d="M2.793 4.293a1 1 0 0 1 1.414 0l9.696 9.696.004.004 4.3 4.3a1 1 0 0 1-1.414 1.414l-3.579-3.579-1.49 1.563a1 1 0 0 1-1.431.016l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.776 2.776.817-.855-9.007-9.007a1 1 0 0 1 0-1.414m14.398.984a1 1 0 0 1 .032 1.413l-3.5 3.667a1 1 0 0 1-1.446-1.38l3.5-3.667a1 1 0 0 1 1.414-.033M1.793 12.793a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 1 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414m20.43-6.103a1 1 0 0 0-1.446-1.38l-6 6.285a1 1 0 0 0 1.446 1.381z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckUnread_04;
