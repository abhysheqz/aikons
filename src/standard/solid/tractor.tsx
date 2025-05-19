import React from "react";
const Tractor: React.FC<
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
        d="M6.5 11.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M19 14.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.258 2.03a1 1 0 0 1 1.212.727l1.5 6q.03.12.03.243v3.5a1 1 0 1 1-2 0V9.123l-1.47-5.88a1 1 0 0 1 .728-1.213M4 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M20 7h-1v2.5a1 1 0 1 1-2 0V7a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.361 8.23a1 1 0 0 1 .823-.213l6.369 1.194a3 3 0 0 1 2.21 1.78h-1.388a.75.75 0 1 0 0 1.5H22v1.89A4.7 4.7 0 0 0 14.406 19h-.555a1 1 0 0 1-.98-1.198q.129-.63.13-1.301a6.5 6.5 0 0 0-10.4-5.2 1 1 0 0 1-1.202-1.6A8.47 8.47 0 0 1 6.501 8c2.097 0 4.017.76 5.5 2.018V9a1 1 0 0 1 .36-.77"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tractor;
