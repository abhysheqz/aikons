import React from "react";
const Haji: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 11.5-4.61 2.514a2 2 0 0 0-1.024 1.492L3.5 22M15 11.5l4.61 2.514a2 2 0 0 1 1.024 1.492L21.5 22M7.5 22l1-5.5"
      />
      <path
        fill="currentColor"
        d="M16.177 12.322a.75.75 0 1 0-1.354-.644zM8 18l.199.723h.002l.005-.002.016-.004a7 7 0 0 0 .244-.076c.163-.053.393-.132.675-.242.563-.22 1.335-.56 2.178-1.05 1.677-.975 3.692-2.572 4.858-5.027l-1.354-.644c-.988 2.08-2.723 3.482-4.258 4.374-.762.443-1.461.752-1.968.95a11 11 0 0 1-.751.262l-.037.01-.007.003H7.8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 20s5-2 6-6.5"
      />
      <path
        fill="currentColor"
        d="M17.084 21.376a.75.75 0 1 0 .832 1.248zm.832 1.248c.462-.308.922-.777 1.335-1.263.42-.495.827-1.049 1.18-1.561a31 31 0 0 0 1.195-1.884l.018-.032.005-.008.002-.003L21 17.5l-.651-.372-.001.001-.004.007-.079.135a29.915 29.915 0 0 1-1.07 1.679c-.336.488-.71.997-1.087 1.44-.384.45-.736.794-1.024.986z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.217 3.525C9.923 2.448 11.212 2 12.5 2s2.577.448 3.283 1.525c.5.762.716 1.57.717 2.487a6.7 6.7 0 0 1-.284 1.934C15.636 9.878 14.956 12 12.5 12S9.363 9.878 8.784 7.946A6.7 6.7 0 0 1 8.5 6.012c0-.918.217-1.725.717-2.487M8.5 6h7.999"
      />
    </svg>
  );
};
export default Haji;
