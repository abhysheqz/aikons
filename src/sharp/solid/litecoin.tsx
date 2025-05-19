import React from "react";
const Litecoin: React.FC<
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
        d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75M10.778 6.298l-1.242 4.435-2.308.902.545 1.397 1.193-.466-1.491 4.684H15.5v-1.5H9.526l1.238-3.886 3.41-1.332-.546-1.397-2.343.915.938-3.348z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Litecoin;
