import React from "react";
const Kickstarter_01: React.FC<
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
        d="M14.531 3.411a2.75 2.75 0 0 1 3.769-.699l1.222.816a2.75 2.75 0 0 1 .787 3.774 1 1 0 0 1-.05.07L16.464 12l3.794 4.63a1 1 0 0 1 .05.07 2.75 2.75 0 0 1-.787 3.775l-1.222.816a2.75 2.75 0 0 1-3.769-.7l-3.784-4.525V19a2.75 2.75 0 0 1-2.749 2.75h-2a2.75 2.75 0 0 1-2.748-2.749L3.246 5.005a2.75 2.75 0 0 1 2.749-2.75h2.003a2.75 2.75 0 0 1 2.75 2.75v2.93z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kickstarter_01;
