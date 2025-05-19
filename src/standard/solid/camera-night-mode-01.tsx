import React from "react";
const CameraNightMode_01: React.FC<
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
        d="m17.04 5.25-.6-1.803a1.75 1.75 0 0 0-1.66-1.197H9.22a1.75 1.75 0 0 0-1.66 1.197l-.6 1.803H4.433a2.75 2.75 0 0 0-2.748 2.658l-.367 11a2.75 2.75 0 0 0 2.749 2.842h15.864a2.75 2.75 0 0 0 2.749-2.842l-.367-11a2.75 2.75 0 0 0-2.748-2.658zM10.998 6a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m1.152 4.275a.75.75 0 0 0-.832-1.013c-2.018.366-3.57 2.098-3.57 4.208 0 2.382 1.975 4.28 4.37 4.28 1.851 0 3.445-1.13 4.078-2.741a.75.75 0 0 0-.831-1.013q-.258.047-.533.048c-1.602 0-2.869-1.262-2.869-2.78 0-.35.066-.683.187-.99"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraNightMode_01;
