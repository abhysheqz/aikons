import React from "react";
const Presentation_07: React.FC<
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
        d="M2.25 3.75A.75.75 0 0 1 3 3h18a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.75v-2h2v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 20.694v1.556h2v-1.556h.98l1.187 1.556 1.583-1.167-1.484-1.944a1 1 0 0 0-.792-.389H13v-2h-2v2H9.526a1 1 0 0 0-.792.389L7.25 21.083l1.583 1.167 1.188-1.556z"
      />
    </svg>
  );
};
export default Presentation_07;
