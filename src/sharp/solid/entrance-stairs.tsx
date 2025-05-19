import React from "react";
const EntranceStairs: React.FC<
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
        d="M12 1.25A8.75 8.75 0 0 0 3.25 10v12.75h17.5V10A8.75 8.75 0 0 0 12 1.25m7.25 12h-3.5v-2.5h3.5zm-7.5 4h7.5v-2.5h-7.5zm-4 4h11.5v-2.5H7.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EntranceStairs;
