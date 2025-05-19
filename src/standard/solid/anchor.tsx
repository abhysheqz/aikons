import React from "react";
const Anchor: React.FC<
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
        d="M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3.5 1.5A3.5 3.5 0 0 1 13 8.855v11.083a8.01 8.01 0 0 0 6.817-6.228l-.37.184a1 1 0 1 1-.894-1.788l2-1A1 1 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a1 1 0 0 1 1.447-.894l2 1a1 1 0 1 1-.894 1.788l-.37-.184A8.01 8.01 0 0 0 11 19.938V8.855A3.502 3.502 0 0 1 12 2a3.5 3.5 0 0 1 3.5 3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Anchor;
