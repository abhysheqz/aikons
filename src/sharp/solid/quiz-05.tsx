import React from "react";
const Quiz_05: React.FC<
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
        d="M6.15 18.273a7.99 7.99 0 0 0 6.6 3.477h1.5c1.343 0 2.61-.331 3.723-.917l3.237 1.359a.75.75 0 0 0 .974-1l-1.322-2.937a7.97 7.97 0 0 0 1.388-4.505c0-1.924-.68-3.69-1.811-5.07q.06.528.061 1.07A9.25 9.25 0 0 1 11.25 19h-1.5a9.2 9.2 0 0 1-3.6-.727"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 9.75a8 8 0 0 1 8-8h1.5a8 8 0 1 1 0 16h-1.5a8 8 0 0 1-3.723-.917L2.79 18.192a.75.75 0 0 1-.974-1l1.322-2.937A7.97 7.97 0 0 1 1.75 9.75m8.75-3.5c-.69 0-1.25.56-1.25 1.25v.75h-1.5V7.5a2.75 2.75 0 1 1 5.064 1.487c-.373.58-.882 1-1.27 1.27a6 6 0 0 1-.294.189v1.304h-1.5V9.516l.439-.198.003-.002.024-.011.104-.055c.093-.05.224-.127.372-.229.302-.209.636-.497.86-.846A1.25 1.25 0 0 0 10.5 6.25m.759 6.5H9.75v1.5h1.509z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quiz_05;
