import React from "react";
const NThRoot: React.FC<
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
        d="M11.755 6.694A1 1 0 0 1 12.707 6H22v2h-8.564L9.159 21.306a1 1 0 0 1-1.816.198l-2.846-4.88-1.083 1.083L2 16.293l2-2a1 1 0 0 1 1.57.203l2.371 4.063zM4 2.343V2H2v7h2V5.571C4 4.677 4.698 4 5.5 4S7 4.677 7 5.571V9h2V5.571C9 3.626 7.46 2 5.5 2c-.54 0-1.047.123-1.5.343"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NThRoot;
