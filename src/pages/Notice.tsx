import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import PostBox from "../components/postPage/PostList";
import SearchBar from "../components/postPage/SearchBar";
import TitleBox from "../components/postPage/TitleBox";
import Button from "../components/postPage/Button";
import { useNavigate } from "react-router-dom";
import PostList from "../components/postPage/PostList";

const Container = styled.div`
  margin-top: 50px;
  form {
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export default function Notice() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <TitleBox
          title="공지사항"
          firstExplain="과외바다의 새소식, 이벤트, 행사 정보를 공유하는 공간입니다."
        />
        <SearchBar placeholder="제목을 입력해주세요!" />
        <Button onClick={() => navigate("write")}>✏️ 작성하기</Button>
        <PostList category="notice" />
      </Container>
    </Wrapper>
  );
}
