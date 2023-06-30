import styled from "styled-components";
import TopSheet from "../components/post/TopSheet";
import FindPostList from "../components/post/FindPostList";
import Wrapper from "../components/common/Wrapper";
import { useEffect } from "react";
import useCategory from "../hooks/useCategory";
import usePostScrollPage from "../hooks/usePostScrollPage";
import { getPost } from "../store/post/api/PostReadThunk";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setCategory } from "../store/category";

const Container = styled.div`
  margin-top: 4rem;
  padding-inline: 4rem;

  @media (max-width: 650px) {
    padding-inline: 2rem;
  }
`;

export default function Teachers() {
  const [page, setPage] = usePostScrollPage();
  const [category, categoryDispatch] = useCategory();

  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();

  useEffect(() => {
    setPage(0);
    categoryDispatch(setCategory("teacher"));
  }, [categoryDispatch, setPage]);

  useEffect(() => {
    dispatch(getPost({ category, page }));
  }, [dispatch, page, category]);

  return (
    <Wrapper>
      <Container>
        <TopSheet />
        <FindPostList />
      </Container>
    </Wrapper>
  );
}
