import React from "react";
const CheeseCake_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 7c.933.424 1.5.982 1.5 1.592C18 9.922 15.314 11 12 11S6 9.922 6 8.592c0-.61.566-1.168 1.5-1.592M6 13c0 1.105 2.686 2 6 2s6-.895 6-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 9v8c0 1.105-2.686 2-6 2s-6-.895-6-2V9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 16c.95.601 1.5 1.31 1.5 2.07C22 20.24 17.523 22 12 22S2 20.24 2 18.07c0-.76.55-1.469 1.5-2.07M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0c0-.5.4-1.6 2-2"
      />
    </svg>
  );
};
export default CheeseCake_02;
