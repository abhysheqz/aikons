import React from "react";
const ChinaTemple: React.FC<
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
        d="M6.47 9.47A.75.75 0 0 1 7 9.25h10a.75.75 0 0 1 .53.22c.572.571 2.325 1.78 4.47 1.78a.75.75 0 0 1 .67 1.085c-.664 1.33-1.967 2.415-3.67 2.415H5c-1.703 0-3.006-1.085-3.67-2.415A.75.75 0 0 1 2 11.25c2.145 0 3.898-1.209 4.47-1.78"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.167 1.79c.319-.298.77-.54 1.3-.54h3.066c.53 0 .981.242 1.3.54 1.004.934 2.795 1.46 4.167 1.46a.75.75 0 0 1 .67 1.085q-.037.074-.076.147C18.91 5.287 17.037 5.75 16 5.75H8c-1.074 0-3.07-.591-3.69-1.454A.75.75 0 0 1 5 3.25c1.372 0 3.163-.526 4.167-1.46M6.25 6.455V8.2c.235-.098.49-.15.75-.15h10c.26 0 .515.052.75.15V6.476A6.4 6.4 0 0 1 16 6.75H8c-.536 0-1.145-.107-1.75-.295"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 22a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 15.95q-.387 0-.75-.054v6.854h5V20a2.75 2.75 0 1 1 5.5 0v2.75h5v-6.854a5 5 0 0 1-.75.054zm8.25 6.8V20a1.25 1.25 0 1 0-2.5 0v2.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChinaTemple;
