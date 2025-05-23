import React from "react";
const DatabaseLocked: React.FC<
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
        d="M18 12.25A2.75 2.75 0 0 0 15.25 15v.75h-1.5v7h8.5v-7h-1.5V15A2.75 2.75 0 0 0 18 12.25M16.75 15v.75h2.5V15a1.25 1.25 0 1 0-2.5 0M4.659 2.133C6.2 1.576 8.267 1.25 10.5 1.25s4.299.326 5.841.883c.768.278 1.456.631 1.97 1.07S19.25 4.248 19.25 5v5.937a4.252 4.252 0 0 0-5.311 2.807A22.5 22.5 0 0 1 10.5 14c-2.621 0-4.947-.423-6.579-1.069-.818-.324-1.412-.685-1.785-1.034a1.7 1.7 0 0 1-.386-.496V5c0-.753.425-1.358.938-1.796.515-.44 1.203-.793 1.97-1.07m-.68 2.474c-.275.234-.285.37-.285.393s.01.159.284.393.724.487 1.364.718c1.272.46 3.096.764 5.158.764s3.886-.304 5.158-.764c.64-.231 1.09-.484 1.364-.718s.284-.37.284-.393-.01-.159-.284-.393-.724-.487-1.364-.718c-1.272-.46-3.096-.764-5.158-.764s-3.886.304-5.158.764c-.64.231-1.09.484-1.364.718M6.66 9.5c.859.186 1.798.313 2.842.362v1.5a20 20 0 0 1-2.842-.33zM12.25 15.941A26 26 0 0 1 10.5 16c-2.82 0-5.42-.45-7.355-1.217a10 10 0 0 1-1.395-.676V19c0 .706.384 1.288.881 1.729.498.441 1.176.805 1.949 1.095 1.551.581 3.645.926 5.92.926q.899 0 1.75-.07zM9.5 18.362A17 17 0 0 1 6.658 18v1.532c.864.169 1.846.284 2.842.33z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DatabaseLocked;
