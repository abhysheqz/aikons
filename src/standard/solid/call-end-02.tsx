import React from "react";
const CallEnd_02: React.FC<
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
        d="M12 11a1 1 0 0 1 1 1v4.293h2.293c.265 0 .543.097.64.344a1 1 0 0 1-.226 1.07l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-.225-1.07c.096-.247.374-.344.64-.344H11V12a1 1 0 0 1 1-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.864 7.135c5.75-5.513 14.522-5.513 20.272 0 .583.56.864 1.324.864 2.075v1.403a2 2 0 0 1-2.633 1.897l-3.454-1.152a2 2 0 0 1-1.367-1.897V5.52a12.35 12.35 0 0 0-7.091 0v3.965a2 2 0 0 1-1.377 1.9L3.624 12.52A2 2 0 0 1 1 10.62V9.21c0-.751.28-1.516.864-2.075"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallEnd_02;
