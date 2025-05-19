import React from "react";
const CloudAngledRain: React.FC<
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
        d="m6.105 16.856 1-2 1.79.894-1 2zm4.5 0 1-2 1.79.894-1 2zm4.5 0 1-2 1.79.894-1 2zm-8 4 1-2 1.79.894-1 2zm4.5 0 1-2 1.79.894-1 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 7.365A5.752 5.752 0 0 0 3.631 17.66l2.804-4.817 3.6 1.8.9-1.8 3.6 1.8.9-1.8 4.472 2.236-1.82 3.639a5.25 5.25 0 0 0 .16-10.415 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudAngledRain;
