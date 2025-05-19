import React from "react";
const ComputerPhoneSync: React.FC<
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
        d="M12 17H2V3h20v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 11v10h6V11zM10 21H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m-2 4h2.5v-4H12m0 0v4"
      />
    </svg>
  );
};
export default ComputerPhoneSync;
