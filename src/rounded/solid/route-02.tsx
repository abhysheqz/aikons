import React from "react";
const Route_02: React.FC<
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
        d="M18 1.25c-1.863 0-3.64 1.114-4.385 2.879-.699 1.652-.31 3.069.457 4.242.614.94 1.51 1.778 2.277 2.496l.415.39.002.002a1.794 1.794 0 0 0 2.469 0q.188-.178.393-.368c.775-.723 1.683-1.569 2.303-2.52.765-1.174 1.153-2.592.456-4.242C21.64 2.364 19.864 1.25 18 1.25m-.008 3c-.962 0-1.742.784-1.742 1.75s.78 1.75 1.742 1.75h.016c.962 0 1.742-.784 1.742-1.75s-.78-1.75-1.742-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 10c0-2.348 2.165-4 4.5-4H11a1 1 0 1 1 0 2H9.5C7.97 8 7 9.034 7 10s.97 2 2.5 2h3c2.335 0 4.5 1.652 4.5 4s-2.165 4-4.5 4H11a1 1 0 1 1 0-2h1.5c1.53 0 2.5-1.035 2.5-2s-.97-2-2.5-2h-3C7.165 14 5 12.348 5 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Route_02;
