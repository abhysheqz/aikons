import React from "react";
const MouseLeftClick_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 2v4m0 4v2M5 2C3.945 3.132 3.235 4.501 3 6M15 6h-3v4h3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.24 17.089c.19 2.391 2.084 4.422 4.525 4.723.898.11 1.81.188 2.735.188s1.837-.078 2.735-.188c2.44-.301 4.334-2.332 4.524-4.723.132-1.657.241-3.357.241-5.089s-.11-3.432-.24-5.089c-.19-2.391-2.084-4.422-4.525-4.723C15.337 2.078 14.425 2 13.5 2s-1.837.078-2.735.188c-2.44.3-4.335 2.332-4.524 4.723C6.109 8.568 6 10.268 6 12s.109 3.432.24 5.089Z"
      />
    </svg>
  );
};
export default MouseLeftClick_01;
