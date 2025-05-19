import React from "react";
const Copilot: React.FC<
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
        d="M4.23 6.241 2.248 15.5H8.83l1.956-7.73.847-3.598c.079-.336.21-.647.385-.922h-4.44c-1.531 0-2.922 1.192-3.348 2.991m12.078 1.092a3.7 3.7 0 0 1-.706-1.578l-.234-1.222c-.15-.785-.733-1.283-1.343-1.283-.588 0-1.151.46-1.326 1.205l-.677 2.878z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.766 17.759 21.75 8.5h-6.582l-1.959 7.73-.846 3.598a3 3 0 0 1-.386.922h4.44c1.532 0 2.923-1.192 3.348-2.991M7.688 16.667c.343.44.591.98.705 1.578l.235 1.222c.15.785.732 1.283 1.343 1.283.587 0 1.151-.46 1.326-1.205l.677-2.878z"
      />
    </svg>
  );
};
export default Copilot;
