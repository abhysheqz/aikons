import React from "react";
const Safari: React.FC<
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
        d="M1.273 11.25a10.75 10.75 0 0 1 9.975-9.975V3.5a.75.75 0 0 0 1.5 0V1.275a10.75 10.75 0 0 1 9.974 9.974h-2.224a.75.75 0 0 0 0 1.5h2.224a10.75 10.75 0 0 1-9.974 9.975v-2.225a.75.75 0 0 0-1.5 0v2.225a10.75 10.75 0 0 1-9.975-9.975h2.225a.75.75 0 0 0 0-1.5zM16.53 7.47c.201.2.271.498.181.767l-1.849 5.548-4.656-4.644 5.557-1.852a.75.75 0 0 1 .767.18M9.143 10.2l4.667 4.654-5.573 1.858a.75.75 0 0 1-.948-.95z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Safari;
