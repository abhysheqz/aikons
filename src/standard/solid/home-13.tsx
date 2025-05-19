import React from "react";
const Home_13: React.FC<
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
        d="M13.577 2.468a2.75 2.75 0 0 0-3.154 0L2.206 8.219a2.242 2.242 0 0 0 .846 4.036l.73.145.37 7.024a2.75 2.75 0 0 0 2.746 2.605H17.2a2.75 2.75 0 0 0 2.734-2.462l.757-7.187.327-.082a2.287 2.287 0 0 0 .757-4.092zM10.25 14.779a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M12 11.53a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_13;
