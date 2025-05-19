import React from "react";
const AiCloud_01: React.FC<
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
        strokeWidth={1.5}
        d="M17.478 8h.022a4.5 4.5 0 0 1 2.5 8.242M17.478 8q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 8a5.5 5.5 0 0 1-.578 2M6.52 7.023a5 5 0 0 0-2.168 9.22m2.168-9.22Q6.757 7 7 7c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 14H9v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 20v2m3-2v2m-3-10v2m3-2v2M9 15.5H7m2 3H7m10-3h-2m2 3h-2"
      />
    </svg>
  );
};
export default AiCloud_01;
