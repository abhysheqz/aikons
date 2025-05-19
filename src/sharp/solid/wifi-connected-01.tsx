import React from "react";
const WifiConnected_01: React.FC<
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
        d="m22.75 15.543-6.707 6.707-2.707-2.707 1.414-1.414 1.293 1.293 5.293-5.293z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.464 6.177A14.7 14.7 0 0 1 12 1.75c4.127 0 7.86 1.696 10.536 4.427a.75.75 0 0 1 .071.965l-1.355 1.87A14.7 14.7 0 0 0 12 5.75a14.7 14.7 0 0 0-9.252 3.262l-1.355-1.87a.75.75 0 0 1 .071-.965"
      />
      <path
        fill="currentColor"
        d="M12 7.25c3.175 0 6.088 1.116 8.37 2.978l-1.576 2.176A14.7 14.7 0 0 0 12 10.75c-2.45 0-4.76.597-6.793 1.654l-1.578-2.176A13.2 13.2 0 0 1 12 7.25"
      />
      <path
        fill="currentColor"
        d="M17.903 13.633A13.2 13.2 0 0 0 12 12.25c-2.12 0-4.125.498-5.902 1.384l1.926 2.658A14.8 14.8 0 0 1 12 15.75c1.378 0 2.711.189 3.976.542zM13.432 17.326a13.4 13.4 0 0 0-4.462.272l2.423 3.342a.75.75 0 0 0 1.214 0l.002-.003-1.394-1.394z"
      />
    </svg>
  );
};
export default WifiConnected_01;
