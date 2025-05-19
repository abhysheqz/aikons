import React from "react";
const Fan_02: React.FC<
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
        d="M11.25 1.25H12a5.75 5.75 0 0 1 4.333 9.53 4.5 4.5 0 0 0-5.083-3.218zM16.5 12q0-.383-.062-.75h6.312V12a5.75 5.75 0 0 1-9.53 4.333A4.5 4.5 0 0 0 16.5 12m-3.75 4.438q-.367.061-.75.062a4.5 4.5 0 0 1-4.333-3.28A5.75 5.75 0 0 0 12 22.75h.75zM7.5 12q0 .383.062.75H1.25V12a5.75 5.75 0 0 1 9.53-4.333A4.5 4.5 0 0 0 7.5 12M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fan_02;
