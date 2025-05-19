import React from "react";
const MilkBottle: React.FC<
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
        d="M9.273 3c-.435 0-.637.304-.637.5 0 .185.127.395.299.5h1.08a1 1 0 1 1 0 2h-.688C7.89 8.686 7 10.827 7 13.777V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6.223c0-2.95-.893-5.09-2.332-7.777H14a1 1 0 1 1 0-2h1.07a.6.6 0 0 0 .294-.5c0-.196-.202-.5-.637-.5zm7.31 2.341c.49-.482.78-1.152.78-1.841 0-1.46-1.263-2.5-2.636-2.5H9.273C7.9 1 6.636 2.04 6.636 3.5c0 .688.297 1.352.78 1.833C6.004 8.006 5 10.45 5 13.777V20a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6.223c0-3.324-1.006-5.766-2.417-8.436"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.539 11.201a1 1 0 0 1 .808-.146l11.895 2.974A1 1 0 0 1 19 15v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6.223q0-.976.112-1.873a1 1 0 0 1 .427-.702"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MilkBottle;
