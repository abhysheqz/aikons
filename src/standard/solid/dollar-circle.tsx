import React from "react";
const DollarCircle: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1m.75 5.25a.75.75 0 0 0-1.5 0v.814a3.8 3.8 0 0 0-1.646.695c-.64.482-1.104 1.205-1.104 2.065 0 .758.263 1.463.95 1.936.626.431 1.5.592 2.55.592.956 0 1.522.147 1.834.355.247.165.416.42.416.969 0 .466-.189.75-.521.953-.378.232-.97.371-1.729.371-.695 0-1.292-.196-1.695-.474-.405-.28-.555-.593-.555-.85a.75.75 0 0 0-1.5 0c0 .889.522 1.613 1.202 2.083a4.3 4.3 0 0 0 1.798.686v.805a.75.75 0 0 0 1.5 0v-.79c.64-.07 1.253-.239 1.764-.552.753-.463 1.236-1.217 1.236-2.232 0-.933-.331-1.715-1.084-2.217-.688-.458-1.622-.607-2.666-.607-.95 0-1.45-.156-1.7-.327-.188-.13-.3-.313-.3-.7 0-.286.152-.6.507-.869.356-.268.881-.456 1.493-.456s1.137.188 1.493.456c.355.268.507.583.507.868a.75.75 0 0 0 1.5 0c0-.86-.464-1.583-1.104-2.065a3.8 3.8 0 0 0-1.646-.695z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DollarCircle;
