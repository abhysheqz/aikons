import React from "react";
const Heading_04: React.FC<
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
        d="M2 19V5h2v14zM12 19V5h2v14zM18 9v4h2V9h2v10h-2v-4h-4V9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 13H3v-2h10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_04;
