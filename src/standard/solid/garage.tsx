import React from "react";
const Garage: React.FC<
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
        d="M10.75 1.932a2.25 2.25 0 0 1 2.499-.001l7.499 5a2.25 2.25 0 0 1 1.002 1.871V21A1.75 1.75 0 0 1 20 22.75h-2.25V14A1.75 1.75 0 0 0 16 12.25H8A1.75 1.75 0 0 0 6.25 14v8.75H3.999a1.75 1.75 0 0 1-1.75-1.753L2.264 8.8a2.25 2.25 0 0 1 1-1.868zm5.5 17.818v3h-8.5v-3zm-8.25-6a.25.25 0 0 0-.25.25v1.25h8.5V14a.25.25 0 0 0-.25-.25zm8.25 4.5v-1.5h-8.5v1.5zM12 6.022a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Garage;
