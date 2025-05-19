import React from "react";
const HighHeels_02: React.FC<
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
        d="M2.5 3.25a.75.75 0 0 0-.75.75v8q0 .07.013.138l1.613 8.612h2.7l1.99-7.463c.78.45 1.415 1.271 2.834 3.163 1.585 2.114 3.343 3.211 5.317 3.76 1.929.537 3.792.54 6.033.54v-1.5c-.43 0-.596 0-1-.004V16.5a.75.75 0 0 0-.414-.67l-3-1.5a.75.75 0 0 0-.785.07l-3.565 2.673c-.473-.419-.934-.92-1.386-1.523l-.12-.16c-1.356-1.808-2.193-2.925-3.409-3.533-1.204-.602-2.586-.607-4.81-.607v-3.5h6.489v-4.5z"
      />
    </svg>
  );
};
export default HighHeels_02;
