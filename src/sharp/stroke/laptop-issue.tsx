import React from "react";
const LaptopIssue: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22.5 20.5h-21l2-4h17zM20.5 16.5v-13h-17v13M12 13h.009M12 10.5V7"
      />
    </svg>
  );
};
export default LaptopIssue;
