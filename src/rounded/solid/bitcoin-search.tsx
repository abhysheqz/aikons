import React from "react";
const BitcoinSearch: React.FC<
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
        d="M16.684 16.684a.977.977 0 0 1 1.382 0l4.398 4.397a.977.977 0 1 1-1.382 1.383l-4.398-4.398a.977.977 0 0 1 0-1.382"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 11.023c0-5.398 4.375-9.773 9.773-9.773s9.773 4.375 9.773 9.773-4.376 9.773-9.773 9.773c-5.398 0-9.773-4.376-9.773-9.773m9.773-7.818a7.818 7.818 0 1 0 0 15.636 7.818 7.818 0 0 0 0-15.636"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.023 5.647c.54 0 .977.438.977.978v.488h.855c1.147 0 2.077.93 2.077 2.077v.733c0 .404-.116.78-.315 1.1.2.318.315.695.315 1.099v.733c0 1.147-.93 2.077-2.077 2.077H12v.488a.977.977 0 0 1-1.955 0v-.488H8.091a.977.977 0 0 1 0-1.955h.122v-3.91h-.122a.977.977 0 0 1 0-1.954h1.954v-.488c0-.54.438-.978.978-.978m-.855 3.42v.978h2.687a.12.12 0 0 0 .122-.122V9.19a.12.12 0 0 0-.122-.122zM12.855 12h-2.687v.977h2.687a.12.12 0 0 0 .122-.122v-.733a.12.12 0 0 0-.122-.122"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSearch;
