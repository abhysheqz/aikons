import React from "react";
const HandPointingLeft_03: React.FC<
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
        d="m13.541 2.916 7.194 4.957h1.266a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75h-1.237l-1.199.959a4.75 4.75 0 0 1-2.967 1.04H12.5c-1.354.001-2.48-.985-2.708-2.31-.047-.272.182-.498.458-.498h2.25a.45.45 0 1 0 0-.9h-2.458c-.248 0-.493-.087-.652-.277a2.74 2.74 0 0 1-.64-1.764c0-.268.217-.486.486-.486H11.5a.45.45 0 0 0 0-.9H9.014a1.264 1.264 0 0 1 0-2.527h1.487a.45.45 0 0 0 0-.9H2.524a1.274 1.274 0 1 1 0-2.547h11.073a.45.45 0 0 0 .323-.763l-2.355-2.015a1.623 1.623 0 0 1 1.976-2.57"
      />
    </svg>
  );
};
export default HandPointingLeft_03;
