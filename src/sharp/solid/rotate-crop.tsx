import React from "react";
const RotateCrop: React.FC<
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
        d="M8 20.917c-2.84-.475-5-2.94-5-5.917H1c0 4.422 3.578 8 8 8h1v-3.5H8zM16 3.083c2.84.475 5 2.94 5 5.917h2c0-4.422-3.578-8-8-8h-1v3.5h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 16V4H6v13a1 1 0 0 0 1 1h13v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 7a1 1 0 0 0-1-1H4v2h12v12h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateCrop;
