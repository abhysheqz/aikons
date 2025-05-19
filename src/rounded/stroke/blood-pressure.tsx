import React from "react";
const BloodPressure: React.FC<
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
        d="M9 13h.8c.63 0 .945 0 1.198.15.254.149.395.418.676.956L13.191 17l2.095-6 1.516 2.894c.282.538.422.807.676.957.253.149.568.149 1.198.149H20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.5 12c-.768-3.585-3.776-6.961-5.976-9.028a3.53 3.53 0 0 0-4.864 0C7.12 5.36 3.5 9.494 3.5 13.678 3.5 17.78 6.754 22 12.092 22c3.393 0 5.944-1.704 7.352-4"
      />
    </svg>
  );
};
export default BloodPressure;
