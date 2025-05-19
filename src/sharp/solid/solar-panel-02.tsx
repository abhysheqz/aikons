import React from "react";
const SolarPanel_02: React.FC<
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
        d="m22.75 5.526-4.408 13.225H3.052v-1.5H17.26l4.066-12.199z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.75 17.25v3.5h2v1.5h-5.5v-1.5h2v-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.85 1.75H6a.75.75 0 0 0-.717.53L4.061 6.25h4.466zM3.6 7.75l-.77 2.5h4.52l.736-2.5zM2.369 11.75l-1.086 3.53a.75.75 0 0 0 .717.97h3.586l1.323-4.5zM7.15 16.25h3.436l1.323-4.5H8.473zM12.15 16.25H16a.75.75 0 0 0 .717-.53l1.222-3.97h-4.466zM18.4 10.25l.77-2.5h-4.52l-.736 2.5zM19.63 6.25l1.087-3.53A.75.75 0 0 0 20 1.75h-3.586l-1.324 4.5zM14.85 1.75h-3.436l-1.324 4.5h3.437zM8.914 10.25l.735-2.5h3.437l-.736 2.5z"
      />
    </svg>
  );
};
export default SolarPanel_02;
