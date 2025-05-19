import React from "react";
const LockKey: React.FC<
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
        d="M18.923 13.288a1 1 0 0 1 1.403 0l1.876 1.846a1 1 0 1 1-1.404 1.425l-1.174-1.156-.825.813.402.396a1 1 0 1 1-1.404 1.425l-.424-.417-.946.932a3.07 3.07 0 0 1-.603 3.549 3.146 3.146 0 0 1-4.404 0 3.067 3.067 0 0 1 0-4.38 3.15 3.15 0 0 1 3.589-.58zm-4.502 5.857a1.145 1.145 0 0 0-1.598 0 1.067 1.067 0 0 0 0 1.53c.44.433 1.159.433 1.598 0 .43-.424.43-1.105 0-1.53"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 1A5.5 5.5 0 0 0 5 6.5V8h-.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h5.704a4.567 4.567 0 0 1 .163-6.349 4.64 4.64 0 0 1 4.245-1.224l3.258-3.208a2.5 2.5 0 0 1 1.63-.716V11a3 3 0 0 0-3-3H16V6.5A5.5 5.5 0 0 0 10.5 1M7 6.5V8h7V6.5a3.5 3.5 0 1 0-7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockKey;
