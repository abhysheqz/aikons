import React from "react";
const Champion: React.FC<
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
        d="M12 17c-2.21 0-4 2.239-4 5h8c0-2.761-1.79-5-4-5M18.5 5H22l-.238 1.669c-.264 1.842-.395 2.763-.761 3.558a6 6 0 0 1-1.724 2.193c-.686.543-1.55.889-3.277 1.58M5.5 5H2l.238 1.669c.264 1.842.395 2.763.761 3.558a6 6 0 0 0 1.724 2.193c.686.543 1.55.889 3.277 1.58"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17c-3.444 0-6.263-6.181-6.486-14A.98.98 0 0 1 6.5 2h11a.98.98 0 0 1 .986 1C18.263 10.82 15.444 17 12 17"
      />
    </svg>
  );
};
export default Champion;
