import React from "react";
const CloudLittleSnow: React.FC<
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
        d="M10.076 13.31a1 1 0 0 1 1.414-.034l.51.486.51-.486a1 1 0 0 1 1.38 1.448l-.44.419.44.419a1 1 0 0 1-1.38 1.448l-.51-.486-.51.486a1 1 0 0 1-1.38-1.448l.44-.42-.44-.418a1 1 0 0 1-.034-1.414m-3.8 4.715a1 1 0 0 1 1.414-.035l.51.486.51-.486a1 1 0 0 1 1.38 1.448l-.44.42.44.418a1 1 0 0 1-1.38 1.448l-.51-.486-.51.486a1 1 0 1 1-1.38-1.448l.44-.419-.44-.419a1 1 0 0 1-.034-1.413m7.6 0a1 1 0 0 1 1.414-.035l.51.486.51-.486a1 1 0 0 1 1.38 1.448l-.44.42.44.418a1 1 0 0 1-1.38 1.448l-.51-.486-.51.486a1 1 0 0 1-1.38-1.448l.44-.419-.44-.419a1 1 0 0 1-.034-1.413"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 13a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1 1.229 10.063A2.501 2.501 0 0 0 15.8 16.52l-.106-.056a2.5 2.5 0 0 0-.27-1.322A2.501 2.501 0 0 0 12 11.806a2.501 2.501 0 0 0-3.424 3.337c-.212.411-.302.87-.27 1.322l-.106.055a2.5 2.5 0 0 0-3.648 1.685A5.75 5.75 0 0 1 1.25 13"
      />
    </svg>
  );
};
export default CloudLittleSnow;
