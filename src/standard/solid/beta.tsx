import React from "react";
const Beta: React.FC<
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
        d="M13 4a3 3 0 0 0-3 3v7a4 4 0 0 0 4 4h.5a3.5 3.5 0 1 0 0-7H13a1 1 0 1 1 0-2h.5a2.5 2.5 0 0 0 0-5zm3.837 5.52A4.5 4.5 0 0 0 13.5 2H13a5 5 0 0 0-5 5v11.837C8 19.479 7.48 20 6.837 20h-.219a.81.81 0 0 1-.724-.447 1 1 0 1 0-1.788.894A2.81 2.81 0 0 0 6.618 22h.219A3.163 3.163 0 0 0 10 18.837v-.365A5.98 5.98 0 0 0 14 20h.5a5.5 5.5 0 0 0 2.337-10.48"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Beta;
