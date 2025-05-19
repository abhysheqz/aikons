import React from "react";
const VolumeUp: React.FC<
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
        d="M14.36 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.156.63L6.78 16.25H4a2.75 2.75 0 0 1-2.75-2.75v-3A2.75 2.75 0 0 1 4 7.75h2.78l6.814-4.38a.75.75 0 0 1 .765-.028M19.5 8.5a1 1 0 0 1 1 1V11H22a1 1 0 1 1 0 2h-1.5v1.5a1 1 0 1 1-2 0V13H17a1 1 0 1 1 0-2h1.5V9.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VolumeUp;
