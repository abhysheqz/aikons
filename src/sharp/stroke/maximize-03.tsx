import React from "react";
const Maximize_03: React.FC<
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
        strokeWidth={1.5}
        d="m14.928 8.108.89.24a1.856 1.856 0 0 1 1.303 2.27m0 0-.239.896m.239-.895a.92.92 0 0 1 1.128-.656 1.856 1.856 0 0 1 1.303 2.271m0 0-.238.896m.238-.896a.78.78 0 0 1 1.077-.511l.291.133a1.86 1.86 0 0 1 1.017 2.168l-.352 1.319c-.518 1.946-.777 2.92-1.278 3.615-.29.403-1.807 1.368-1.807 1.368l-.681 2M14.45 9.9l1.55-5.822a1.39 1.39 0 0 0-.977-1.703 1.38 1.38 0 0 0-1.693.983l-2.375 8.923L9.9 10.435a1.545 1.545 0 0 0-2.267-.477 1.58 1.58 0 0 0-.522 1.848L10 17.826l-.635 2.22M5.114 7.205 2.5 9.813m-.486-2.502-.018 3.005h3.017m1.861-4.872 2.718-2.707m-2.604-.41h3.017v2.99"
      />
    </svg>
  );
};
export default Maximize_03;
