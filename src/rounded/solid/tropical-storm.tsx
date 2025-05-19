import React from "react";
const TropicalStorm: React.FC<
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
        d="M20.364 3.092c-6.666-1.05-10.64.473-12.965 2.443-2.252 1.908-2.838 4.134-2.915 4.468a7.3 7.3 0 0 0-.076 3.464 7.5 7.5 0 0 0 1.541 3.153l.002.002.644.793-3.254 2.119a.75.75 0 0 0 .294 1.37c6.667 1.057 10.641-.467 12.968-2.439 2.252-1.91 2.84-4.14 2.917-4.473.304-1.13.33-2.316.076-3.464a7.5 7.5 0 0 0-1.542-3.154l-.001-.001-.644-.793 3.25-2.117a.75.75 0 0 0-.295-1.37M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TropicalStorm;
