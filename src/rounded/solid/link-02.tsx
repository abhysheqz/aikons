import React from "react";
const Link_02: React.FC<
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
        d="M15.207 8.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.293 3.837a6.272 6.272 0 0 1 8.87 8.87l-2.456 2.456a1 1 0 0 1-1.414-1.414l2.456-2.456a4.272 4.272 0 1 0-6.042-6.042l-2.456 2.456a1 1 0 0 1-1.414-1.414zm-3.586 5a1 1 0 0 1 0 1.414l-2.456 2.456a4.272 4.272 0 1 0 6.042 6.042l2.456-2.456a1 1 0 0 1 1.414 1.414l-2.456 2.456a6.272 6.272 0 1 1-8.87-8.87l2.456-2.456a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_02;
