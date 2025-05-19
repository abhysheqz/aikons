import React from "react";
const Stamp_01: React.FC<
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
        d="M5 18a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 6a4.75 4.75 0 0 1 9.5 0c0 .86-.273 1.564-.582 2.173-.122.24-.256.478-.382.701l-.089.157a10 10 0 0 0-.41.796 2.25 2.25 0 0 0 .94 2.867l3.637 2.079a2.75 2.75 0 0 1 1.386 2.388V18.5c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25v-1.34a2.75 2.75 0 0 1 1.386-2.387l3.638-2.079a2.25 2.25 0 0 0 .94-2.867 10 10 0 0 0-.411-.796l-.089-.157c-.125-.223-.26-.46-.382-.7C7.523 7.563 7.25 6.86 7.25 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stamp_01;
