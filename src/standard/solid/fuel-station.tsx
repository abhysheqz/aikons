import React from "react";
const FuelStation: React.FC<
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
        d="M6 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3zm0 2a1 1 0 0 0-1 1v4h10V5a1 1 0 0 0-1-1zm4.858 9.515a1 1 0 0 0-1.715-1.03l-1.5 2.5A1 1 0 0 0 8.5 16.5h1.234l-.591.985a1 1 0 1 0 1.714 1.03l1.5-2.5A1 1 0 0 0 11.5 14.5h-1.234z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 21a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M19 5h.882a2 2 0 0 1 1.789 1.106l1.223 2.447c.07.139.106.292.106.447v7.5a2.5 2.5 0 0 1-5 0V15h-2a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v2.5a.5.5 0 1 0 1 0V9.236L19.882 7H19a1 1 0 0 1 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FuelStation;
