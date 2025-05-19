import React from "react";
const Blender: React.FC<
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
        d="M16.025 2h-6.013M6.003 22h14.032l-2.002-5H8.009zM18.032 8h-4.01m3.508 3h-3.508m3.508 3h-3.508"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.021 4.484h10.01m-10.01 0H4.133a.1.1 0 0 0-.098.118l.962 5.381 3.024 2.014m0-7.513v7.513m10.01-7.513-.09 12.284m.09-12.284h1.994M8.087 16.768l-.066-4.771"
      />
    </svg>
  );
};
export default Blender;
