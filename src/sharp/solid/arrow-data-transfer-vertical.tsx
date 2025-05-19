import React from "react";
const ArrowDataTransferVertical: React.FC<
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
        d="m15.964 7 2.357 1.8L19.5 7.2l-3.929-3a.97.97 0 0 0-1.028-.095C14.21 4.275 14 4.621 14 5v14h1.964zM8.036 17l-2.357-1.8L4.5 16.8l3.929 3a.97.97 0 0 0 1.028.095c.333-.17.543-.516.543-.895V5H8.036z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDataTransferVertical;
