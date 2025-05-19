import React from "react";
const VolumeMinus: React.FC<
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
        d="M16.5 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M14.86 3.342a.75.75 0 0 1 .39.658v16a.75.75 0 0 1-1.156.63L7.28 16.25H4.5a2.75 2.75 0 0 1-2.75-2.75v-3A2.75 2.75 0 0 1 4.5 7.75h2.78l6.814-4.38a.75.75 0 0 1 .765-.028"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VolumeMinus;
