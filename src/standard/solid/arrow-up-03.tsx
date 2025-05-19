import React from "react";
const ArrowUp_03: React.FC<
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
        d="M5 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.397 7.082a1 1 0 0 0-1.104.21l-4 4a1 1 0 1 0 1.414 1.415L11 10.414V20a1 1 0 1 0 2 0v-9.586l2.293 2.293a1 1 0 0 0 1.414-1.414l-3.995-3.995a1 1 0 0 0-.315-.216"
      />
    </svg>
  );
};
export default ArrowUp_03;
