import React from "react";
const IdNotVerified: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.5 17 1 1m0 0 1 1m-1-1 1-1m-1 1-1 1m5-1a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.5 18c.917-.977 2.223-1.488 3.531-1.5M13 12c0 1.105-.881 2-1.969 2-1.087 0-1.968-.895-1.968-2s.881-2 1.968-2C12.12 10 13 10.895 13 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 22h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4m5 0h4a2 2 0 0 1 2 2v5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.43 5.438-.182-1.453a2.266 2.266 0 0 0-4.496 0L8.57 5.438A.5.5 0 0 0 9.066 6h3.868a.5.5 0 0 0 .496-.562"
      />
    </svg>
  );
};
export default IdNotVerified;
