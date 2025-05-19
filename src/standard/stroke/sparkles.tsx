import React from "react";
const Sparkles: React.FC<
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
        d="M15 2c.944 4.19 2.579 6.004 7 7-4.19.944-6.004 2.579-7 7-.944-4.19-2.579-6.004-7-7 4.421-.996 6.056-2.81 7-7M7 12c.711 3.158 2.007 4.326 5 5-3.158.711-4.326 2.006-5 5-.711-3.158-2.007-4.326-5-5 3.158-.711 4.326-2.007 5-5"
      />
    </svg>
  );
};
export default Sparkles;
