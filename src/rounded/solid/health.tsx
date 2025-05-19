import React from "react";
const Health: React.FC<
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
        d="M12.584 3.469c1.616-1.214 4.29-1.942 7.271-.114 2.061 1.265 3.221 3.906 2.814 6.94-.409 3.05-2.382 6.498-6.562 9.592C14.656 20.96 13.591 21.75 12 21.75c-1.59 0-2.655-.789-4.106-1.863-4.18-3.094-6.153-6.543-6.562-9.592-.407-3.034.752-5.675 2.814-6.94 2.98-1.828 5.655-1.1 7.27.114.266.2.449.336.584.428.136-.092.319-.229.584-.428M11 9a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Health;
