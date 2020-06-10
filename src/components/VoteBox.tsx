import React from "react";
import { Box, Text, DropButton, Button } from "grommet";
import { motion } from "framer-motion";

import { ReactComponent as Ticket } from "../assets/Ballot.svg";
import { ReactComponent as VoteBoxFront } from "../assets/VoteBoxFront.svg";
import { ReactComponent as VoteBoxBack } from "../assets/VoteBoxBack.svg";

type VoteBoxProps = {
  voteCost: number;
  voteCount: number;
  handleClick: () => void;
};

export const VoteBox: React.FC<VoteBoxProps> = ({
  voteCost,
  voteCount,
  handleClick,
}) => {
  const containerVariants = {
    enter: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
    exit: {
      scale: 1,
    },
  };

  const voteBoxVariants = {};
  const costVariant = {
    enter: {
      opacity: 0,
      x: 30,
    },
    hover: {
      opacity: 1,
      x: 40,
      color: "#7916ab",
    },
    exit: {
      x: 30,
      opacity: 0,
    },
  };

  const ticketVariants = {
    enter: {
      scale: 1.2,
      y: -40,
    },
    hover: {
      scale: 1.3,
      y: -60,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 0,
    },
  };

  return (
    <Box
      height="small"
      flex
      align="center"
      pad={{
        top: "40px",
      }}
    >
      <Button plain onClick={handleClick}>
        <motion.div
          initial={"enter"}
          whileHover={"hover"}
          whileTap={"exit"}
          variants={containerVariants}
          style={{ position: "relative" }}
        >
          <Box flex direction="column" justify="center">
            <motion.div
              variants={voteBoxVariants}
              style={{ zIndex: 0, display: "flex" }}
            >
              <VoteBoxBack></VoteBoxBack>
            </motion.div>
            <motion.div
              variants={ticketVariants}
              style={{
                left: 32,
                top: 10,
                position: "absolute",
              }}
            >
              <Ticket />
              <motion.div
                variants={{ ...ticketVariants, ...costVariant }}
                style={{
                  left: 0,
                  top: 5,
                  width: "5rem",
                  position: "absolute",
                }}
              >
                <Text>× {voteCost}</Text>
              </motion.div>
            </motion.div>
            <motion.div
              variants={voteBoxVariants}
              style={{ zIndex: 2, display: "flex" }}
            >
              <VoteBoxFront></VoteBoxFront>
            </motion.div>
          </Box>
        </motion.div>
      </Button>
      <Text margin={{ vertical: "small" }} weight={"bold"}>
        <DropButton
          dropAlign={{ left: "left", top: "top" }}
          dropContent={
            <Box pad="medium">
              You used: <input type="number" value={voteCost}></input> tickets
              for {voteCount / voteCost} votes.
              <p>Total of {voteCount} votes from 4 people.</p>
            </Box>
          }
        >
          {voteCount} votes
        </DropButton>
      </Text>
    </Box>
  );
};
