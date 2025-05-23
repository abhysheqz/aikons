import React from "react";
const Mining_03: React.FC<
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
        d="M15.707 2.714c.181-.03.366-.03.547 0 .328.054.583.214.792.383.192.154.4.363.625.587l1.644 1.645c.225.224.434.433.588.625.17.21.33.464.383.793.03.18.03.365 0 .545-.054.33-.214.584-.383.794-.154.191-.363.4-.588.625l-2.57 2.57c-.21.21-.438.44-.71.568a1.69 1.69 0 0 1-1.431 0 1.7 1.7 0 0 1-.415-.285l-2.753-2.753a1.7 1.7 0 0 1-.285-.414 1.69 1.69 0 0 1 0-1.433c.128-.272.357-.5.568-.71l2.57-2.57a9 9 0 0 1 .625-.587c.21-.169.464-.33.793-.383"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 13.25a.75.75 0 0 1 .75.75v.583h.813c.976 0 1.687.83 1.687 1.75V17c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75h-.813V22a.75.75 0 0 1-1.5 0v-.583H16a.75.75 0 0 1 0-1.5h.188v-3.834H16a.75.75 0 0 1 0-1.5h1.75V14a.75.75 0 0 1 .75-.75m-.812 2.833v1.167h2.375c.058 0 .187-.066.187-.25v-.667c0-.184-.129-.25-.187-.25zm2.375 2.667h-2.375v1.167h2.375c.058 0 .187-.066.187-.25V19c0-.184-.129-.25-.187-.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.306 2.547A14.1 14.1 0 0 0 9.1 1.35c-.83-.102-1.523-.11-2.013-.093-.245.009-.568.02-.803.064h-.001a.75.75 0 0 0-.259 1.393l.003.001s.242.148.37.23c.256.166.64.424 1.137.788.66.481 1.522 1.148 2.555 2.03zM10.199 9.696l-7.337 7.337-.016.017a2.196 2.196 0 0 0 3.121 3.088l7.337-7.337zM21.592 13.475a14.1 14.1 0 0 0-1.14-3.78l-2.057 2.057.105-.002c.931 0 1.73.566 2.073 1.373.37.059.712.18 1.018.352"
      />
    </svg>
  );
};
export default Mining_03;
