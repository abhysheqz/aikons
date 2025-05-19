import React from "react";
const AiContentGenerator_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-3c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h2c3.771 0 5.657 0 6.828 1.172S20 6.229 20 10v.5M17.407 14.404a.638.638 0 0 1 1.186 0l.037.093a5.1 5.1 0 0 0 2.873 2.873l.093.037a.638.638 0 0 1 0 1.186l-.093.037a5.1 5.1 0 0 0-2.873 2.873l-.037.093a.638.638 0 0 1-1.186 0l-.037-.093a5.1 5.1 0 0 0-2.873-2.873l-.093-.037a.638.638 0 0 1 0-1.186l.093-.037a5.1 5.1 0 0 0 2.873-2.873zM7 7h8m-8 4.5h8M7 16h4"
      />
    </svg>
  );
};
export default AiContentGenerator_01;
