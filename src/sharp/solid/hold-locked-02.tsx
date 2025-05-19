import React from "react";
const HoldLocked_02: React.FC<
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
        d="M10.52 2.538c0-.7.597-1.288 1.358-1.288.76 0 1.356.588 1.356 1.288V9.82h.795V4.779c0-.7.596-1.289 1.357-1.289.76 0 1.356.588 1.356 1.289v5.04h.795v-2.8c0-.7.596-1.288 1.356-1.288s1.357.588 1.357 1.288v5.163a3.751 3.751 0 0 0-5.425 2.568H13.25v7H7.795l-5.729-7.628-.004-.006a1.45 1.45 0 0 1 .03-1.833c.586-.704 1.685-.764 2.35-.125l2.571 2.47v-9.85c0-.7.596-1.288 1.357-1.288.76 0 1.356.588 1.356 1.289v5.04h.795z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 13.25a2.25 2.25 0 0 0-2.25 2.25v.75h-1.5v6.5h7.5v-6.5h-1.5v-.75a2.25 2.25 0 0 0-2.25-2.25m.75 2.25v.75h-1.5v-.75a.75.75 0 0 1 1.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HoldLocked_02;
