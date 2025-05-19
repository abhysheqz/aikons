import React from "react";
const Wanted: React.FC<
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
        d="M21.637 1.606A.75.75 0 0 0 21 1.25H3.75v4.96l1.392 2.298L3.75 10.79v7.075l-1.451 3.873A.75.75 0 0 0 3 22.75h17.25V5.177l1.42-2.842a.75.75 0 0 0-.033-.73M8.25 17.25h7.5v1.5h-7.5zm1.5-9.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 10.75a3.75 3.75 0 0 0-3.75 3.75v.75h7.5v-.75A3.75 3.75 0 0 0 12 10.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wanted;
