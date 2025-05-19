import React from "react";
const WifiDisconnected_02: React.FC<
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
        d="m13.414 16.793 1.793 1.793L13.793 20 12 18.207 10.207 20l-1.414-1.414 1.793-1.793L8.793 15l1.414-1.414L12 15.379l1.793-1.793L15.207 15z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22 7.714C18.867 5.264 15.456 4 12 4S5.133 5.263 2 7.714l1.315 1.51C6.126 7.05 9.085 6 12 6s5.874 1.05 8.685 3.224z"
      />
      <path
        fill="currentColor"
        d="m17.71 12.641 1.314-1.508c-4.108-3.527-9.75-3.496-14.046.002l1.314 1.51C9.864 9.77 14.39 9.8 17.71 12.64"
      />
    </svg>
  );
};
export default WifiDisconnected_02;
