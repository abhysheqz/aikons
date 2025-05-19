import React from "react";
const BitcoinKey: React.FC<
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
        d="M3 6.75a5.75 5.75 0 1 1 8.5 5.05v3.742a.75.75 0 0 1-.22.53l-.677.678.677.678c.141.14.22.331.22.53v1.792a.75.75 0 0 1-.22.53l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1-.22-.53V11.8a5.75 5.75 0 0 1-3-5.05m4.195-.176c0-.856.695-1.55 1.551-1.55h.014a1.55 1.55 0 0 1 0 3.1h-.014a1.55 1.55 0 0 1-1.55-1.55M18 12.75a.75.75 0 0 0-1.5 0V13h-1.75a.75.75 0 0 0 0 1.5H15V19h-.25a.75.75 0 0 0 0 1.5h1.75v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 18.25 13H18zM16.5 16v-1.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H16.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinKey;
