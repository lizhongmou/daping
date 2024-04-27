import styled from "styled-components"

export const ScreenWrapper = styled.div`
  width: 1920px;
  height: 1080px;
  /* background-color: red; */
  /* background-image: url(${require("@/assets/images/bg.png")}); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* 定位 */
  position: absolute;
  .zhengti {
    width: 1870px;
    height: 1000px;
    /* background-color: pink; */
    position: relative;
    top: 55px;
    left: 25px;
    .first {
      width: 300px;
      height: 200px;
      /* background-color: hotpink; */
    }
  }
`
