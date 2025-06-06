import React from "react";
const Hold_04: React.FC<
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
        d="M10.56 8.382a.433.433 0 0 0 .431-.435V4.453c0-.161 0-.242.046-.315s.107-.103.23-.163a2.24 2.24 0 0 1 .983-.225c.391 0 .76.1 1.08.275.114.063.17.094.213.165.042.07.042.148.042.301v3.89a.433.433 0 1 0 .864 0v-3.07c0-.208 0-.311.07-.395.07-.083.156-.099.328-.13q.196-.036.403-.036c.659 0 1.251.283 1.663.734a.5.5 0 0 1 .109.15c.02.052.02.104.02.208v3.263a.433.433 0 1 0 .865 0V6.121c0-.074 0-.111.01-.15a.33.33 0 0 1 .211-.21c.039-.011.067-.011.122-.011A2.25 2.25 0 0 1 20.5 8v4.512c0 1.846 0 2.976-.336 3.91a5.8 5.8 0 0 1-3.561 3.5c-.946.328-2.09.328-3.976.328h-.183c-.984 0-1.828-.007-2.403-.13a5.87 5.87 0 0 1-2.83-1.487c-.45-.428-.81-.96-1.399-1.826l-.636-.937c-.487-.717-.883-1.3-1.158-1.805-.287-.525-.478-1.025-.511-1.583q-.03-.482.067-.956c.111-.548.371-1.017.728-1.497.333-.447.845-1.012 1.405-1.63.386-.372.58-.558.745-.51a.3.3 0 0 1 .068.028c.15.087.15.355.15.891V12a.433.433 0 1 0 .864 0V5.265c0-.113 0-.169.024-.225a.5.5 0 0 1 .126-.156 2.24 2.24 0 0 1 2.065-.578c.165.037.247.055.313.138.065.082.065.181.065.38v3.123c0 .24.194.435.432.435"
      />
    </svg>
  );
};
export default Hold_04;
