import React from "react";
const ElectricTower_02: React.FC<
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
        d="M3.492 22.75h17.016l-4.95-16.5H8.442zm2.016-1.5 4.05-13.5h4.884l4.05 13.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 21.25h21.5v1.5H1.25zM8.728 1.25h6.544l6.478 5.399V9.75h-1.5v-2H3.75v2h-1.5V6.649zm-3.656 5H8.25V3.601zm4.678-3.5v3.5h4.5v-3.5zm6 .851 3.178 2.649H15.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.766 8.473-9.146 5.38a.75.75 0 0 0 .056 1.324L18.853 21l.647-1.353-10.905-5.215 7.932-4.666z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8.234 8.473 9.146 5.38a.75.75 0 0 1-.056 1.324L5.147 21 4.5 19.647l10.905-5.215-7.932-4.666z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricTower_02;
