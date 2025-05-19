import React from "react";
const TimeSetting_02: React.FC<
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
        d="M12 7.5V12l3 1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.772 2.684 9 5l-1.56.987-2.552-.632a1 1 0 0 0-1.1.46L2.424 8.11a1 1 0 0 0 .199 1.261l1.79 1.576v2.106l-1.79 1.576a1 1 0 0 0-.198 1.26l1.364 2.296a1 1 0 0 0 1.1.46l2.552-.632 1.478.83.705 2.435a1 1 0 0 0 .96.722h2.832a1 1 0 0 0 .96-.722l.706-2.436 1.477-.829 2.552.632a1 1 0 0 0 1.1-.46l1.39-2.338a1 1 0 0 0-.154-1.22l-1.806-1.798V11.17l1.807-1.798a1 1 0 0 0 .154-1.22l-1.39-2.338a1 1 0 0 0-1.1-.46l-2.552.632L15 5l-.772-2.316A1 1 0 0 0 13.279 2h-2.558a1 1 0 0 0-.949.684"
      />
    </svg>
  );
};
export default TimeSetting_02;
