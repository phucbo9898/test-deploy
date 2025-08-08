import { useState } from "#app";

export const useSplashState = () => {
  return useState("splash", () => true);
};
