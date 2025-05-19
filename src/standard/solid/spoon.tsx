import React from "react";
const Spoon: React.FC<
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
        d="M17.357 1.373c1.504-.287 3.17-.118 4.278.991 1.109 1.109 1.278 2.774.991 4.279-.29 1.525-1.076 3.08-2.155 4.159-1.241 1.241-3.19 1.486-4.436 1.517-.818.02-1.565.286-2.06.793l-8.673 8.903a2.347 2.347 0 1 1-3.317-3.317l8.902-8.674c.508-.495.774-1.242.794-2.06.03-1.246.275-3.194 1.516-4.435 1.08-1.08 2.635-1.866 4.16-2.156"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spoon;
