import styled from 'styled-components';

export const Div = styled.div`
  border-radius: 4px 4px 0 0;
  border-left: 1px solid #dcdacb;
  border-right: 1px solid #dcdacb;
  border-top: 1px solid #dcdacb;
  box-sizing: border-box;
  margin: 0;
  display: block;
`;

export const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const Button = styled.button`
  color: #0f7c90;
  background-color: transparent;
  min-width: auto;
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  min-width: 10rem;
  padding: 0 1.2rem;
  user-select: none;
  vertical-align: bottom;
  white-space: nowrap;
  font-weight: 700;
`;

export const SectionHeader = styled.div`
  background-color: #fbfbf8;
  height: 52px;
  border: 1px solid #dcdacc;
  margin-top: -1px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SectionTitle = styled.span`
  float: left;
  font-size: 1.6rem;
  line-height: 1.2;
  font-weight: 700;
`;

export const SectionTotalLectures = styled.span`
  float: right;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.4rem;
`;

export const SectionElementsBlock = styled.div`
  border: 1px solid #dcdacc;
  margin-top: -1px;
`;

export const ElementsContainer = styled.div`
  margin: 15px;
`;

export const CourseSectionsBlock = styled.div`
  max-width: 600px;
  padding: 0px;
`;

export const ContentHeaderWrapper = styled.div`
  max-width: 600px;
  max-height: 40px;
`;

export const ExpandCollapse = styled.button`
  color: #0f7c90;
  background-color: transparent;
  min-width: auto;
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  min-width: 10rem;
  padding: 0 1.2rem;
  user-select: none;
  vertical-align: bottom;
  white-space: nowrap;
  font-weight: 700;
  float: right
`;

export const HeaderInfo = styled.div`
  max-width: 450px;
  float: left;
`;

export const Preview = styled.a`
  float: right;
  margin: 0px;
`;

export const RightSideInfo = styled.span`
  float: right;
  margin: 0px;
`;

export const HasChild = styled.div`
  margin: 5px;
`;