import React from "react";
const IdVerified: React.FC<
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
        strokeWidth={1.5}
        d="M7.5 18c.917-.977 2.223-1.488 3.531-1.5M13 12c0 1.105-.881 2-1.969 2-1.087 0-1.968-.895-1.968-2s.881-2 1.968-2C12.12 10 13 10.895 13 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22H2.5V4h6m5 0h6v8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 2H9L8 6h6z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.738 17.735 1.279 1.273 2.319-2.33M21.5 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
};
export default IdVerified;
