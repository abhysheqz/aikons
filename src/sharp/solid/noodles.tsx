import React from "react";
const Noodles: React.FC<
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
        d="M15.5 10.245a1.75 1.75 0 0 0-1.75 1.75h-1.5a3.25 3.25 0 1 1 6.5 0h-1.5a1.75 1.75 0 0 0-1.75-1.75M10.25 7.494V1.992h1.5v5.502zm-2.5 0V2.492h1.5v5.002zm-2.5 4.502V2.992h1.5v9.004z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.116 2.733-6.5 1.016-.231-1.483 6.5-1.016zm-14 2.188-2 .313-.231-1.483 2-.313zm13.931 1.82-6.5.407-.093-1.497 6.5-.407zm-14 .876-2 .125-.093-1.497 2-.125z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.75 11.245v.75c0 3.254-1.966 6.05-4.82 7.555l.777 2.2a.75.75 0 0 1-.707 1H7a.75.75 0 0 1-.707-1l.776-2.2c-2.853-1.505-4.819-4.3-4.819-7.554v-.75z"
      />
    </svg>
  );
};
export default Noodles;
