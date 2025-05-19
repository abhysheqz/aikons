import React from "react";
const Setup_01: React.FC<
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
        d="M10.229 6h3.543v1.55l1.136.667 1.32-.775L18 10.559l-1.32.775v1.333l1.32.774-1.771 3.118-1.321-.775-1.136.667v1.55H10.23v-1.55l-1.136-.667-1.32.775L6 13.441l1.32-.774v-1.333l-1.32-.775 1.771-3.117 1.321.775 1.136-.668zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.205A8.795 8.795 0 0 0 3.205 12c0 1.253.261 2.442.731 3.518l-1.79.782A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25c2.163 0 4.178.64 5.864 1.739v-.762h1.954v2.794a.977.977 0 0 1-1.661.698A8.76 8.76 0 0 0 12 3.205M20.796 12a8.8 8.8 0 0 0-.732-3.518l1.791-.782c.576 1.318.895 2.773.895 4.3 0 5.937-4.813 10.75-10.75 10.75-2.163 0-4.177-.64-5.863-1.738v.76H4.182V18.98a.977.977 0 0 1 1.661-.698A8.76 8.76 0 0 0 12 20.796 8.795 8.795 0 0 0 20.796 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Setup_01;
