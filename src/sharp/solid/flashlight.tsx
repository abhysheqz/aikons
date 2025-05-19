import React from "react";
const Flashlight: React.FC<
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
        d="M6.292 6.75h11.416a6.75 6.75 0 0 1-.847 2.599l-.004.006-1.107 1.852V21.75h-7.5V11.207L7.143 9.355l-.004-.006a6.75 6.75 0 0 1-.847-2.599m-.042-1.5h11.5v-3H6.25zm6.5 10.5v-3.5h-1.5v3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flashlight;
