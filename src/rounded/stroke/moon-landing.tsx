import React from "react";
const MoonLanding: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 12c-4.535 0-8.37 2.964-9.643 7.044-.36 1.158-.541 1.737-.087 2.346.453.61 1.191.61 2.667.61h14.126c1.476 0 2.214 0 2.667-.61.454-.61.273-1.188-.088-2.346C20.371 14.964 16.536 12 12 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 22a3 3 0 1 0-6 0M12 12V7.5m0 0V5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h2.25c1.173 0 1.76 0 2.163.31a1.5 1.5 0 0 1 .277.277c.31.404.31.99.31 2.163s0 1.76-.31 2.163a1.5 1.5 0 0 1-.277.277c-.404.31-.99.31-2.163.31z"
      />
    </svg>
  );
};
export default MoonLanding;
