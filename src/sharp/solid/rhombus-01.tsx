import React from "react";
const Rhombus_01: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .53.22l10 10a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-10-10a.75.75 0 0 1 0-1.06l10-10a.75.75 0 0 1 .53-.22"
      />
    </svg>
  );
};
export default Rhombus_01;
