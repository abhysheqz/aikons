import React from "react";
const Popcorn: React.FC<
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
        d="M18.823 5.287c-.066-1.657-1.114-2.95-2.432-3.585-1.331-.642-3.024-.655-4.368.32-1.35-.98-3.05-.961-4.384-.312-1.318.643-2.362 1.945-2.416 3.607A3.5 3.5 0 0 0 3.22 6.42c-.639.711-.952 1.642-.97 2.551-.016.908.263 1.848.88 2.573.632.74 1.576 1.206 2.771 1.206h12.174c1.193 0 2.137-.47 2.771-1.21.62-.724.91-1.664.904-2.575-.006-.91-.305-1.847-.935-2.564a3.42 3.42 0 0 0-1.992-1.113"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.178 22.75H8.641a2.75 2.75 0 0 1-2.697-2.21l-1.296-6.427q.597.136 1.255.138h8.12zM15.53 14.251l-.844 8.5h.676a2.75 2.75 0 0 0 2.696-2.21l1.293-6.434q-.606.143-1.275.144z"
      />
    </svg>
  );
};
export default Popcorn;
