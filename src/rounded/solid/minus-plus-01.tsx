import React from "react";
const MinusPlus_01: React.FC<
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
        d="M12 5.75c.69 0 1.25.56 1.25 1.25v5.75H19a1.25 1.25 0 1 1 0 2.5h-5.75V21a1.25 1.25 0 1 1-2.5 0v-5.75H5a1.25 1.25 0 1 1 0-2.5h5.75V7c0-.69.56-1.25 1.25-1.25M20.25 3c0 .69-.56 1.25-1.25 1.25H5a1.25 1.25 0 1 1 0-2.5h14c.69 0 1.25.56 1.25 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlus_01;
