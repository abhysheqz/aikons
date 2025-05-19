import React from "react";
const Headphones: React.FC<
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
        d="M4.072 12.251a1.68 1.68 0 0 1 1.782-.162l.929.464c.592.297.967.903.967 1.565v4.764a1.75 1.75 0 0 1-.967 1.566l-.929.464a1.68 1.68 0 0 1-1.782-.163c-.443-.344-1.125-.922-1.703-1.628-.56-.686-1.119-1.606-1.119-2.62s.558-1.935 1.12-2.62c.577-.707 1.259-1.285 1.702-1.63"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.5a7 7 0 0 0-7 7V13a1 1 0 1 1-2 0v-1.5a9 9 0 0 1 18 0V13a1 1 0 1 1-2 0v-1.5a7 7 0 0 0-7-7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.146 12.09a1.68 1.68 0 0 1 1.782.161c.443.345 1.125.923 1.703 1.63.56.685 1.119 1.605 1.119 2.62 0 1.014-.558 1.934-1.12 2.62-.577.706-1.259 1.284-1.702 1.628a1.68 1.68 0 0 1-1.783.163l-.928-.464a1.75 1.75 0 0 1-.967-1.566v-4.764c0-.662.375-1.268.967-1.565z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Headphones;
