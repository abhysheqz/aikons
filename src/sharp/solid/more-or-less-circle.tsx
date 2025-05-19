import React from "react";
const MoreOrLessCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.294 6.293l-2.001 2A1 1 0 0 0 7 10h10V8H9.416l.293-.293zM7.001 13h10v-2H7zm10 1H7v2h7.585l-.293.293 1.414 1.415 2-2A1 1 0 0 0 17.002 14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreOrLessCircle;
