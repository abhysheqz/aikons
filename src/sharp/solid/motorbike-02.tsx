import React from "react";
const Motorbike_02: React.FC<
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
        d="M19.5 15.107a1.393 1.393 0 1 0 0 2.786 1.393 1.393 0 0 0 0-2.786M16.25 16.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M4.5 15.107a1.393 1.393 0 1 0 0 2.786 1.393 1.393 0 0 0 0-2.786M1.25 16.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.103 4.25a13.2 13.2 0 0 1 3.712 3.143c1.365 1.662 1.887 3.295 1.934 4.266a.75.75 0 0 1-1.06.718 4.6 4.6 0 0 0-1.906-.41 5.05 5.05 0 0 0-3.087 1.1c-.866.7-1.445 1.693-1.445 2.933a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75c0-.99-.495-1.92-1.304-2.621-.811-.703-1.89-1.13-2.946-1.13a.75.75 0 0 1-.386-.106l-2.5-1.5A.75.75 0 0 1 1.251 10V8a.75.75 0 0 1 .903-.735l7.724 1.608.697-.403c1.371-.93 3.656-1.894 6.006-1.052l.953.305L18.8 7.43c-.644-.61-1.445-1.314-2.436-1.874z"
      />
    </svg>
  );
};
export default Motorbike_02;
