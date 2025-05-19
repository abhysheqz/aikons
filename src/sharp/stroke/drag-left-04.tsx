import React from "react";
const DragLeft_04: React.FC<
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
        d="M16.55 14.338v-1.632q-.001-.226-.076-.425m0 0a1.32 1.32 0 0 0-1.247-.85h-1.402m2.65.85h1.477a1.32 1.32 0 0 1 1.247.85m.076 1.677v-1.252q-.001-.226-.076-.425m0 0h1.478c.73 0 1.323.57 1.323 1.274v5.525c0 1.409-1.184 2.55-2.645 2.55H11.1l-3.78-6.219a1.5 1.5 0 0 1 .028-1.854 1.544 1.544 0 0 1 2.28-.125l1.472 1.454V6.823c0-.742.61-1.343 1.362-1.343s1.363.601 1.363 1.343v4.608m0 0v2.057"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.983 10.2c1.245-.528 2.772-1.93 2.479-4.274-.258-2.053-2.034-3.45-4.106-3.45-1.728.069-3.452 1.268-3.806 3.466v.532H2.02m2.494-2.505L2 6.486l2.515 2.498"
      />
    </svg>
  );
};
export default DragLeft_04;
