import React from "react";
const Share_03: React.FC<
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
        d="m12 2.25 5.414 5.414L16 9.078l-3-3V16h-2V6.078l-3 3-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 10.25h-6.5v11.5h17.5v-11.5h-6.5v6.998h-4.5z"
      />
    </svg>
  );
};
export default Share_03;
