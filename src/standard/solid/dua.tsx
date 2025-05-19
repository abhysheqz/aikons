import React from "react";
const Dua: React.FC<
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
        d="M11.417 2.484a1 1 0 0 1-.34 1.373 2.229 2.229 0 1 0 3.059 3.059 1 1 0 1 1 1.713 1.032 4.229 4.229 0 1 1-5.804-5.804 1 1 0 0 1 1.372.34"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 4a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.991 10.947a3.2 3.2 0 0 0-.89-.188c-.948-.066-1.638.369-1.883.522l-.003.002a1 1 0 0 0-.135.102l-2.326 2.087V22H16a1 1 0 0 0 .735-.322l5.47-5.925A3 3 0 0 0 23 13.718V7a2 2 0 0 0-2-2c-.55 0-1.076.223-1.509.52v7.404a.85.85 0 0 1-.243.595l-2.957 3.013a.75.75 0 1 1-1.07-1.05l2.77-2.824zM4.518 5.526C4.082 5.226 3.554 5 3 5a2 2 0 0 0-2 2v7.109a2 2 0 0 0 .53 1.357l5.735 6.212A1 1 0 0 0 8 22h3.254v-8.52L8.92 11.384a1 1 0 0 0-.135-.102l-.003-.002c-.245-.153-.935-.588-1.883-.522-.332.023-.623.09-.881.185v1.714l2.77 2.824a.75.75 0 1 1-1.07 1.05L4.76 13.52a.85.85 0 0 1-.243-.595z"
      />
    </svg>
  );
};
export default Dua;
