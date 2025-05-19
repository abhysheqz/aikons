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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.222 5.452a.75.75 0 1 0-1.444-.404l-1.242 4.435-2.309.902a.75.75 0 0 0 .546 1.397l1.257-.49-.468 1.67c-.125.448-.24.858-.286 1.197-.049.366-.041.803.242 1.196.289.4.706.54 1.073.595.331.05.747.05 1.192.05H15.5a.75.75 0 0 0 0-1.5l-5.746-.044 1.025-3.848 3.394-1.326a.75.75 0 1 0-.546-1.397l-2.342.915z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Litecoin;
