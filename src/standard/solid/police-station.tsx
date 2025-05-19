import React from "react";
const PoliceStation: React.FC<
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
        d="M1 13a2 2 0 0 1 2-2h3a1 1 0 1 1 0 2H3v8h3a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1zm16-1a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h3v-8h-3a1 1 0 0 1-1-1M11.823 1.823a.25.25 0 0 1 .354 0c.232.232.838.72 1.574 1.149.742.432 1.568.778 2.249.778a.25.25 0 0 1 .25.25v.013c0 .995 0 2.285-.518 3.58-.524 1.311-1.57 2.606-3.62 3.63a.25.25 0 0 1-.224 0c-2.05-1.024-3.095-2.319-3.62-3.63-.518-1.295-.518-2.585-.518-3.58V4A.25.25 0 0 1 8 3.75c.68 0 1.507-.346 2.249-.778.736-.43 1.342-.917 1.574-1.149"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 8a2 2 0 0 1 1.355-1.895c.085.645.24 1.343.52 2.044.673 1.681 1.992 3.24 4.342 4.415a1.75 1.75 0 0 0 1.566 0c2.35-1.175 3.67-2.734 4.342-4.415a8.5 8.5 0 0 0 .52-2.044A2 2 0 0 1 19 8v14a1 1 0 0 1-1 1h-3.5v-3.534a2.5 2.5 0 0 0-5 0V23H6a1 1 0 0 1-1-1zm8 15v-3.535a1 1 0 1 0-2 0V23zm-3.5-8.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoliceStation;
