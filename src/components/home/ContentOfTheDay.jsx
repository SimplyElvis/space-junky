import { useEffect, useState } from "react";
import axios from "../../api/axios.js";
import { Title, Paragraph, Loading } from "../styledCompnents";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: var(--page-padding);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MediaImage = styled.img`
  min-width: 330px;
  width: 100%;
  max-width: 500px;
  object-fit: contain;
`;

const MediaVideo = styled.video`
  min-width: 330px;
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  object-position: center;
`;

const NoteSection = styled.section`
  text-align: center;
  max-width: 600px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.95rem;
  color: var(--clr-white);
`;

const ContentOfTheDay = () => {
  const [showContent, setshowContent] = useState(false);
  const [title, setTitle] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [mediaElement, setMediaElement] = useState("image");
  const [copyright, setCopyright] = useState("");

  const fetchContent = async () => {
    try {
      const response = await axios.get("/apod");
      setTitle(response.data.title);
      setDesc(response.data.explanation);
      setMediaType(response.data.media_type);
      setMediaUrl(response.data.media_url);
      setDate(response.data.date);
      setCopyright(response.data.copyright);
      if (mediaType !== mediaElement) {
        setMediaElement(mediaType);
      }
      setshowContent(true);
    } catch (err) {
      if (!err?.success) {
        alert("N0 SERVER RESPONSE");
        console.log("No response");
      } else if (err?.success === false) {
        console.log("server error");
      }
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <>
      {!showContent ? (
        <Loading />
      ) : (
        <Wrapper>
          <p className="offscreen" aria-live="assertive">
            Picture of the day.
          </p>
          {mediaType ? (
            <MediaImage src={mediaUrl} alt={title} />
          ) : (
            <MediaVideo controls>
              <source src={mediaUrl} />
            </MediaVideo>
          )}
          <NoteSection>
            <Title aria-live="assertive">{title}</Title>
            <Paragraph aria-live="assertive">{desc}</Paragraph>
            <section className="flex-between">
              <time>{date}</time>
              <mark>{copyright}</mark>
              <section>
                <span>tags</span>
                <span>tags</span>
                <span>tags</span>
              </section>
            </section>
          </NoteSection>
        </Wrapper>
      )}
    </>
  );
};

export default ContentOfTheDay;
