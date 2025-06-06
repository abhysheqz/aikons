import React from "react";
const Gnome: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.629 2.091a.75.75 0 0 0-1.258 0l-5.955 9.162A4.12 4.12 0 0 0 4.75 13.5a.75.75 0 0 0 1.02.7c1.486-.571 3.71-.95 6.23-.95s4.744.379 6.23.95a.75.75 0 0 0 1.02-.7c0-.798-.231-1.578-.666-2.247zM4.25 16q.002-.487.05-.9.033.027.068.05a2 2 0 0 0 1.85.218q.557-.214 1.282-.389V15s0 2 1.5 2c.75 0 1.125-.375 1.5-.75s.75-.75 1.5-.75 1.125.375 1.5.75.75.75 1.5.75c1.5 0 1.5-2 1.5-2v-.02c.482.115.913.246 1.282.388A2 2 0 0 0 19.7 15.1q.048.411.05.9c0 1.176-.378 2.128-1.021 2.902-.628.756-1.482 1.312-2.394 1.768-.96.48-1.931 1.086-2.669 1.578a59 59 0 0 0-1.216.851c-.267.2-.634.2-.9 0a59 59 0 0 0-1.216-.85c-.738-.493-1.709-1.099-2.67-1.58-.91-.455-1.765-1.011-2.393-1.767C4.628 18.128 4.25 17.176 4.25 16"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gnome;
