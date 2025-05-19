import React from "react";
const Forrst: React.FC<
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
        d="M12.656 2.636a.75.75 0 0 0-1.312 0l-10 18A.75.75 0 0 0 2 21.75h8.25v-3.96l-2.647-1.654.795-1.272 1.852 1.157V12.75h3.5v1.387l1.379-.788.744 1.302-2.123 1.213v2.068l2.334-1.556.832 1.248-3.166 2.11v2.016H22a.75.75 0 0 0 .656-1.114z"
      />
    </svg>
  );
};
export default Forrst;
