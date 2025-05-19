import React from "react";
const BodyWeight: React.FC<
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
        d="M12.003 14.465v-2.5m-4.998 1.953v-2.453m9.998 2.453v-2.453M12.005 8.463c3.722 0 7.171-.74 10-2v6c-2.829 1.26-6.278 2-10 2s-7.172-.74-10-2v-6c2.828 1.26 6.278 2 10 2ZM19.004 19.465q-7 2-14 0"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.825 3.46c.7 1.929.961 2.962 1.114 4.589M19.231 3.46c-.7 1.928-.96 2.96-1.114 4.588M5.42 15.95c-.532 1.793-1.502 3.668-1.415 5.51m14.573-5.51c.532 1.793 1.502 3.668 1.416 5.51"
      />
    </svg>
  );
};
export default BodyWeight;
