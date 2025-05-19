import React from "react";
const Router: React.FC<
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
        d="M22 12H2v10h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.5 9h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 3.952C15.848 2.746 14.257 2 12.5 2S9.152 2.746 8 3.952m2.25 2.356a3.1 3.1 0 0 1 2.25-.976c.879 0 1.674.373 2.25.976"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 17h.009M14 17h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 17h6"
      />
    </svg>
  );
};
export default Router;
