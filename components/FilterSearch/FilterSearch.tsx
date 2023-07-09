import PageContainer from "@/layout/PageContainer";
import { Project } from "@/types/Project";
import { useDebounce } from "@/utils/useDebounce";
import { MenuItem, Select, Stack, TextField, Theme, Typography, makeStyles } from "@mui/material";
import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { theme } from "@/styles/theme";
import { grey } from "@mui/material/colors";
import { Download, Star, WorkspacePremium } from "@mui/icons-material";
import { useMyStore } from "@/store/store";

interface FilterSearchProps {
  projects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export default function FilterSearch({ projects, setFilteredProjects }: FilterSearchProps) {
  const { theme: themeMode } = useMyStore();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Project[]>([]);
  const debouncedSearch = useDebounce(search, 500);
  const options = [
    {
      value: "project_score",
      label: "Project Score",
      icon: <WorkspacePremium />,
    },
    {
      value: "download_count",
      label: "Most Downloads",
      icon: <Download />,
    },
    {
      value: "star_count",
      label: "Most Stars",
      icon: <Star />,
    },
  ];
  const [sort, setSort] = useState(options[0].value);
  const fuse = new Fuse(projects, {
    keys: ["name", "description", "github_id"],
    threshold: 0.3,
    ignoreLocation: true,
  });

  useEffect(() => {
    if (debouncedSearch) {
      const results = fuse.search(debouncedSearch);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults(projects);
    }
  }, [debouncedSearch, projects, setFilteredProjects]);

  useEffect(() => {
    if (sort) {
      const sorted = [...searchResults].sort((a, b) => {
        if (sort === "project_score") {
          return b.projectrank - a.projectrank;
        } else if (sort === "download_count") {
          return b.github_release_downloads - a.github_release_downloads;
        } else if (sort === "star_count") {
          return b.star_count - a.star_count;
        }
        return 0;
      });
      setFilteredProjects(sorted);
    } else {
      setFilteredProjects(searchResults);
    }
  }, [sort, projects, searchResults]);

  return (
    <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-between"}>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            transition: theme.transitions.create(["width"]),
            "&.MuiTextField-root": {
              width: "20ch",
              "&:hover": {
                width: "30ch",
              },
              "&:focus": {
                width: "30ch",
              },
              "&:active": {
                width: "30ch",
              },
              "&:target": {
                width: "30ch",
              },
            },
          }}
        />
        <Typography variant="subtitle1" sx={{ color: grey[700] }}>
          {search && searchResults.length + " results"}
        </Typography>
      </Stack>
      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value as string)}
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
              /* ul */
              "& .MuiMenu-list": {
                padding: 0,
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Stack
              direction="row"
              gap={1}
              sx={{
                "& svg": {
                  color: grey[700],
                },
              }}
            >
              {option.icon ? option.icon : ""}
              {option.label}
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
