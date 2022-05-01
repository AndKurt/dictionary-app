import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

interface INestedList {
  title: string;
  words: string[];
}

export const NestedList = (props: INestedList) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  if (!props.words.length) {
    return null;
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 300,
        bgcolor: 'background.paper',
      }}
      component="nav"
      aria-labelledby={props.title}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={props.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit collapsedSize="small">
        {props.words.map((word, index) => (
          <ListItemText key={`${index}-${word}`} primary={word} sx={{ pl: 4 }} />
        ))}
      </Collapse>
    </List>
  );
};
