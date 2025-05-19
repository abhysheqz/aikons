import React from "react";
const AutomotiveBattery_02: React.FC<
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
        d="M2 4.75a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75zM11.804 12l2.074-3.318-1.696-1.06L8.195 14h4l-2.073 3.318 1.696 1.06L15.804 12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 3a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.25h-1.5v-2.5h-2v2.5h-1.5zM4.75 3a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v3.25h-1.5v-2.5h-2v2.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AutomotiveBattery_02;
