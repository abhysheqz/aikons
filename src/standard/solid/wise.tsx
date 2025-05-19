import React from "react";
const Wise: React.FC<
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
        d="m16.337 11.35 3.586-8.965A1.01 1.01 0 0 0 18.985 1H7.017a1.01 1.01 0 0 0-.883 1.5l2.125 3.826-3.95 3.95c-.636.636-.185 1.724.715 1.724h8.899l-3.852 9.629a1 1 0 0 0 1.857.742l4.392-10.978z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wise;
