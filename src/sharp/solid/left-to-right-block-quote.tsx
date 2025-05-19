import React from "react";
const LeftToRightBlockQuote: React.FC<
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
        d="M16.5 7h-8V5h8zM19.5 13h-11v-2h11zM16.5 19h-8v-2h8zM4.5 21V3h2v18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightBlockQuote;
