import React from "react";
const CrownPlus: React.FC<
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
        d="M19.5 1.25v2.5H22v2h-2.5v2.5h-2v-2.5H15v-2h2.5v-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.768 11.645 12 4.25l-4.768 7.395-5.982-3.54L4.42 19.75h15.16l3.17-11.645zM19.5 22.75v-2h-15v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CrownPlus;
