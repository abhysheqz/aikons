import React from "react";
const Ramadhan_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 11.805c0 5.354 4.34 9.695 9.695 9.695 4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.963 2.5C5.94 3.68 3 7.399 3 11.805Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.414 4.914-1.33-2.255a.1.1 0 0 0-.172 0L16.61 4.914l-2.435.596a.1.1 0 0 0-.05.165l1.688 1.822-.645 2.815a.1.1 0 0 0 .135.115l2.706-1.12 2.693 1.127a.1.1 0 0 0 .136-.115l-.643-2.822 1.704-1.822a.1.1 0 0 0-.05-.165z"
      />
    </svg>
  );
};
export default Ramadhan_01;
