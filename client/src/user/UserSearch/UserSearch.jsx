import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { MainContainer, MainSearch } from "../../Style";
import InputCustom from "../../utilis/inputUtilis/InputCustom";
import { handleChange } from "../../utilis/handleFuctions/handleMain";
import { handleSubmit } from "../../services/post/PostMethods";
import ChatComponent from "../../components/ChatComponent/ChatComponent";

const UserSearch = () => {
  const [search, setSearch] = useState({
    question: "",
    questionlist: [],
  });

  const handleSearchSubmit = async () => {
    try {
      const singleQuestion = search.question;
      
      // Add user question to questionlist
      setSearch((previous) => ({
        ...previous,
        questionlist: [
          ...previous.questionlist,
          { userquestion: singleQuestion },
        ],
        question: "", // Clear input field after submitting
      }));

      // Send the question to the server and add AI response to questionlist
      const data = await handleSubmit({ singleQuestion });
      setSearch((previous) => ({
        ...previous,
        questionlist: [...previous.questionlist, { aianswer: data.reply }],
      }));
    } catch (error) {
      console.error("Error in handleSearchSubmit:", error);
    }
  };

  const { questionlist, question } = search;

  return (
    <Box sx={MainContainer}>
      <Box>
        <InputCustom
          label="Ask anything..."
          sx={MainSearch}
          name="question"
          onChange={(e) => handleChange(e, setSearch)}
          value={question}
          onClick={handleSearchSubmit}
        />
      </Box>
     
      <Box>
        {/* Pass questionlist to ChatComponent */}
        <ChatComponent questionlist={questionlist} />
      </Box>
    </Box>
  );
};

export default UserSearch;
