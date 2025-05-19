import React from "react";
const Sofa_03: React.FC<
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
        d="M6 19.25V16.5h2v2.75zm10 0V16.5h2v2.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.75 13.5a2 2 0 1 0-1.732-3l-1.664 3H6.646l-1.664-3a2 2 0 1 0-1.732 3l1.5 3h14.5z"
      />
      <path
        fill="currentColor"
        d="M4.036 8.604c.773.21 1.422.72 1.813 1.395l.004.008L7.236 12.5h9.53l1.382-2.493.005-.008a3 3 0 0 1 1.813-1.395l-.776-2.07a2.75 2.75 0 0 0-2.575-1.784H7.387a2.75 2.75 0 0 0-2.575 1.784z"
      />
    </svg>
  );
};
export default Sofa_03;
