<template>
  <section class="advantage">
    <div class="flex flex-col-reverse gap-4 lg:gap-[7rem] lg:max-w-12col lg:py-[5rem] max-w-5col md:flex-row md:gap-12 md:max-w-8col md:py-10 mt-20 mx-auto px-8 py-2 w-full">
      <div class="lg:py-8 py-2 space-y-4 w-full">
        <h1 class="hero-title bg-text font-serif gradient hidden leading-normal lg:leading-normal lg:text-5xl md:block text-4xl text-koromiko uppercase">
          <span>Anna Kuchma</span>
          <span>Anna Kuchma</span>
        </h1>

        <ul class="advantage-list space-y-4">
          <li class="dot"> На своём примере показываю, как быстро можно достичь цели&nbsp;🎯</li>
          <li class="dot"> Независимый технолог модификации и реконструкции волос</li>
          <li class="dot">С нуля до студии 100м²</li>
          <li class="dot">Обучение с нуля</li>
          <li class="dot"> Онлайн/офлайн повышение квалификации для действующих мастеров</li>
          <li class="dot"> Мои ученицы работают по всему миру и успешно применяют мою уникальную методику</li>
          <li class="dot"> Автор онлайн курса «Идеальное полотно. Работа с ёлкой»</li>
        </ul>
        <div
            class="flex flex-col items-center lg:flex-row lg:space-x-2.5 lg:space-y-0 py-2.5 space-x-0 space-y-2.5 w-full">
<!--          <a class="btn golden-border inline-block lg:w-auto overflow-hidden p-[2px] w-full" role="button"-->
<!--             href="#courseProgram"> <span-->
<!--              class="golden h-full inline-flex items-center justify-center px-8 rounded-[0.8725rem] w-full"> Онлайн обучение </span>-->
<!--          </a>-->
          <LiquidButton greetingMessage="Онлайн обучение"/>
        </div>
      </div>
      <div class="gallery h-fit lg:max-w-4col max-w-full md:max-h-none md:max-w-3col overflow-hidden rounded-3xl shrink-0 w-full xl:max-w-5col">
        <Slider/>
      </div>
    </div>
  </section>
</template>

<script>
import LiquidButton from "@/components/LiquidButton";

export default {
  components: {LiquidButton},
}
</script>

<style lang="scss">

  .advantage {
    overflow: hidden;
  }
  @media (min-width: 1280px) {
    .xl\:max-w-5col {
      max-width: 464px;
    }
  }
  @media (min-width: 1024px) {
    .lg\:max-w-4col {
      max-width: 368px;
    }
  }
  @media (min-width: 768px) {
    .md\:max-w-3col {
      max-width: 272px;
    }
  }
  @media (min-width: 1024px) {
    .lg\:max-w-12col {
      max-width: 1136px;
    }
  }
  .advantage-list {
    font-size: 1.3rem;
  }
  .dot {
    display: flex;
    align-items: center;
    &:before {
      content: '';
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background-color: #cccccc;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
</style>
