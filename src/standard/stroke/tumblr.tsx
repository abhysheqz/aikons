import React from "react";
const Tumblr: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2h-3.497C9.916 5.876 7.286 7.091 6 7.533V11h3l.034 5.137c0 1.793.468 2.712.824 3.312 2.104 3.556 6.43 2.688 8.142 1.59l-1.006-3.365C14.78 18.34 14 17.5 14 16.5V11h3.5V7.594H14z"
      />
    </svg>
  );
};
export default Tumblr;
