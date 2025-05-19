import React from "react";
const Relieved_02: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 9c.21.583.775 1 1.44 1s1.229-.417 1.438-1m4.244 0c.21.583.774 1 1.439 1 .664 0 1.23-.417 1.439-1M12 17.5c-2 0-4-1.5-4.5-3.5"
      />
    </svg>
  );
};
export default Relieved_02;
