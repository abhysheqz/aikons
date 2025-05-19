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
      <path fill="currentColor" d="M7.75 4.75h7.5v7.5h-7.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.5 22.25h-8v-2h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.188 15.296c.075-.09.768-.868.812-.919.044.05.738.829.812.918.148.179.346.428.547.706.198.276.41.596.573.916.152.294.318.688.318 1.083a2.25 2.25 0 0 1-4.5 0c0-.395.166-.788.317-1.083.165-.32.376-.64.574-.916.2-.278.4-.527.547-.706"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 5.5v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.38 1.75h7.87v1.914H7.58L3.484 11.75l-1.734-.856z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 13.25v9h4.5v-9zM16.25 10.75h1.5v2.5h4.5V10a3.75 3.75 0 0 0-3.75-3.75h-2.25z"
      />
    </svg>
  );
};
export default WaterPump;
