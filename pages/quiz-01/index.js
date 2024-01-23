import {
  BackGroundDiv,
  Email,
  EmailInput,
  SectionLine,
  SectionArticle,
  SectionArticle1,
  MenuType1,
  HeaderDiv,
  HeaderSpan,
  ItemArticle,
  ItemArticle1,
} from "../../styles/emotion";
import "@fortawesome/fontawesome-free/js/all.js";
export default function EmotionPage() {
  return (
    <BackGroundDiv>
      <SectionArticle>
        <HeaderSpan>나의 살던 고향은 My</HeaderSpan>
        <HeaderDiv>
          <i class="fa-regular fa-face-angry"></i>
          <span>Dong Jae</span>
          <i class="fa-solid fa-angle-right"></i>
        </HeaderDiv>
      </SectionArticle>
      <SectionArticle1>
        <MenuType1>announcement</MenuType1>
        <MenuType1>event</MenuType1>
        <MenuType1>FAQ</MenuType1>
        <MenuType1>Q&A</MenuType1>
      </SectionArticle1>
      <SectionLine />
      <SectionArticle>
        <ItemArticle>
          <span>Q.01</span>
          <span>how to write a review</span>
        </ItemArticle>
        <HeaderDiv>
          <i class="fa-solid fa-angle-down"></i>
        </HeaderDiv>
      </SectionArticle>
    </BackGroundDiv>
  );
}
