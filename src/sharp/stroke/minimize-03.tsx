import React from "react";
const Minimize_03: React.FC<
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
        d="m14.928 8.22.89.24a1.856 1.856 0 0 1 1.303 2.272m0 0-.239.896m.239-.896a.92.92 0 0 1 1.128-.656 1.856 1.856 0 0 1 1.303 2.272m0 0-.238.895m.238-.895a.78.78 0 0 1 1.077-.512l.291.133a1.86 1.86 0 0 1 1.017 2.168l-.352 1.319c-.518 1.947-.777 2.92-1.278 3.615-.29.403-1.807 1.368-1.807 1.368l-.681 2M14.45 10.013l1.55-5.821a1.39 1.39 0 0 0-.977-1.704 1.38 1.38 0 0 0-1.693.984l-2.375 8.922L9.9 10.55a1.545 1.545 0 0 0-2.267-.478 1.58 1.58 0 0 0-.522 1.848L10 17.94l-.635 2.22M1.995 10.433l3.198-3.128m-3.198.126h2.992v3.002m5.018-7.994L7.159 5.28m-.156-2.838v2.997H9.99"
      />
    </svg>
  );
};
export default Minimize_03;
