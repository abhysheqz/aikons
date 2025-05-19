import React from "react";
const Unlink_02: React.FC<
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
        d="M11.293 3.837a6.272 6.272 0 0 1 8.87 8.87l-2.456 2.456a1 1 0 1 1-1.414-1.414l2.456-2.456a4.272 4.272 0 1 0-6.042-6.042l-2.456 2.456a1 1 0 0 1-1.414-1.414zm-3.586 5a1 1 0 0 1 0 1.414l-2.456 2.456a4.272 4.272 0 1 0 6.042 6.042l2.456-2.456a1 1 0 0 1 1.414 1.414l-2.456 2.456a6.272 6.272 0 1 1-8.87-8.87l2.456-2.456a1 1 0 0 1 1.414 0M18.921 17a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-2.079a1 1 0 0 1-1-1M17 18.921a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-2.079a1 1 0 0 1 1-1M7 1a1 1 0 0 1 1 1v2.079a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M1 7a1 1 0 0 1 1-1h2.079a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unlink_02;
