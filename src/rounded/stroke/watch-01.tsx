import React from "react";
const Watch_01: React.FC<
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
      <circle cx={12} cy={12} r={7} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16 6-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a2 2 0 0 0-.165-.129C14.07 2 13.38 2 12 2s-2.069 0-2.585.361q-.086.06-.165.129c-.476.413-.643 1.082-.978 2.42L8 6M8 18l.272 1.09c.335 1.338.502 2.007.978 2.42q.08.069.165.129C9.93 22 10.62 22 12 22s2.069 0 2.585-.361q.085-.06.165-.129c.476-.413.643-1.082.978-2.42L16 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10v2.005L13 13"
      />
    </svg>
  );
};
export default Watch_01;
