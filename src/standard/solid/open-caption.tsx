import React from "react";
const OpenCaption: React.FC<
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
        d="M4 2.125a2.75 2.75 0 0 0-2.75 2.75v11A2.75 2.75 0 0 0 4 18.625h16a2.75 2.75 0 0 0 2.75-2.75v-11A2.75 2.75 0 0 0 20 2.125zm4 4.25a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.5a1 1 0 1 0 0-2H8v-4h2.5a1 1 0 1 0 0-2zm6.5 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2H17a1 1 0 1 0 0-2h-2.5v-4H17a1 1 0 1 0 0-2zM1.5 20.875a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OpenCaption;
