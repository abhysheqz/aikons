import React from "react";
const Directions_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.196 3.2c-.475-.59-.712-.885-1.036-1.043S16.465 2 15.723 2H13.61c-.76 0-1.139 0-1.374.244S12 2.881 12 3.667V7h3.723c.742 0 1.112 0 1.437-.157.324-.158.561-.453 1.036-1.042l.188-.234c.41-.51.616-.765.616-1.067s-.205-.557-.616-1.067zM18.196 12.2c-.475-.59-.712-.885-1.036-1.043S16.465 11 15.723 11H12v5h3.723c.742 0 1.112 0 1.437-.157.324-.158.561-.453 1.036-1.042l.188-.234c.41-.51.616-.765.616-1.067s-.205-.557-.616-1.067zM5.804 8.2c.475-.59.712-.885 1.036-1.043S7.535 7 8.277 7H12v5H8.277c-.742 0-1.112 0-1.437-.157-.324-.158-.561-.453-1.036-1.042l-.188-.234C5.206 10.057 5 9.802 5 9.5s.205-.557.616-1.067zM12 22V3M9 22h6"
      />
    </svg>
  );
};
export default Directions_02;
