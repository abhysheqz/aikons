import React from "react";
const ListView: React.FC<
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
        d="M1.25 1.25h21.5v5.5H1.25zM1.25 9.25h21.5v5.5H1.25zM1.25 17.25h21.5v5.5H1.25z"
      />
    </svg>
  );
};
export default ListView;
