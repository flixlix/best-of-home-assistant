import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination as MuiPagination,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageContainer from "@/layout/PageContainer";
import { theme } from "@/styles/theme";
import { useMyStore } from "@/store/store";

interface PaginationProps {
  page: number;
  pagesNumber: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({ page, pagesNumber, setPage, itemsPerPage, setItemsPerPage }: PaginationProps) {
  const { theme: themeMode } = useMyStore();
  const isWideEnough = useMediaQuery((theme: any) => theme.breakpoints.up("md"));
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: isWideEnough ? "space-between" : "center",
        py: 2,
      }}
    >
      {isWideEnough && <Box width={150} />}
      <MuiPagination
        siblingCount={1}
        boundaryCount={isWideEnough ? 1 : 0}
        showFirstButton
        showLastButton
        sx={{
          "& .Mui-selected": {
            fontWeight: "bold",
          },
        }}
        count={pagesNumber}
        page={page}
        onChange={(_, p) => setPage(p)}
      />
      {isWideEnough && (
        <FormControl
          sx={{
            minWidth: 150,
          }}
        >
          <InputLabel id="select-items-per-page-label">Projects per Page</InputLabel>
          <Select
            labelId="select-items-per-page-label"
            id="demo-simple-select"
            value={itemsPerPage}
            label="Projects per Page"
            onChange={(e) => setItemsPerPage(e.target.value as number)}
            sx={{
              "& .MuiSelect-icon": {
                color: themeMode === "light" ? theme.palette.text.primary : "#fff",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: theme.shape.borderRadius + "px",
                  "& .MuiMenuItem-root": {
                    marginY: 0,
                    paddingY: 1.5,
                    paddingX: 2,
                  },
                  "& .MuiMenu-list": {
                    padding: 0,
                  },
                },
              },
            }}
          >
            {[24, 48, 72, 96].map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
}
