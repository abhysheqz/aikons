import React from "react";
const Zeppelin: React.FC<
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
        d="M3.9 3.244a3 3 0 0 1 2.39.414l2.265 1.51a1 1 0 1 1-1.11 1.664l-2.264-1.51a1 1 0 0 0-.797-.138l-.138.035.716 2.506a1 1 0 0 1-1.924.55l-1-3.5a1 1 0 0 1 .72-1.246zM3.9 18.756a3 3 0 0 0 2.39-.414l2.265-1.51a1 1 0 1 0-1.11-1.664l-2.264 1.51a1 1 0 0 1-.797.138l-.138-.035.716-2.506a1 1 0 0 0-1.924-.55l-1 3.5a1 1 0 0 0 .72 1.246zM19.243 15.03a1 1 0 0 1 .727 1.213l-.769 3.075a2 2 0 0 1-2.332 1.476l-3.586-.718a2 2 0 0 1-1.396-1.066l-.782-1.563a1 1 0 0 1 1.79-.894l.78 1.562 3.586.717.769-3.075a1 1 0 0 1 1.212-.727"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 4.246c-2.62 0-5.971.779-8.67 1.936-1.352.579-2.581 1.27-3.487 2.04-.599.507-1.118 1.104-1.39 1.774H5a1 1 0 0 1 0 2H1.452c.273.67.792 1.267 1.39 1.775.907.769 2.136 1.46 3.488 2.04 2.699 1.156 6.05 1.935 8.67 1.935 4.312 0 7.75-2.926 7.75-6.75s-3.438-6.75-7.75-6.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zeppelin;
