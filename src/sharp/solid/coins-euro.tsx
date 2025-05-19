import React from "react";
const CoinsEuro: React.FC<
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
        d="M4.032 7.6c-.184.77-.282 1.574-.282 2.4 0 5.66 4.59 10.25 10.25 10.25.826 0 1.63-.098 2.4-.282A8.75 8.75 0 1 1 4.032 7.6"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m.657 4c-2.012 0-3.484 1.823-3.484 3.861v.139H10v1.5h1.173v.139c0 2.038 1.472 3.861 3.484 3.861 1.317 0 2.42-.8 3.006-1.907l-1.326-.702c-.37.7-1.008 1.109-1.68 1.109-1.008 0-1.984-.963-1.984-2.361v-.139h2.25v-1.5h-2.25v-.139c0-1.398.976-2.361 1.984-2.361.672 0 1.31.409 1.68 1.109l1.326-.702c-.586-1.107-1.69-1.907-3.006-1.907"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsEuro;
