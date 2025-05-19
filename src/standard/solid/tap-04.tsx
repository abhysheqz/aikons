import React from "react";
const Tap_04: React.FC<
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
        d="m5.758 18.5-.01-.016a9 9 0 0 1-.143-.274c-.091-.179-.213-.43-.335-.713-.227-.529-.517-1.305-.52-1.958-.007-.37.038-.74.133-1.097.213-.803.753-1.467 1.54-2.434l.101-.125a1 1 0 0 1 .06-.065l1.166-1.135V6.018a2.268 2.268 0 0 1 4.536 0v4.732H16A3.25 3.25 0 0 1 19.25 14v5.5A3.25 3.25 0 0 1 16 22.75H9.693a2.75 2.75 0 0 1-2.42-1.443L5.76 18.503z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.04 2.75A3.25 3.25 0 0 0 6.79 6a.75.75 0 1 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0 3.25 3.25 0 0 0-3.25-3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tap_04;
