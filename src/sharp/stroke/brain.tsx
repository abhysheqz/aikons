import React from "react";
const Brain: React.FC<
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
        d="M10.154 20.827c0-1.636 1.151-3.81 4.361-3.81 1.573 0 2.49-.955 2.623-2.06m0 0c.162-1.08-.585-2.358-2.075-2.573m2.075 2.574c1.185.62 5.215-.09 5.003-3.941-.08-1.444-1.638-3.83-5.136-3.297M9.21 6.976c.19-1.289 1.997-3.97 5.615-2.76 1.242.578 3.368 2.43 1.813 5.357m-4.975-.907c-1.795-2.66-4.561-2.013-5.737-1.32-3.165 2.337-1.23 5.115-.825 5.652m-.81-1.568c-2.775 1.287-2.233 3.34-1.771 4.218 1.494 2.137 4.627 1.7 5.463-.489"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.971 12.145c-.51.462-1.383.542-2.129.148-.746-.395-1.127-1.137-.972-1.787"
      />
    </svg>
  );
};
export default Brain;
