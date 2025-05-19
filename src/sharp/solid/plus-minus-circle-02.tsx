import React from "react";
const PlusMinusCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.396 6.896v1.5h-1.5v2h1.5v1.5h2v-1.5h1.5v-2h-1.5v-1.5zm.708 10.208 8-8-1.415-1.415-8 8zm7.793-3.207h-3.5v2h3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinusCircle_02;
