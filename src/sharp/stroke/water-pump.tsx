import React from "react";
const WaterPump: React.FC<
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
        d="M14.483 5.5H8.49v6h5.992z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.985 11.5H9.99v10h2.996z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.493 21.5h7.989"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.483 2.5h-7.49l-4.493 9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.487 2.5v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.533 7.043h-4.086v2.965h4.023a.01.01 0 0 1 .01.01v2.478h3.014v-1.983c.119-2.657-1.924-3.42-2.96-3.47ZM19.959 15.467c-2.072 2.216-1.606 4.032 0 4.032 1.956 0 1.988-1.983 0-4.032Z"
      />
    </svg>
  );
};
export default WaterPump;
