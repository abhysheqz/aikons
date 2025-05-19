import React from "react";
const PlusSign: React.FC<
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
        d="M10.75 10.75V4h2.5v6.75H20v2.5h-6.75V20h-2.5v-6.75H4v-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusSign;
