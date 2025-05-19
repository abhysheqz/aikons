import React from "react";
const Bulb: React.FC<
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
        d="M12 3.194c-3.768 0-6.806 3.02-6.806 6.724 0 1.267.354 2.45.97 3.461l-1.661 1.01A8.57 8.57 0 0 1 3.25 9.92c0-4.798 3.927-8.67 8.75-8.67s8.75 3.872 8.75 8.67a8.57 8.57 0 0 1-1.253 4.47l-1.66-1.01c.615-1.01.969-2.194.969-3.46 0-3.705-3.038-6.725-6.806-6.725"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.856 9.234c-.627.526-1.252.766-1.857.766s-1.23-.24-1.857-.766l-1.287 1.531c.64.538 1.361.933 2.144 1.118v3.367H7a.75.75 0 0 0-.712.987l.671 2.013h10.082l.67-2.013A.75.75 0 0 0 17 15.25h-4.001v-3.367c.782-.185 1.503-.58 2.143-1.118zM9.29 22.237l-.83-2.487h7.081l-.829 2.487a.75.75 0 0 1-.711.513h-4a.75.75 0 0 1-.712-.513"
      />
    </svg>
  );
};
export default Bulb;
