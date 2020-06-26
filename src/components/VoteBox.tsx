import React, { useState, useEffect, useCallback } from "react";
import { Box, Text, DropButton, Button } from "grommet";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import FlipNumbers from "react-flip-numbers";

import { ReactComponent as Ticket } from "../assets/Ballot.svg";
import { ReactComponent as VoteBoxFront } from "../assets/VoteBoxFront.svg";
import { ReactComponent as VoteBoxBack } from "../assets/VoteBoxBack.svg";

type VoteBoxProps = {
  userVoteCount: number;
  totalVoteCount: number;
  handleClick: () => void;
};

export const VoteBox: React.FC<VoteBoxProps> = ({
  userVoteCount,
  totalVoteCount,
  handleClick,
}) => {
  const [frame, setFrame] = useState("enter");

  useEffect(() => {}, [userVoteCount]);

  function handleVoteClick(setFrame) {
    setFrame("exit");
    setTimeout(() => {
      setFrame("hover");
    }, 1000);
    handleClick();
  }

  const containerVariants = {
    enter: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.2,
      y: 10,
    },
    exit: {
      scale: 1,
      y: 0,
    },
  };

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
      opacity: 1,
    },
    hover: {
      scale: 1.3,
      y: -60,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      y: 0,
    },
  };

  const secondTicketVariation = {
    enter: {
      scale: 1.2,
      y: -50,
      opacity: 1,
    },
    hover: {
      opacity: 1,
      scale: 1.3,
      y: -74,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 15,
        delay: 0.05,
      },
    },
    exit: {
      scale: 0.2,
      opacity: 0,
      y: 0,
    },
  };
  const thirdTicketVariation = {
    enter: {
      scale: 1.1,
      y: -57,
      opacity: 1,
    },
    hover: {
      opacity: 1,
      scale: 1.2,
      y: -83,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1,
      },
    },
    exit: {
      scale: 0.2,
      opacity: 0,
      y: 0,
    },
  };

  const voteCost = (userVoteCount + 1) ** 2;

  return (
    <Box
      height="small"
      align="center"
      pad={{
        top: "40px",
      }}
      overflow="visible"
    >
      <Button
        plain
        focusIndicator={false}
        a11yTitle={`Vote for this option for the cost of ${voteCost} tickets`}
        onClick={() => handleVoteClick(setFrame)}
        onFocus={() => setFrame("hover")}
        onBlur={() => setFrame("enter")}
      >
        <motion.div
          onHoverStart={() => setFrame("hover")}
          onHoverEnd={() => setFrame("enter")}
          animate={frame}
          initial={"enter"}
          variants={containerVariants}
          style={{ position: "relative" }}
        >
          <Box flex direction="column" justify="center">
            <motion.div style={{ zIndex: 0, display: "flex" }}>
              <VoteBoxBack></VoteBoxBack>
            </motion.div>
            {voteCost > 2 && (
              <motion.div
                variants={thirdTicketVariation}
                style={{
                  left: 37,
                  top: 20,
                  position: "absolute",
                }}
              >
                <Ticket width="16px" />
              </motion.div>
            )}
            {voteCost > 1 && (
              <motion.div
                variants={secondTicketVariation}
                style={{
                  left: 35,
                  top: 20,
                  position: "absolute",
                }}
              >
                <Ticket width="20px" />
              </motion.div>
            )}
            <motion.div
              variants={ticketVariants}
              style={{
                left: 32,
                top: 20,
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
            <motion.div style={{ zIndex: 2, display: "flex" }}>
              <VoteBoxFront></VoteBoxFront>
            </motion.div>
          </Box>
        </motion.div>
      </Button>
      <Text margin={{ vertical: "small" }} weight={"bold"}>
        <DropButton
          dropAlign={{}}
          dropContent={
            <Box pad="medium">
              You used:{" "}
              <input
                type="number"
                value={userVoteCount / userVoteCount}
                onChange={() => {}}
              ></input>{" "}
              tickets for {userVoteCount} votes.
              <p>Total of {totalVoteCount} votes.</p>
            </Box>
          }
        >
          <Box flex direction="row" align="center">
            <FlipNumbers
              height={19}
              width={12}
              color="black"
              perspective={200}
              play
              numbers={String(totalVoteCount)}
            >
              {totalVoteCount}
            </FlipNumbers>

            <Text size="large" margin={{ left: "xsmall" }}>
              Votes
            </Text>
          </Box>
        </DropButton>
      </Text>
    </Box>
  );
};
