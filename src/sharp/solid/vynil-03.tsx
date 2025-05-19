import React from "react";
const Vynil_03: React.FC<
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
        d="M17 2.25H3a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-2V8a1 1 0 0 1-.293.707l-1.115 1.115a6 6 0 1 1-1.067-1.762L17 7.586z"
      />
      <path
        fill="currentColor"
        d="m15.707 11.707-1.414-1.414 2.233-2.233c.45.517.813 1.112 1.067 1.762z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.443 12.167a2.29 2.29 0 0 0 1.39 1.39l-.666 1.886a4.29 4.29 0 0 1-2.61-2.61z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vynil_03;
