import React from "react";
const ArtificialIntelligence_02: React.FC<
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
        d="M1.75 10.25c0 2.9 1.372 5.48 3.5 7.124v5.376h11v-2.71l2.863-.954 1.018-3.563 1.704-.852a.75.75 0 0 0 .289-1.087l-2.377-3.565a9 9 0 0 0-17.997.231m8.258-4H8.493l-2.468 6.168 1.393.557.69-1.725h2.284l.69 1.725 1.393-.557zm-.215 3.5H8.708l.542-1.356zm4.957 3v-6.5h-1.5v6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_02;
