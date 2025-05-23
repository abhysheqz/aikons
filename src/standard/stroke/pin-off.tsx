import React from "react";
const PinOff: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 21 5.5-5.5m-.927-7.638A6 6 0 0 0 5.769 8.95l-.965.846a1 1 0 0 0-.049 1.46l7.99 7.988a1 1 0 0 0 1.459-.048l.848-.97a6 6 0 0 0 1.085-1.8M11 7.6l1.31.262a1 1 0 0 0 1.053-.466l2.346-3.91a.92.92 0 0 1 .857-.461c2.499.22 4.19 1.91 4.41 4.41.03.35-.16.676-.461.856l-3.91 2.346a1 1 0 0 0-.467 1.054L16.4 13M2 2l20 20"
      />
    </svg>
  );
};
export default PinOff;
