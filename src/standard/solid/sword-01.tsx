import React from "react";
const Sword_01: React.FC<
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
        d="M22.03 1.97a.75.75 0 0 1 .205.677l-1 5a.75.75 0 0 1-.273.444l-10.69 8.366.85.85A3 3 0 0 1 12 19.43V20a1 1 0 1 1-2 0v-.572a1 1 0 0 0-.293-.707L8.2 17.214l-3.062 3.062c.18.341.297.706.351 1.079a1 1 0 0 1-1.978.29 1.36 1.36 0 0 0-.388-.768 1.36 1.36 0 0 0-.769-.387 1 1 0 0 1 .292-1.98c.372.056.737.173 1.078.352L6.786 15.8l-1.507-1.507A1 1 0 0 0 4.572 14H4a1 1 0 0 1 0-2h.572a3 3 0 0 1 2.12.879l.85.85L15.91 3.037a.75.75 0 0 1 .444-.273l5-1a.75.75 0 0 1 .677.205"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sword_01;
