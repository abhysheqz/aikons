import React from "react";
const Award_02: React.FC<
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
        d="M12.632 1.55a.775.775 0 0 0-1.261 0L9.028 4.828l-3.24.925a.775.775 0 0 0-.382 1.242l2.285 2.741-.458 3.666a.775.775 0 0 0 1.04.822L11 13.203v4.047H9A1.75 1.75 0 0 0 7.25 19v2H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-1.25v-2A1.75 1.75 0 0 0 15 17.25h-2v-4.048l2.73 1.023a.775.775 0 0 0 1.04-.822l-.458-3.666 2.285-2.741a.775.775 0 0 0-.383-1.242l-3.24-.925z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_02;
