import React from "react";
const VacuumCleaner: React.FC<
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
        d="M6.77 4.2a3.56 3.56 0 0 0-3.565 3.558c0 .694.288 1.57.754 2.274q.148.223.291.388V9.25h1.743a6.75 6.75 0 0 1 6.64 5.543L13.9 21.75H9.26A4.25 4.25 0 0 0 4.25 15v-2.2c-.82-.318-1.478-1.023-1.922-1.693-.634-.958-1.078-2.202-1.078-3.35A5.514 5.514 0 0 1 6.77 2.25a7.69 7.69 0 0 1 6.952 4.395L19.95 19.8h2.801v1.95h-7.33V19.8h2.367L11.955 7.477A5.73 5.73 0 0 0 6.77 4.2M3.25 18.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VacuumCleaner;
