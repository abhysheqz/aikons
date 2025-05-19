import React from "react";
const Garage: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 22v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8M7 16h10M7 19h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.009 7.023H12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.168 2.556-7.486 5A1.5 1.5 0 0 0 3.015 8.8l-.016 12.198A1 1 0 0 0 4 22H20a1 1 0 0 0 1-1V8.803a1.5 1.5 0 0 0-.668-1.248l-7.5-5a1.5 1.5 0 0 0-1.664 0Z"
      />
    </svg>
  );
};
export default Garage;
