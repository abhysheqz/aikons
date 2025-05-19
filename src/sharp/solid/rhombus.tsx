import React from "react";
const Rhombus: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .557.248l9 10a.75.75 0 0 1 0 1.004l-9 10a.75.75 0 0 1-1.114 0l-9-10a.75.75 0 0 1 0-1.004l9-10A.75.75 0 0 1 12 1.25"
      />
    </svg>
  );
};
export default Rhombus;
