import React from "react";
const PlugSocket: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.5 4.5 2-2M2.5 21.5l2-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.76 17 7 11.24l-2.88 2.88-.36 3.96 2.16 2.16 3.96-.36zM11.24 7 17 12.76l2.88-2.88.36-3.96-2.16-2.16-3.96.36z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 12.5 2-2m1 5 2-2"
      />
    </svg>
  );
};
export default PlugSocket;
