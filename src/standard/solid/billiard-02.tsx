import React from "react";
const Billiard_02: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 10.25c-.548 0-.75.346-.75.5s.202.5.75.5.75-.346.75-.5-.202-.5-.75-.5M13.763 12c.298-.327.487-.751.487-1.25 0-1.227-1.141-2-2.25-2s-2.25.773-2.25 2c0 .499.189.923.487 1.25a1.83 1.83 0 0 0-.487 1.25c0 1.227 1.141 2 2.25 2s2.25-.773 2.25-2c0-.499-.189-.923-.487-1.25M12 12.75c-.548 0-.75.346-.75.5s.202.5.75.5.75-.346.75-.5-.202-.5-.75-.5M5.75 12a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0M12 4.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Billiard_02;
