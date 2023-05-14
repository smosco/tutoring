import { styled } from "styled-components";

interface CategoryProps {
  selected: string;
  changeSelected: (categoryName: string) => void;
}
export default function SCategory({ selected, changeSelected }: CategoryProps) {
  const categories = [
    { name: "request", text: "교습요청" },
    { name: "info", text: "교습희망정보" },
    { name: "studentInfo", text: "수강생정보" },
  ];

  return (
    <CategoryContianer>
      {categories.map((c) => (
        <a href={`#${c.name}`}>
          <li onClick={() => changeSelected(c.name)}>
            <button className={`${selected === c.name && "selected"}`}>
              {c.text}
            </button>
          </li>
        </a>
      ))}
    </CategoryContianer>
  );
}

const CategoryContianer = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00000014;
  margin-top: 3rem;

  a {
    width: 33%;
    li {
      width: 100%;
      text-align: center;

      button {
        position: relative;
        width: 100%;
        padding: 1rem;
        font-size: 1.3rem;
        font-weight: 700;

        &.selected {
          &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: -3px;
            height: 3px;
            width: 100%;
            background: black;
          }
        }
      }
    }
  }
`;
