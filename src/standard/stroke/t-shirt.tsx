import React from "react";
const TShirt: React.FC<
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
        d="m6 14-3.248-1.624a1 1 0 0 1-.51-1.182L3.5 7l3-1.5L8 3c1.2-.8 3.167-1 4-1s2.8.2 4 1l1.5 2.5 3 1.5 1.258 4.194a1 1 0 0 1-.51 1.182L18 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 11v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9M6.5 5.498l4.324 3.143a2 2 0 0 0 2.352 0L17.5 5.498M9.5 2.5l1 5.5m4-5.5-1 5.5"
      />
    </svg>
  );
};
export default TShirt;
