import React from "react";
const CircleArrowDataTransferVertical: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m2.468 5.664a.75.75 0 0 0-1.218.586v9h1.5V9.06l1.281 1.026.937-1.172zM10.75 16.5v-9h-1.5v7.44l-1.282-1.026-.937 1.172 2.5 2a.75.75 0 0 0 1.219-.586"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowDataTransferVertical;
