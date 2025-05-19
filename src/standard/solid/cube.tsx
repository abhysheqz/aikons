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
        d="M22.5 2.914v13.172a2 2 0 0 1-.586 1.414l-4.707 4.707a1 1 0 0 1-.707.293h-14a1 1 0 0 1-1-1v-14a1 1 0 0 1 .293-.707l5-5A1 1 0 0 1 7.5 1.5h13.586l-6.793 6.793a1 1 0 0 0-.16.207H3.5v10.586l4-4V10.5a1 1 0 0 1 2 0v4H14a1 1 0 1 1 0 2H8.914l-4 4H15.5V9.866q.112-.064.207-.159z"
      />
    </svg>
  );
};
export default Cube;
