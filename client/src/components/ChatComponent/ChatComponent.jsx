import React from "react";
import Styles from "./chatcomponet.module.css";
import { Box, Typography } from "@mui/material";

const ChatComponent = ({ questionlist }) => {
  return (
    <Box className={Styles.mainContainer}>
      {questionlist.map((item, index) => (
        <Box key={index} className={Styles.chatMessages}>
          {item.userquestion && (
            <Box className={`${Styles.message} ${Styles.outgoing}`}>
              <Typography>{item.userquestion}</Typography>
            </Box>
          )}
          {item.aianswer && (
            <Box className={`${Styles.message} ${Styles.incoming}`}>
              <Typography>{item.aianswer}</Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ChatComponent;
