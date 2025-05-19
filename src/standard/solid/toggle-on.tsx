import React from "react";
const ToggleOn: React.FC<
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
        d="M6 5.25A4.75 4.75 0 0 0 1.25 10v4A4.75 4.75 0 0 0 6 18.75h12A4.75 4.75 0 0 0 22.75 14v-4A4.75 4.75 0 0 0 18 5.25zm9 3A2.75 2.75 0 0 0 12.25 11v2A2.75 2.75 0 0 0 15 15.75h2A2.75 2.75 0 0 0 19.75 13v-2A2.75 2.75 0 0 0 17 8.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ToggleOn;
