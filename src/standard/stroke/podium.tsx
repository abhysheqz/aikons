import React from "react";
const Podium: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 13.997H6.33a1 1 0 0 1-.983-.816L4.222 7.184A1 1 0 0 1 5.205 6h13.59a1 1 0 0 1 .984 1.184l-1.123 6a1 1 0 0 1-.984.817l-3.172-.003"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 6 .81-3.243A1 1 0 0 1 7.78 2H9m9 4-.81-3.243A1 1 0 0 0 16.22 2H15M9.5 12l.5 6.5h-.84a1 1 0 0 0-.92.606L7.3 21.303a.5.5 0 0 0 .46.697h8.483a.5.5 0 0 0 .46-.697l-.942-2.197a1 1 0 0 0-.92-.606H14l.5-6.5"
      />
    </svg>
  );
};
export default Podium;
