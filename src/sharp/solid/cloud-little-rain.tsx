import React from "react";
const CloudLittleRain: React.FC<
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
        d="M11.001 15.75v-2.5h2v2.5zM8 18.75v-2.5h2v2.5zm6 0v-2.5h2v2.5zm-8.5 3v-2.5h2v2.5zm5.5 0v-2.5h2v2.5zm5.5 0v-2.5h2v2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 7.365A5.752 5.752 0 0 0 3.759 17.75H6.5v-3h3.001v-3h5v3H17.5v3h3.083a5.251 5.251 0 0 0-2.336-9.447 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudLittleRain;
