import React from "react";
const GameController_01: React.FC<
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
        d="M10.5 13h3M12 9V3M20.153 20.923c1.861-.588 2.407-4.164 1.218-7.986s-3.662-6.443-5.524-5.854c-1.15.363-2.15 2.296-2.15 2.296h-3.394s-1-1.933-2.15-2.296c-1.862-.59-4.335 2.032-5.524 5.854s-.643 7.397 1.218 7.986c1.36.43 4.153-.911 5.653-4.92h5c1.5 4.009 4.294 5.35 5.653 4.92Z"
      />
    </svg>
  );
};
export default GameController_01;
