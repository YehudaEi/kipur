import {
  Wrapper,
  CardImage,
  CardContainer,
  CardHeaderLogo,
  CardTitle,
  CardMiniTitle,
  UselessHorizontalLine,
  UselessDot,
  UselessDotsCOntainer,
  TextContainer,
  BackBtn,
  PersonalCircle,
  UnderPic,
} from "./articleStyle";
import ArrowIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import logo from "../../assets/pictures/logo.webp";

export default function Article({ setShowCard, article }) {
  return (
    <>
      <Wrapper>
        {console.log(article)}
        <BackBtn onClick={() => setShowCard(false)}>
          <ArrowIcon
            sx={{
              color: "white",
              width: "1rem",
              paddingLeft: "5px",
              marignLeft: "0.2rem",
            }}
          />
        </BackBtn>
        <CardHeaderLogo src={logo} />
        <div style={{ background: "gray" }}>
          <CardImage
            style={{ height: article.article ? "25rem" : "17rem" }}
            imgSrc={
              article.article
                ? article.pic
                : require("../../assets/pictures/back.png")
            }
          />
          {article.article ? "" : <PersonalCircle src={article.pic} />}
        </div>
        <CardContainer>
          {article.underPic ? <UnderPic>{article.underPic}</UnderPic> : ""}
          {article.article ? (
            <>
              <CardTitle>{article.title}</CardTitle>
              {article.miniTitle ? (
                <CardMiniTitle>{article.miniTitle}</CardMiniTitle>
              ) : (
                ""
              )}
              <UselessDotsCOntainer>
                <UselessDot />
                <UselessDot />
                <UselessDot />
              </UselessDotsCOntainer>
            </>
          ) : (
            <>
              <CardTitle>{article.name}</CardTitle>
              <CardTitle style={{ marginTop: 0 }}>{article.unit}</CardTitle>
              <CardMiniTitle>{article.years}</CardMiniTitle>
              <UselessDotsCOntainer>
                <UselessDot />
                <UselessDot />
                <UselessDot />
              </UselessDotsCOntainer>
            </>
          )}
          <TextContainer>{article.text}</TextContainer>
        </CardContainer>
      </Wrapper>
    </>
  );
}
