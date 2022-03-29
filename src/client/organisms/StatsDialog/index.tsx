import React, { useState } from "react";
import styled from "@emotion/styled";
import { Divider, IconButton, Typography } from "@mui/material";
import { Analytics } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Dialog } from "../../molecules/Dialog";
import { getStats } from "../../stats";

type StatsItemProps = {
  name: string;
  value: number;
};

const StatsItem: React.FC<StatsItemProps> = ({ name, value }) => {
  return (
    <StatsItemContainer>
      <StatsItemValue variant="h3">{value}</StatsItemValue>
      <StatsItemName>{name}</StatsItemName>
    </StatsItemContainer>
  );
};

const StatsItemContainer = styled.div`
  margin: 0.5em;
  width: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StatsItemValue = styled(Typography)``;

const StatsItemName = styled.span`
  height: 36px;
  font-size: 12px;
`;

type DistributionItemProps = {
  index: string;
  count: number;
  max: number;
};

const DistributionItem: React.FC<DistributionItemProps> = ({
  index,
  count,
  max,
}) => {
  return (
    <DistributionContainer>
      <DistributionIndex>{index}</DistributionIndex>
      <DistributionBar value={max === 0 ? 0 : Math.round((count / max) * 100)}>
        <DistributionCount>{count}</DistributionCount>
      </DistributionBar>
    </DistributionContainer>
  );
};

const DistributionContainer = styled.li`
  margin: 4px 0;
  list-style: none;
  display: flex;
`;

const DistributionIndex = styled.div`
  margin-right: 5px;
  font-weight: bold;
`;

const DistributionBar = styled.div<{ value: number }>`
  padding: 0 8px;
  display: flex;
  flex: 0 1 ${({ value }) => value}%;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.wordle.correct};
`;

const DistributionCount = styled.div`
  font-weight: bold;
`;

export const StatsDialog: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { played, winRatio, currentStreak, maxStreak, distribution } =
    getStats();
  const maxDistribution = Math.max(...Object.values(distribution));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <Analytics />
      </IconButton>
      <Dialog close={handleClose} open={open} fullScreen>
        <Title variant="h5">{t("stats.title")}</Title>
        <ContentDivider margin={10} />
        <StatsDialogContainer>
          <StatsRow>
            <StatsItem name={t("stats.played")} value={played} />
            <StatsItem
              name={t("stats.win")}
              value={Math.round(winRatio * 100)}
            />
            <StatsItem name={t("stats.currentStreak")} value={currentStreak} />
            <StatsItem name={t("stats.maxStreak")} value={maxStreak} />
          </StatsRow>
          <Subtitle variant="h5">{t("stats.distribution")}</Subtitle>
          <Distribution>
            {Object.entries(distribution).map(([index, count]) => (
              <DistributionItem
                index={index}
                count={count}
                max={maxDistribution}
              />
            ))}
          </Distribution>
        </StatsDialogContainer>
      </Dialog>
    </div>
  );
};

const Title = styled(Typography)`
  margin-top: 5px;
`;

const ContentDivider = styled(Divider)<{ margin: number }>`
  width: 100%;
  margin-top: ${({ margin }) => margin}px;
`;

const StatsDialogContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled(Typography)`
  margin-top: 15px;
`;

const Distribution = styled.ul`
  width: 100%;
  padding: 0;
`;
