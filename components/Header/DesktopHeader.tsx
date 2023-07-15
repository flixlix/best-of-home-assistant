import { Button, Link, PaletteMode, Stack, Typography } from "@mui/material";
import { HeaderContentProps } from "./Header";
import PageContainer from "@/layout/PageContainer";
import HALogo from "./HALogo";
import ThemeSwitcher from "./ThemeSwitcher";

export default function DesktopHeader({ title, acitveLinkIndex, navigationLinks }: HeaderContentProps) {
  return (
    <PageContainer
      style={{
        height: "100%",
      }}
    >
      <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-between"} height={"100%"}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <HALogo />
            <Typography variant="h5" component="h1">
              {title}
            </Typography>
          </Stack>
        </Link>
        <Stack direction="row" spacing={2}>
          {navigationLinks?.map((link, index) => (
            <Button
              key={link.title}
              href={link.href}
              sx={{
                boxShadow:
                  acitveLinkIndex !== undefined && acitveLinkIndex === index ? "0 0 10px rgba(0, 0, 0, 0.2)" : "none",
              }}
            >
              {link.title}
            </Button>
          ))}
          <ThemeSwitcher />
        </Stack>
      </Stack>
    </PageContainer>
  );
}
