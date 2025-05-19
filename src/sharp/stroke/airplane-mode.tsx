import React from "react";
const AirplaneMode: React.FC<
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
        d="M8.959 9.058c-.05-3.97.046-5.506 3.052-7.06 2.855 1.601 3.116 3.122 3.013 7.06l5.936 3.47.04 2.953c.005.067-.204.017-.27 0l-6.484-1.636-.25 3.68 2.953 2.45c.034.027.02.058.001.098l-.001.003-.924 1.893c-.022.047-.068.018-.117 0l-3.913-1.463-3.945 1.486c-.046.018-.048.015-.067-.027l-.003-.005-.94-1.892c-.02-.041-.035-.067 0-.096l2.966-2.447-.27-3.68-6.69 1.68c-.066.016-.043-.063-.04-.13v-2.867z"
      />
    </svg>
  );
};
export default AirplaneMode;
