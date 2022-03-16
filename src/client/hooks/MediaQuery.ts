import { useMediaQuery, Theme } from "@mui/material";

export const useMobile = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return { isMobile };
};
