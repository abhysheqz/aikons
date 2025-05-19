import React from "react";
const InsertColumnRight: React.FC<
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
        d="M5.5 1.75h2.75v6h-6.5V5.5A3.75 3.75 0 0 1 5.5 1.75m-3.75 13v-5.5h6.5v5.5zm0 1.5v2.25a3.75 3.75 0 0 0 3.75 3.75h2.75v-6zm16.75 6H9.75V1.75h8.75a3.75 3.75 0 0 1 3.75 3.75v4.318l-2.409-2.409a2.25 2.25 0 0 0-3.713 2.341H13.25a2.25 2.25 0 0 0 0 4.5h2.878a2.25 2.25 0 0 0 3.713 2.341l2.409-2.409V18.5a3.75 3.75 0 0 1-3.75 3.75m.457-13.957a1 1 0 1 0-1.414 1.414L18.836 11H13.25a1 1 0 1 0 0 2h5.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InsertColumnRight;
