import React from "react";
const RssUnlocked: React.FC<
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
        d="M16.531 5.36V3.952A1.96 1.96 0 0 1 18.5 2c.489 0 .936.177 1.28.469M15 11h7V5.36h-7z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 21H22v-7.5m-19-2V6h9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.982 21h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"
      />
    </svg>
  );
};
export default RssUnlocked;
