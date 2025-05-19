import React from "react";
const Asterisk: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 7.5v9m3.897-6.75-7.794 4.5m7.794 0-7.794-4.5M6.479 6.77c-4.27 4.044-5.258 9.664-2.209 12.553 2.606 2.469 7.318 2.144 11.298-.527L20 20.5l-1.916-3.831c3.788-3.989 4.556-9.235 1.646-11.992-3.05-2.889-8.982-1.952-13.251 2.092Z"
      />
    </svg>
  );
};
export default Asterisk;
