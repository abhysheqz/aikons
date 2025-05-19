import React from "react";
const Vision: React.FC<
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
        d="M1.501 2.5a1 1 0 0 1 1-1h5.687v2H3.5v4.687h-2zm19 1h-4.687v-2h5.687a1 1 0 0 1 1 1v5.687h-2zM1.5 21.5v-5.687h2V20.5h4.688v2H2.5a1 1 0 0 1-1-1m19-1v-4.687h2V21.5a1 1 0 0 1-1 1h-5.686v-2zM20.743 12.236c-.243.322-.646.854-.803 1.035a17.6 17.6 0 0 1-1.792 1.797C16.654 16.357 14.482 17.75 12 17.75s-4.654-1.393-6.147-2.682a17.6 17.6 0 0 1-1.792-1.796c-.157-.182-.56-.714-.804-1.036L3.078 12l.18-.236c.244-.322.647-.854.804-1.035a17.6 17.6 0 0 1 1.792-1.797C7.347 7.643 9.52 6.25 12 6.25c2.48 0 4.653 1.393 6.147 2.682.758.655 1.37 1.308 1.792 1.797.156.181.56.713.803 1.035l.18.236zM12 14.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vision;
