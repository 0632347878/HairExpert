<template>
  <div>
    <section class="relative section">
      <div class="section-inner flex flex-row gap-4 justify-center lg:gap-8 max-w-[1280px] md:gap-6 sm:gap-4 mx-auto px-12 w-full">
        <div class="description-wrapper flex flex-col justify-center lg:py-2 lg:text-left lg:w-full py-52 text-center">
          <h1
            class="heading bg-text font-serif gradient leading-tight text-5xl text-koromiko uppercase xl:leading-tight xl:text-6xl">
              <span>Anna Kuchma</span>
              <span>Anna Kuchma</span>
             </h1>
          <p class="sm:text-2xl text-white text-xl"> Топ - майстер з реконструкції та естетики волосся
          </p></div>
        <div class="picture-wrapper h-fit hidden lg:block relative shrink-0 w-fit">
          <img class="master-picture" src="/master.png" alt=""></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
h1 {
  position: relative;
  height: 80px;
  @media (min-width: 850px) {
    width: 530px;
  }
}
h1>span{
  bottom: 0;
  left: 0;
  position: absolute;
  transition: translateY(-50%);
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: sans-serif;
  font-style: italic;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  background:linear-gradient(#262626,#eaeaea,#262626);
  -webkit-background-clip: text;
  color:transparent;
  @media (min-width: 368px) {
    white-space: nowrap;
  }
  @media (min-width: 468px) {
    font-size: 3rem;
  }
  @media (min-width: 839px) {
    font-size: 4rem;
  }
}
h1>span:nth-child(1)
{
  z-index: 2;
}
h1>span:nth-child(2)
{
  z-index: 1;
  text-shadow: 1px 1px 0 #262626, 2px 2px 0 #262626, 3px 3px 0 #262626,
  4px 4px 0 #262626, 5px 5px 0 #262626, 1px 1px 0 #262626, 6px 20px 20px rgba(0,0,0,1),
  -1px -1px 0 #fff;
}
.section-inner {
  padding: 0 10px;
  @media (min-width: 368px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    align-items: flex-end;
    padding-top: 5vw;
  }
  @media (max-width: 1024px) {
    align-items: flex-end;
  }
}
.relative {
  background: linear-gradient(to bottom, #010702, #404040, #808080);
  img {
    max-width: 80%;
    min-width: 240px;
    @media (min-width: 768px) {
      min-width: 260px;
    }
    @media (max-width: 1170px) {
      max-width: 25vw;
    }
  }
}
.picture-wrapper {
  display: flex;
  align-items: flex-end;
  background: none;
  @media (max-width: 639px) {
    display: none;
  }
}
.description-wrapper {
  align-self: center;
  @media (max-width: 1380px) {
    max-width: 600px;
  }
}
</style>
