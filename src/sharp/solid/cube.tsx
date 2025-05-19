import React from "react";
const Cube: React.FC<
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
        d="M21.085 1.5H7.5a1 1 0 0 0-.707.293l-5 5A1 1 0 0 0 1.5 7.5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 .707-.293l5-5a1 1 0 0 0 .293-.707V2.913l-7 7V20.5H4.914l4-4H14v-2H9.5v-4h-2v4.586l-4 4V8.5h10.585z"
      />
    </svg>
  );
};
export default Cube;
