import React from "react";
const Mosque_03: React.FC<
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
        d="M4 12.5v10m16-10v10M6 8.5v4m12-4v4M2 12.5h20M4 8.5h16M2 22.5h20M12 3.5v-2M15 22.5v-.894c0-1.43 0-2.144-.224-2.785a4 4 0 0 0-.583-1.09c-.41-.542-1.004-.938-2.193-1.731-1.19.793-1.784 1.19-2.193 1.731a4 4 0 0 0-.583 1.09C9 19.461 9 20.176 9 21.606v.894M9.025 8.5C5.94 6 10.678 4.75 12 3.5c1.322 1.25 6.06 2.5 2.975 5z"
      />
    </svg>
  );
};
export default Mosque_03;
