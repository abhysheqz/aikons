import React from "react";
const MessageSearch_01: React.FC<
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
        d="M7.456 14.982h8.928M7.456 9.99h5.456M20.12 7.263 21.84 8.99m-.822-3.909A3.07 3.07 0 0 0 17.958 2a3.07 3.07 0 0 0-3.062 3.081 3.07 3.07 0 0 0 3.062 3.082c1.69 0 3.06-1.38 3.06-3.082Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.756 3.01c-7.371.66-9.918 9.53-6.14 14.965l-1.604 3.862c-.033.08-.003.185.077.156l4.354-1.524c2.102 1.368 8.205 1.577 10.71.138 2.532-1.455 5.254-4.08 4.64-9.709M9.757 3.011q.24-.014.483-.014m-.483.014h2.93"
      />
    </svg>
  );
};
export default MessageSearch_01;
