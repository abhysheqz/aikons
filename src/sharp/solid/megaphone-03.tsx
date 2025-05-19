import React from "react";
const Megaphone_03: React.FC<
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
        d="m8.25 16.158-.5-.15V7.992l8.895-2.669 2.592-2.073h2.513v17.5h-2.513l-2.592-2.073-2.384-.716-1.057 1.585a2.704 2.704 0 0 1-4.954-1.5zm1.5.45v1.438a1.204 1.204 0 0 0 2.206.668l.802-1.203zM6.25 8.25v7.5H4A1.75 1.75 0 0 1 2.25 14v-4c0-.966.784-1.75 1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Megaphone_03;
