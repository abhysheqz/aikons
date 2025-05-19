import React from "react";
const Heading_01: React.FC<
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
        d="M2.75 19V5h2v14zM12.75 19V5h2v14zM18.336 9h1.914v8h1v2h-4v-2h1v-5.086l-.293.293-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 13h-10v-2h10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_01;
