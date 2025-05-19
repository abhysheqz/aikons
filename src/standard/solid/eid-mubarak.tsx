import React from "react";
const EidMubarak: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.576 2.068a.75.75 0 0 1-.006.873 7.868 7.868 0 0 0 10.99 10.99.75.75 0 0 1 1.16.817c-1.271 4.335-5.277 7.502-10.025 7.502-5.769 0-10.445-4.676-10.445-10.445 0-4.748 3.167-8.754 7.502-10.025a.75.75 0 0 1 .824.288"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 1.5c.255 0 .51.097.703.287.268.227.584.452.953.716l.007.005c.378.27.809.578 1.204.922.79.688 1.589 1.649 1.63 3.041.008.29.01.632-.078 1.057-.087.417-.252.868-.526 1.418a1 1 0 0 1-.146.216V16h-1.5V9.498L16 9.494l-2.248.004V15a.75.75 0 0 1-1.5 0V9.161a1 1 0 0 1-.145-.215c-.274-.55-.439-1-.526-1.418a4.3 4.3 0 0 1-.077-1.057c.04-1.392.838-2.353 1.63-3.041.394-.344.825-.652 1.204-.922l.006-.005c.37-.264.685-.49.953-.716A1 1 0 0 1 16 1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EidMubarak;
