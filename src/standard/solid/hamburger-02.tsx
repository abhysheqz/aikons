import React from "react";
const Hamburger_02: React.FC<
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
        d="M1.25 13A2.75 2.75 0 0 1 4 10.25h2a.75.75 0 0 1 .53.22L9 12.94l2.47-2.47a.75.75 0 0 1 .53-.22h8a2.75 2.75 0 1 1 0 5.5h-8a.75.75 0 0 1 0-1.5h8a1.25 1.25 0 1 0 0-2.5h-7.69l-2.78 2.78a.75.75 0 0 1-1.06 0l-2.78-2.78H4a1.25 1.25 0 1 0 0 2.5h2a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 13"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 15a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 .53.22l1.763 1.762c.333.334.5.5.707.5s.374-.166.707-.5l1.763-1.762a.75.75 0 0 1 .53-.22h8.5a.75.75 0 0 1 .75.75 5.75 5.75 0 0 1-5.75 5.75h-7A5.75 5.75 0 0 1 2.75 15"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 10A6.75 6.75 0 0 1 9.5 3.25h5A6.75 6.75 0 0 1 21.25 10v1.063a.75.75 0 0 1-.937.726q-.15-.038-.313-.039h-7.69l-2.78 2.78a.75.75 0 0 1-1.06 0l-2.78-2.78H4q-.165 0-.313.04a.75.75 0 0 1-.937-.727zM8 8a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m6.53.53 1-1a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hamburger_02;
